import React, { useState, useEffect } from "react";
import InfoIcon from "../assets/images/info-icon.svg";
import MacBookPro from "../assets/images/MacBook-Pro.webp";
import MacBookAir from "../assets/images/MacBook-Air.webp";
import MacBook from "../assets/images/MacBook.webp";
import MacMini from "../assets/images/Mac-Mini.webp";
import MacStudio from "../assets/images/Mac-Studio.webp";
import MacPro from "../assets/images/Mac-Pro.webp";
import iMac from "../assets/images/iMac.webp";
import iMacPro from "../assets/images/iMac-Pro.webp";
import AppleDisplay from "../assets/images/Apple-Display.webp";
import CheckIcon from "../assets/images/check-icon.svg";
import CloseIcon from "../assets/images/close-icon.svg";
import ModalCloseIcon from "../assets/images/modal-close.svg";
import Close from "../assets/images/close.svg";
import DeviceType from "../assets/images/device-type.webp";
import YearModel from "../assets/images/year-model.webp";
import Laptop from "../assets/images/laptop.webp";
import { useParams, useNavigate, Link } from "react-router-dom";
import api from "../api/services/api";

const products = [
    {
        id: "macbook-pro",
        img: MacBookPro,
        name: "MacBook Pro",
        cash: "$4450",
    },
    { id: "macbook-air", img: MacBookAir, name: "MacBook Air", cash: "$950"},
    { id: "macbook", img: MacBook, name: "MacBook", cash: "$230" },
    { id: "mac-mini", img: MacMini, name: "Mac Mini", cash: "$1400" },
    { id: "mac-studio", img: MacStudio, name: "Mac Studio", cash: "$4100" },
    { id: "mac-pro", img: MacPro, name: "Mac Pro", cash: "$4950" },
    { id: "imac", img: iMac, name: "iMac", cash: "$1400" },
    { id: "imac-pro", img: iMacPro, name: "iMac Pro", cash: "$1600" },
    { id: "apple-display", img: AppleDisplay, name: "Apple Display", cash: "$2750" },
];

const ProductDetails = () => {
    const [openAccordion, setOpenAccordion] = useState(1);
    const [currentStep, setCurrentStep] = useState(1);

    const [selectedScreen, setSelectedScreen] = useState(null);
    const [deviceDetails, setDeviceDetails] = useState(null);
    const [selectedModal, setSelectedModal] = useState(null);
    const [selectedProcessor, setSelectedProcessor] = useState(null);
    const [selectedStorage, setSelectedStorage] = useState(null);
    const [selectedRAM, setSelectedRAM] = useState(null);
    const [productSize, setProductSize] = useState([]);
    const [selectedIssues, setSelectedIssues] = useState({});
    const [modifiers, setModifiers] = useState([]);
    const [modifierData, setModifierData] = useState({});
    const [conditionsData, setConditions] = useState([]);
    const [finalTotal, setfinalTotal] = useState();
    const [selectedCondition, setSelectedCondition] = useState(null);
    const [selectedConfigurations, setSelectedConfigurations] = useState([]);
    const [openModal, setOpenModal] = useState(null);
    const [showSummary, setShowSummary] = useState(false);
    const [hasRestarted, setHasRestarted] = useState(false);
    const [update, setUpdate] = useState(false);

    const { id } = useParams();
    const navigate = useNavigate();
    const product = products.find((p) => p.id === id);

    const toggleAccordion = (index) => {
        if (index <= currentStep) {
            setOpenAccordion(openAccordion === index ? null : index);
        }
    };

    const goToNextStep = () => {
        if (currentStep === 3) {
            setShowSummary(true);
            setOpenAccordion(null);
        } else {
            setCurrentStep((prev) => prev + 1);
            setOpenAccordion((prev) => prev + 1);
        }
    };

    const handleClearSelection = () => {
        navigate("/sell");
    };

    const handleCheckboxChange = (id, value) => {
        setSelectedIssues(prev => ({
            ...prev,
            [id]: value,
        }));

        setModifierData(prev => ({
            ...prev,
            [id]: value === "yes" ? true : false,
        }));
    };

    const handleOpen = (modalName) => {
        setOpenModal(modalName);
    };

    const handleClose = () => {
        setOpenModal(null);
    };

    const clearSelectionsFrom = (level) => {
        if (currentStep === 3) {
            setShowSummary(false);
            setCurrentStep(1);
            setOpenAccordion(1);
            setHasRestarted(true);
        }
        const resetMap = {
            screen: [setSelectedScreen, setSelectedModal, setSelectedProcessor, setSelectedStorage, setSelectedRAM],
            model: [setSelectedModal, setSelectedProcessor, setSelectedStorage, setSelectedRAM],
            processor: [setSelectedProcessor, setSelectedStorage, setSelectedRAM],
            storage: [setSelectedStorage, setSelectedRAM],
            ram: [setSelectedRAM],
        };
        resetMap[level]?.forEach((fn) => fn(null));
        const typeMap = {
            processor: "CPU",
            storage: "SSD",
            ram: "RAM",
        };
        const levelOrder = ["screen", "model", "processor", "storage", "ram"];
        const index = levelOrder.indexOf(level);
        if (index >= 0) {
            const levelsToRemove = levelOrder.slice(index);
            const typesToRemove = levelsToRemove.map((lv) => typeMap[lv]).filter(Boolean);

            setSelectedConfigurations((prev) => {
                return prev.filter((id) => {
                    const conf = selectedModal.configurations?.find((c) => c.id === id);
                    return conf && !typesToRemove.includes(conf.type);
                });
            });
        }
    };

    useEffect(() => {
        if (update && currentStep === 3) {
            setCurrentStep(2);
            setOpenAccordion(2);
            setUpdate(false);
            setHasRestarted(true);
        }
    }, [update, currentStep]);

    // scroll disable/enable
    useEffect(() => {
        if (openModal) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [openModal]);


    useEffect(() => {
        const fetchModels = async () => {
            try {
                const res = await api.get(`/models/${id}`);
                if (res.data.success) {
                    setProductSize(res.data.data);
                }
            } catch (err) {
                console.error("Error fetching models:", err);
            }
        };
        fetchModels();
    }, [id]);

    useEffect(() => {
        const fetchDevices = async () => {
            if (!selectedScreen) return;
            try {
                const res = await api.get(`/devices/${selectedScreen.id}`);
                if (res.data.success) {
                    setDeviceDetails(res.data);
                }
            } catch (err) {
                console.error("Error fetching models:", err);
            }
        };
        fetchDevices();
    }, [selectedScreen]);

    useEffect(() => {
        const fetchModifiers = async () => {
            try {
                const res = await api.get(`/modifiers?device_type=${product.id}`);
                if (res.status === 200) {
                    setModifiers(res.data);
                    const initialModifiers = {};
                    res.data.forEach(item => {
                        initialModifiers[item.id] = false;
                    });
                    setModifierData(initialModifiers);
                }
            } catch (err) {
                console.error("Error fetching modifiers:", err);
            }
        };
        fetchModifiers();
    }, []);

    useEffect(() => {
        const fetchConditions = async () => {
            try {
                const res = await api.get(`/conditions`);
                if (res.status === 200) {
                    setConditions(res.data.conditions);
                }
            } catch (err) {
                console.error("Error fetching modifiers:", err);
            }
        };
        fetchConditions();
    }, []);

    const calculatePrice = async (condition) => {
        try {
            const res = await api.post(`/calculate-price`, {'device_id': selectedModal.id, 'configurations': selectedConfigurations, 'condition_id': condition.id, 'modifiers': modifierData});
            setfinalTotal(res.data.final_total);
            setSelectedCondition(res.data.condition);
            
        } catch (err) {
            console.error("Error fetching modifiers:", err);
        }
    };

    return (
        <>
            <section className="py-10 border-b border-[rgba(42,142,158,0.2)]">
                <div className="container">
                    <div>
                        {/* Header */}
                        <div className="mb-6 flex justify-between sm:gap-4 gap-3 items-center sm:flex-nowrap flex-wrap">
                            {product ? (
                                <h1 className="font-bold md:!text-[32px] text-[23px] leading-tight md:text-nowrap">
                                    Sell Your Used {product.name}
                                </h1>
                            ) : null}
                        </div>

                        {/* Step 1 Accordion */}
                        <section className="bg-white md:py-[30px] md:ps-[110px] py-[15px] md:pe-5 px-5 md:rounded-xl border border-[rgba(42,142,158,0.2)] md:m-0 md:mb-6 -mx-5 mb-[15px]">
                            <div
                                className="quote-accordion-header flex justify-between items-center"
                            >
                                <div className="flex items-center gap-5 relative md:start-[-70px]">
                                    <div className="bg-secondary text-white text-xl size-[50px] min-w-[50px] rounded-full text-center flex items-center justify-center">
                                        1
                                    </div>
                                    <div className="flex items-center gap-2.5">
                                        <button
                                            type="button"
                                            className="text-xl font-bold text-[#070707] focus:outline-none text-start cursor-pointer leading-tight"
                                            onClick={() => toggleAccordion(1)}
                                        >
                                            Device Configuration
                                        </button>
                                        {openAccordion === 1 && currentStep >= 1 && (
                                            <img onClick={() => handleOpen("help")} src={InfoIcon} alt="Info icon" className="md:hidden cursor-pointer" />
                                        )}
                                    </div>
                                </div>
                                {openAccordion === 1 && currentStep >= 1 && (
                                    <button onClick={() => handleOpen("help")} className="md:flex items-center gap-2.5 cursor-pointer hidden">
                                        <span className="text-sm roboto flex">
                                            Need help configuring your device?
                                        </span>
                                        <img src={InfoIcon} alt="Info icon" />
                                    </button>
                                )}
                            </div>

                            {/* Accordion Content */}
                            {openAccordion === 1 && (
                                <div className="quote-accordion-content mt-4">
                                    <div className="flex items-center sm:gap-20 gap-2.5 pb-4 mb-4 max-w-[575px] w-full border-b border-[rgba(214,214,214,0.831)]">
                                        <div className="flex items-center gap-2.5 sm:max-w-[250px] max-w-[120px] w-full">
                                            <p className="font-semibold roboto flex">
                                                <span className="sm:inline-flex hidden me-1">Select Your</span> Product
                                            </p>
                                            <img onClick={() => handleOpen("product")} src={InfoIcon} alt="Info icon" className="cursor-pointer" />
                                        </div>
                                        {product ? (
                                            <div className="flex items-center gap-2.5 cursor-pointer">
                                                <span className="roboto flex">
                                                    {product.name}
                                                </span>
                                                <img
                                                    onClick={handleClearSelection}
                                                    src={CloseIcon} alt="Close icon" className="size-[18px] cursor-pointer" />
                                            </div>
                                        ) : null}
                                    </div>

                                    {/* screen size selection */}
                                    <div className="mb-4">
                                        <div className={`flex items-center pb-4 max-w-[575px] w-full sm:gap-20 gap-2.5 ${selectedScreen ? 'border-b border-[rgba(214,214,214,0.831)] mb-4' : ''}`}>
                                            <div className="flex items-center gap-2.5 sm:max-w-[250px] max-w-[120px] w-full">
                                                <p className="font-semibold roboto flex">
                                                    <span className="sm:inline-flex hidden me-1">Select Your</span> Model
                                                </p>
                                                <img onClick={() => handleOpen("size")} src={InfoIcon} alt="Info icon" className="cursor-pointer" />
                                            </div>
                                            {selectedScreen ? (
                                                <div className="flex items-center gap-2.5 cursor-pointer">
                                                    <span className="roboto flex">{selectedScreen.name}</span>
                                                    <img
                                                        onClick={() => { clearSelectionsFrom("screen");}}
                                                        src={CloseIcon}
                                                        alt="Close icon"
                                                        className="size-[18px] cursor-pointer"
                                                    />
                                                </div>
                                            ) : null}
                                        </div>

                                        {!selectedScreen && (
                                            <div className="flex gap-3 flex-wrap">
                                                {productSize.map((screen) => (
                                                    <button 
                                                        key={screen.id}
                                                        onClick={() => setSelectedScreen(screen)}
                                                        className="px-5 py-[13px] border rounded text-sm cursor-pointer font-semibold bg-[#f0f6fc] border-[#d6d6d6d4]"
                                                    >
                                                        {screen.name}
                                                    </button>
                                                ))}
                                            </div>
                                        )}

                                        {/* model selection */}
                                        {selectedScreen && (
                                            <>
                                                <div className={`flex items-center pb-4 max-w-[575px] w-full sm:gap-20 gap-2.5 ${selectedModal && 'border-b mb-4 border-[rgba(214,214,214,0.831)]'}`}>
                                                    <div className="flex items-center gap-2.5 sm:max-w-[250px] max-w-[120px] w-full">
                                                        <p className="font-semibold roboto flex">
                                                            <span className="sm:inline-flex hidden me-1">Select Your</span> Device
                                                        </p>
                                                    </div>
                                                    {selectedModal ? (
                                                        <div className="flex items-center gap-2.5 cursor-pointer">
                                                            <span className="roboto flex">{selectedModal.text}"</span>
                                                            <img
                                                                onClick={() => clearSelectionsFrom("model")}
                                                                src={CloseIcon}
                                                                alt="Close icon"
                                                                className="size-[18px] cursor-pointer"
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>

                                                {!selectedModal && (
                                                    <div className="flex gap-2.5 flex-wrap roboto">
                                                        {deviceDetails?.devices?.map((device, idx) => (
                                                            <button
                                                            key={idx}
                                                            onClick={() => {setSelectedModal(device);}}
                                                            className="h-18 px-5 border rounded text-sm cursor-pointer font-semibold bg-[#f0f6fc] border-[#d6d6d6d4]"
                                                            >
                                                                <span className="block">{device.text}</span>
                                                                <span className="block">Model: {device.a_number}</span>
                                                                <span className="block text-[13px] text-primary">
                                                                Up to {device.max_value}
                                                                </span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* Processor selection */}
                                        {selectedScreen && selectedModal && (
                                            <>
                                                <div className={`flex items-center pb-4 max-w-[575px] w-full sm:gap-20 gap-2.5 ${selectedProcessor && 'border-b mb-4 border-[rgba(214,214,214,0.831)]'}`}>
                                                    <div className="flex items-center gap-2.5 cursor-pointer sm:max-w-[250px] max-w-[120px] w-full">
                                                        <p className="font-semibold roboto flex">
                                                            <span className="sm:inline-flex hidden me-1">Select Your</span> Processor
                                                        </p>
                                                    </div>
                                                    {selectedProcessor ? (
                                                        <div className="flex items-center gap-2.5 cursor-pointer">
                                                            <span className="roboto flex">{selectedProcessor}</span>
                                                            <img
                                                                onClick={() => clearSelectionsFrom("processor")}
                                                                src={CloseIcon}
                                                                alt="Close icon"
                                                                className="size-[18px] cursor-pointer"
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>

                                                {!selectedProcessor && (
                                                    <div className="flex gap-2.5 flex-wrap roboto">
                                                        {selectedModal.configurations?.filter((config) => config.type === "CPU")?.map((proc, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => {setSelectedProcessor(proc.option); setSelectedConfigurations(prev => [...prev, proc.id]);}}
                                                                className="h-12 px-5 border rounded text-sm cursor-pointer font-semibold bg-[#f0f6fc] border-[#d6d6d6d4]"
                                                            >
                                                                <span className="block">{proc.option}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* Storage selection */}
                                        {selectedScreen && selectedModal && selectedProcessor && (
                                            <>
                                                <div className={`flex items-center pb-4 max-w-[575px] sm:gap-20 gap-2.5 w-full ${selectedStorage && 'border-b mb-4 border-[rgba(214,214,214,0.831)]'}`}>
                                                    <div className="flex items-center gap-2.5 cursor-pointer sm:max-w-[250px] max-w-[120px] w-full">
                                                        <p className="font-semibold roboto flex">
                                                            <span className="sm:inline-flex hidden me-1">Select Your</span> Storage
                                                        </p>
                                                    </div>
                                                    {selectedStorage ? (
                                                        <div className="flex items-center gap-2.5 cursor-pointer">
                                                            <span className="roboto flex">{selectedStorage}</span>
                                                            <img
                                                                onClick={() => clearSelectionsFrom("storage")}
                                                                src={CloseIcon}
                                                                alt="Close icon"
                                                                className="size-[18px] cursor-pointer"
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>

                                                {!selectedStorage && (
                                                    <div className="flex gap-2.5 flex-wrap roboto">
                                                        {selectedModal?.configurations?.filter((config) => config.type === "SSD").map((storage, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => {setSelectedStorage(storage.option); setSelectedConfigurations(prev => [...prev, storage.id]);}}
                                                                className="h-12 px-5 border rounded text-sm cursor-pointer font-semibold bg-[#f0f6fc] border-[#d6d6d6d4]"
                                                            >
                                                                <span className="block">{storage.option}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}

                                        {/* Ram selection */}
                                        {selectedScreen && selectedModal && selectedProcessor && selectedStorage && (
                                            <>
                                                <div className={`flex items-center pb-4 max-w-[575px] sm:gap-20 gap-2.5 w-full ${selectedRAM && 'mb-4'}`}>
                                                    <div className="flex items-center gap-2.5 cursor-pointer sm:max-w-[250px] max-w-[120px] w-full">
                                                        <p className="font-semibold roboto flex">
                                                            <span className="sm:inline-flex hidden me-1">Select Your</span> RAM
                                                        </p>
                                                    </div>
                                                    {selectedRAM ? (
                                                        <div className="flex items-center gap-2.5 cursor-pointer">
                                                            <span className="roboto flex">{selectedRAM}</span>
                                                            <img
                                                                onClick={() => clearSelectionsFrom("ram")}
                                                                src={CloseIcon}
                                                                alt="Close icon"
                                                                className="size-[18px] cursor-pointer"
                                                            />
                                                        </div>
                                                    ) : null}
                                                </div>

                                                {!selectedRAM && (
                                                    <div className="flex gap-2.5 flex-wrap roboto">
                                                        {selectedModal?.configurations?.filter((config) => config.type === "RAM").map((ram, idx) => (
                                                            <button
                                                                key={idx}
                                                                onClick={() => {setSelectedRAM(ram.option); setSelectedConfigurations(prev => [...prev, ram.id]); goToNextStep();}}
                                                                className="h-12 px-5 border rounded text-sm cursor-pointer font-semibold bg-[#f0f6fc] border-[#d6d6d6d4]"
                                                            >
                                                                <span className="block">{ram.option}</span>
                                                            </button>
                                                        ))}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Step 2 Accordion */}
                        <section className={`md:py-[30px] md:ps-[110px] py-[15px] md:pe-5 px-5 md:rounded-xl border border-[rgba(42,142,158,0.2)] md:m-0 md:mb-6 -mx-5 mb-[15px] ${!hasRestarted && 2 > currentStep ? "bg-[rgba(42,142,158,0.1)] cursor-not-allowed" : "bg-white"}`}>
                            <div
                                className="quote-accordion-header flex justify-between items-center"
                            >
                                <div className="flex items-center gap-5 relative md:start-[-70px]">
                                    <div className={`text-white text-xl size-[50px] min-w-[50px] rounded-full text-center flex items-center justify-center roboto ${2 > currentStep ? 'bg-transparent border border-[#2a8e9e] text-primary' : 'bg-secondary'} `}>
                                        2
                                    </div>
                                    <button
                                        type="button"
                                        className={`text-xl font-bold text-[#070707] focus:outline-none ${!hasRestarted && 2 > currentStep ? 'cursor-not-allowed text-[#606060]' : 'cursor-pointer'}`}
                                        onClick={() => {toggleAccordion(2); setUpdate(true)}}
                                    >
                                        Functional Condition
                                    </button>
                                    {openAccordion === 2 && currentStep >= 2 && (
                                        <img onClick={() => handleOpen("functional")} src={InfoIcon} alt="Info icon" className="md:hidden block cursor-pointer" />
                                    )}
                                </div>
                                {openAccordion === 2 && currentStep >= 2 && (
                                    <button onClick={() => handleOpen("functional")} className="md:flex items-center gap-2.5 cursor-pointer hidden">
                                        <span className="text-sm roboto flex">
                                            Make Selection Below
                                        </span>
                                        <img src={InfoIcon} alt="Info icon" />
                                    </button>
                                )}
                            </div>

                            {openAccordion === 2 && currentStep >= 2 && (
                                <div className="quote-accordion-content mt-4">
                                    <div className="mt-6">
                                        <div>
                                            <legend className="font-bold pb-2.5 mb-5 border-b border-[rgba(214,214,214,0.831)] w-full">
                                                Please check all applicable device issues:
                                            </legend>
                                            <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-3">
                                                {modifiers.map((issue, idx) => (
                                                    <div key={idx} className="my-2.5 roboto">
                                                        <div className="flex flex-col gap-1">
                                                            <strong className="block text-[15px]">{issue.name}</strong>
                                                            {issue.description && <p className="text-sm">{issue.description}</p>}
                                                        </div>

                                                        <div className="flex gap-3 mt-1">
                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name={`issue-${issue.id}`}
                                                                    value="yes"
                                                                    checked={selectedIssues[issue.id] === "yes"}
                                                                    onChange={() => handleCheckboxChange(issue.id, "yes")}
                                                                />
                                                                <span>Yes</span>
                                                            </label>

                                                            <label className="flex items-center gap-2 cursor-pointer">
                                                                <input
                                                                    type="radio"
                                                                    name={`issue-${issue.id}`}
                                                                    value="no"
                                                                    checked={selectedIssues[issue.id] === "no"}
                                                                    onChange={() => handleCheckboxChange(issue.id, "no")}
                                                                />
                                                                <span>No</span>
                                                            </label>
                                                        </div>
                                                    </div>
                                                    ))}
                                            </div>
                                        </div>
                                        {selectedIssues && (
                                            <div>
                                                <button
                                                    type="button"
                                                    onClick={goToNextStep}
                                                    disabled={!modifiers.every(issue => selectedIssues[issue.id])}
                                                    className={`button rounded-xl px-5 font-bold py-3.5 inline-flex mt-5 text-center leading-tight ${
                                                        !modifiers.every(issue => selectedIssues[issue.id])
                                                        ? 'cursor-not-allowed bg-[#eee] text-[#606060] opacity-50'
                                                        : 'bg-secondary text-white cursor-pointer'
                                                    }`}
                                                >
                                                    Continue
                                                </button>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </section>

                        {/* Step 3 Accordion */}
                        <section className={`md:py-[30px] md:ps-[110px] py-[15px] md:pe-5 px-5 md:rounded-xl border border-[rgba(42,142,158,0.2)] md:m-0 md:mb-6 -mx-5 mb-[15px] ${!hasRestarted && 3 > currentStep ? "bg-[rgba(42,142,158,0.1)] cursor-not-allowed" : "bg-white"}`}>
                            <div
                                className="quote-accordion-header flex justify-between items-center"
                            >
                                <div className="flex items-center gap-5 relative md:start-[-70px]">
                                    <div className={`text-white text-xl size-[50px] min-w-[50px] rounded-full text-center flex items-center justify-center roboto ${3 > currentStep ? 'bg-transparent border border-[#2a8e9e] text-primary' : 'bg-secondary'} `}>
                                        3
                                    </div>
                                    <button
                                        type="button"
                                        className={`text-xl font-bold text-[#070707] focus:outline-none ${!hasRestarted && 3 > currentStep ? 'cursor-not-allowed text-[#606060]' : 'cursor-pointer'}`}
                                        onClick={() => toggleAccordion(3)}
                                    >
                                        Cosmetic Condition
                                    </button>
                                    {openAccordion === 3 && currentStep >= 3 && (
                                        <img onClick={() => handleOpen("cosmetic")} src={InfoIcon} alt="Info icon" className="md:hidden block cursor-pointer" />
                                    )}
                                </div>
                                {openAccordion === 3 && currentStep >= 3 && (
                                    <button onClick={() => handleOpen("cosmetic")} className="md:flex items-center gap-2.5 cursor-pointer hidden">
                                        <span className="text-sm roboto flex">
                                            How do I determine it?
                                        </span>
                                        <img src={InfoIcon} alt="Info icon" />
                                    </button>

                                )}
                            </div>

                            {openAccordion === 3 && currentStep >= 3 && (
                                <div className="quote-accordion-content mt-4">
                                    <div className="grid lg:grid-cols-4 md:grid-cols-3 min-[460px]:grid-cols-2 grid-cols-1 gap-5">
                                        {conditionsData.map((condition) => (
                                            <button
                                                key={condition.id}
                                                type="button"
                                                className="w-full bg-[#f7f9fa] border py-6 px-4 border-[#d6d6d6d4] cursor-pointer"
                                                onClick={() => {
                                                    goToNextStep();
                                                    calculatePrice(condition);
                                                }}
                                            >
                                                <p className="text-lg text-[#0f7208] font-bold leading-none">{condition.name}</p>
                                                <p className="roboto text-[13px] leading-tight mt-0.5">{condition.description}</p>
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </section>

                        {showSummary && (
                            <section className="bg-white p-6 rounded-xl border border-[rgba(42,142,158,0.2)]">
                                <div className="md:flex block justify-around gap-3 items-center mb-10 mt-5 md:flex-nowrap flex-wrap">
                                    <div>
                                        <p className="text-[#e4730a] text-[45px] font-extrabold text-center md:leading-none">${finalTotal}</p>
                                        <img className="md:block hidden" src={Laptop} alt="Laptop Image" />
                                    </div>
                                    <div className="md:text-start text-center">
                                        <p className="md:text-[28px] text-xl font-bold mb-4">Your Product Information:</p>
                                        <p className="font-bold">{selectedScreen?.name} ({selectedModal?.year})</p>
                                        <ul className="roboto mt-4 text-start md:mx-0 w-max mx-auto">
                                            <li>{selectedProcessor} Processor</li>
                                            <li>{selectedStorage} Storage</li>
                                            <li>{selectedRAM} RAM</li>
                                            <li>{selectedCondition} Condition</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="text-center">
                                    <p className="uppercase text-sm roboto mb-2.5">Submit now to lock in your quote</p>
                                    <Link to="/sell/confirm" className="cursor-pointer sm:text-3xl block text-xl p-3.5 font-bold text-white rounded-md w-full bg-secondary hover:!bg-[#e4730a] transition-all duration-600 ease-in-out">
                                        Sell My Device for $<u>{finalTotal}</u>
                                    </Link>
                                </div>
                            </section>
                        )}
                    </div>
                </div>
            </section>

            {/* offer section */}
            <section className="bg-white md:py-20 py-10">
                <div className="container">
                    <h2 className="text-[29px] leading-[1.25] tracking-[-0.05rem] font-bold text-[#333] text-center mb-[30px]">SellYourMac.com Offers</h2>
                    <div className="max-w-[1280px] w-full mx-auto">
                        <div className="grid xl:grid-cols-3 sm:grid-cols-2 grid-cols-1 md:gap-x-[60px] gap-x-8 md:px-20 sm:px-10 roboto sm:mb-10 mb-5 border-b border-[rgba(42,142,158,0.2)] sm:pb-10 pb-5">
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(42,142,158,0.2)] flex-nowrap text-nowrap">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                99% Customer Satisfaction
                            </div>
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(42,142,158,0.2)] flex-nowrap text-nowrap">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                100% Secure Data Wipe
                            </div>
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 border-b border-[rgba(42,142,158,0.2)] flex-nowrap text-nowrap">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                Free Return Shipping Label
                            </div>
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 text-nowrap xl:border-0 border-b border-[rgba(42,142,158,0.2)]">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                Fast Payment: PayPal/Check
                            </div>
                            <div className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 text-nowrap sm:border-0 border-b border-[rgba(42,142,158,0.2)]">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                30 Day Offer Guarantee
                            </div>
                            <div id="packing-desc-ref" className="flex items-center gap-2.5 py-[15px] ps-1 pe-5 text-nowrap">
                                <img src={CheckIcon} alt="Check icon" className="size-[30px]" />
                                <p>
                                    Packing Materials on Request
                                    <a className="text-primary underline mx-0.5" href="#packing-desc">*</a>
                                </p>
                            </div>
                        </div>
                        <div className="robot text-[12px] font-medium">
                            <p id="packing-desc" className="mb-[10px] block">* Packing materials are only available for certain products.<a className="text-primary underline mx-0.5" href="#packing-desc-ref">↵</a> </p>
                            <p className="mb-[10px] block">We do not purchase devices that are locked, iCloud locked, under Device Management Software supervision, part of Apple’s DEP program, or have been reported stolen. It will be the seller's responsibility to pay for return shipping in the event the device cannot be unlocked and needs to be returned.</p>
                            <p className="mb-[10px] block">All data will be 100% wiped as all systems will be restored to original factory settings.</p>
                            <p className="block">We are able to match or beat most legitimate competitor's cash offers. Please check out the competition and you will see our offer is better! Sell to SYM and avoid paying 15% in eBay &amp; Paypal fees.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Info Section */}
            <section className="py-10">
                <div className="container">
                    <div className="space-y-5">
                        <h2 className="mb-0 !text-[26px] font-bold">Apple Sell Back</h2>
                        <p className="roboto">
                            Selling an item like an Apple product through a local retailer or an auction site can be risky and inconvenient. To ensure that you get your time and money's worth, sell your Apple products back through SellYourMac. We are a company that is willing
                            to pay you a competitive price for your Apple products that is equal to or greater than our legitimate competitors. We make the process as easy and straightforward as possible. We will keep you informed on important things like shipment times
                            and payment processing.
                        </p>
                        <h3 className="mb-0 text-[22px] font-bold">Tell Us About Your Device</h3>
                        <p className="roboto">
                            Before selling your Apple device, you must give us some information about your product.
                        </p>
                        <p className="roboto">
                            Click on the drop-down menu and select your apple product. From here you will be prompted to make selections by starting with the product and moving on to the processor, hard drive capacity, and ram selections.
                        </p>
                        <p className="roboto">
                            Next, answer the questions about add-ons, the condition of the device, and its performance by clicking on the appropriate options. You also have the option of providing additional information that you feel may be relevant.
                        </p>
                        <p className="roboto">
                            If you add additional information, the quote we provide you on the next page is subject to change after a manual review. When you are satisfied that you entered all the information, click on <strong>Continue</strong> to go to the next page.
                        </p>
                        <h3 className="mb-0 text-[22px] font-bold">Receive Your Free Quote</h3>
                        <p className="roboto">
                            Our offer for your device as well as a model and condition description will be located in a blue box. A list of all the information you provided will be displayed. You can enter a promo code if you have one, once you are satisfied with our offer
                            and reviewed the information to ensure it is correct. Next, click on <strong>Let's do it</strong> and begin filling out your contact information.
                        </p>
                        <h3 className="mb-0 text-[22px] font-bold">Ship Us Your Device</h3>
                        <p className="roboto">
                            After accepting our cash offer, an email with all the information you need will be sent to you. Then, you will carefully pack your Apple product and send it to our Cincinnati, Ohio address.
                        </p>
                        <h3 className="mb-0 text-[22px] font-bold">Get Paid</h3>
                        <p className="roboto">
                            Your proximity from our Cincinnati location will depend on how quickly we will receive and inspect your device. Once we get your device, we will issue your payment in one to three days. If your payment preference is PayPal, you should receive
                            your payment instantly after your device checks out.
                        </p>
                        <hr className="sm:my-10 !my-8" />
                        <h2 className="mb-0 !text-[26px] font-bold">Sell Your Apple Products Back With Us</h2>
                        <p className="roboto">
                            If you want to sell your Apple products back hassle free, you have come to the right place. We offer a pleasant selling experience and outstanding customer service. SellYourMac has an A+ rating from the Better Business Bureau, and we were featured
                            in several publications, including MacWorld magazine, AppleTell.com, and iPhone Life.
                        </p>
                        <p className="roboto">
                            Sell your Apple devices with a reliable and reputable buyer like us and receive your free quote today!
                        </p>
                    </div>
                </div>
            </section>

            {/* Need help modal */}
            {openModal === "help" && (
                <div className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-40" onClick={handleClose}>
                    <img src={ModalCloseIcon} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:flex hidden" onClick={handleClose} />
                    <img src={Close} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:hidden flex" onClick={handleClose} />
                    <div onClick={(e) => e.stopPropagation()} className="bg-white md:p-6 sm:p-10 pt-14 pb-6 px-6 md:max-w-[800px] md:w-[calc(100%-32px)] w-full overflow-auto md:h-auto h-full shadow-lg">
                        <h2 className="text-[29px] font-bold mb-6">Need Assistance?</h2>
                        <p className="roboto mb-5">
                            <a href="mailto:quotes@sellyourmac.com?subject=Help with my SellYourMac Quote" className="font-black underline">
                                Send us an Email
                            </a> or speak to an Apple expert at
                            <b>844-735-5622</b>
                        </p>
                        <p className="roboto">
                            Click for information about configuring your device.
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-5 px-4 py-2 text-sm bg-secondary text-white rounded-lg w-full cursor-pointer"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            )}

            {/* Product Modal */}
            {openModal === "product" && (
                <div className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-40" onClick={handleClose}>
                    <img src={ModalCloseIcon} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:flex hidden" onClick={handleClose} />
                    <img src={Close} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:hidden flex" onClick={handleClose} />
                    <div onClick={(e) => e.stopPropagation()} className="bg-white md:p-6 sm:p-10 pt-14 pb-6 px-6 lg:max-w-[800px] md:max-w-[600px] md:max-h-[782px] overflow-auto h-full  md:w-[calc(100%-32px)] w-full shadow-lg">
                        <h2 className="!text-2xl font-bold mb-6">What type of apple device do I have?</h2>
                        <ol className="roboto list-decimal ps-5">
                            <li>Click on the Apple logo in the upper-left corner of your screen.</li>
                            <li>Click <strong>About This Mac</strong> and a pop-up will appear.</li>
                            <li>The <strong>device name</strong> is displayed below the operating system.</li>
                        </ol>
                        <img src={DeviceType} alt="What type of Apple device do I have?" />
                        <p className="text-center mb-3 roboto">
                            <b>Having trouble?</b> Email us at <a className="underline" href="mailto:quotes@sellyourmac.com?subject=Help on my SellYourMac Quote">quotes@sellyourmac.com</a>
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-5 px-4 py-2 text-sm bg-secondary text-white rounded-lg w-full cursor-pointer"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            )}

            {/* Screen Size Modal */}
            {openModal === "size" && (
                <div className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-40" onClick={handleClose}>
                    <img src={ModalCloseIcon} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:flex hidden" onClick={handleClose} />
                    <img src={Close} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:hidden flex" onClick={handleClose} />
                    <div onClick={(e) => e.stopPropagation()} className="bg-white md:p-6 sm:p-10 pt-14 pb-6 px-6 lg:max-w-[800px] md:max-w-[600px] lg:max-h-[782px] overflow-auto lg:h-full md:max-h-max md:h-auto h-full  md:w-[calc(100%-32px)] w-full shadow-lg">
                        <h2 className="!text-2xl font-bold mb-6">What size screen do I have?</h2>
                        <ol className="roboto list-decimal ps-5">
                            <li>Click on the Apple logo in the upper-left corner of your screen.</li>
                            <li>Click <strong>About This Mac</strong> and a pop-up will appear.</li>
                            <li>The <strong>screen size</strong> is displayed below the operating system.</li>
                        </ol>
                        <img src={YearModel} alt="What type of Apple device do I have?" />
                        <p className="text-center mb-3 roboto">
                            <b>Having trouble?</b> Email us at <a className="underline" href="mailto:quotes@sellyourmac.com?subject=Help on my SellYourMac Quote">quotes@sellyourmac.com</a>
                        </p>
                        <button
                            onClick={handleClose}
                            className="mt-5 px-4 py-2 text-sm bg-secondary text-white rounded-lg w-full cursor-pointer"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            )}

            {/* Functional Condition modal */}
            {openModal === "functional" && (
                <div className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-40" onClick={handleClose}>
                    <img src={ModalCloseIcon} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:flex hidden" onClick={handleClose} />
                    <img src={Close} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:hidden flex" onClick={handleClose} />
                    <div onClick={(e) => e.stopPropagation()} className="bg-white md:p-6 sm:p-10 pt-14 pb-6 px-6 md:max-w-[800px] md:w-[calc(100%-32px)] w-full overflow-auto md:h-auto h-full shadow-lg">
                        <h2 className="!text-2xl font-bold mb-6">How to Determine the Functional Condition</h2>
                        <div className="roboto">
                            <p className="mb-5">If your device has no issues, please select <strong>100% Functional</strong>.</p>
                            <p>If your device has functional issues, please select <strong>Has Functional Issues</strong>, and select the checkboxes below to specify all applicable device issues.</p>
                        </div>
                        <button
                            onClick={handleClose}
                            className="mt-5 px-4 py-2 text-sm bg-secondary text-white rounded-lg w-full cursor-pointer"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            )}

            {/* Battery Condition Modal */}
            {openModal === "cosmetic" && (
                <div className="fixed inset-0 bg-[#000000cc] flex justify-center items-center z-40" onClick={handleClose}>
                    <img src={ModalCloseIcon} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:flex hidden" onClick={handleClose} />
                    <img src={Close} alt="Close Icon" className="absolute top-4 end-4 cursor-pointer md:hidden flex bg-white" onClick={handleClose} />
                    <div onClick={(e) => e.stopPropagation()} className="bg-white md:p-6 sm:p-10 pt-14 pb-6 px-6 lg:max-w-[800px] md:max-w-[600px] max-h-fit overflow-auto h-full md:w-[calc(100%-32px)] w-full shadow-lg">
                        <h2 className="text-[29px] font-bold mb-6 text-center">Cosmetic Condition Guide 🖥️</h2>
                        <div className="roboto space-y-5 text-center">
                            <p>
                                Check the descriptions below to see which one best suits your device! 😊
                            </p>
                            <div className="pt-8"></div>
                            <p className="text-lg font-bold">Like New 💎</p>
                            <p className="text-xs italic font-bold">
                                These devices are practically flawless! One will have a tough time spotting any imperfections
                                <br />
                                The outer casing, keyboard, and screen are in Like New condition.
                            </p>
                            <div className="text-start">
                                <div className="space-y-1">
                                    <p>
                                        <b>Screen:</b> Mint condition, no noticeable wear or markings from 12" away.
                                    </p>
                                    <p>
                                        <b>Outer Casing:</b> Mint condition, minimal wear. May have a few faint scratches or scuffs that are nearly invisible from 12" away. Devices do not have nicks or dings. Corners, edges, and/or stands are not bent.<br />
                                    </p>
                                    <p>
                                        <b>Keyboard/Palm Rest:</b> Mint condition, minimal wear. May have a few faint scratches or scuffs that are nearly invisible from 12" away.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-8"></div>
                            <p className="text-lg font-bold">Good 👍</p>
                            <p className="text-xs italic font-bold">
                                These devices have been very well maintained and are exceptional!
                                <br />
                                They may show some minor signs of use, but are in overall Good condition.
                            </p>
                            <div className="text-start">
                                <div className="space-y-1">
                                    <p>
                                        <b>Screen:</b>
                                        Exceptional condition. May have a few faint micro-scratches or subtle permanent key marks from the keyboard pressing against the screen when closed. These marks are very hard to see when powered off and are not noticeable when powered on. These devices do not have any obvious, noticeable, or obstructive wear.
                                    </p>
                                    <p>
                                        <b>Outer Casing:</b>
                                        Exceptional condition. May have a few minor scuffs, scratches, micro nicks, or micro dings from normal use. The underside might show additional wear. Corners, edges, and/or stands are not bent.
                                    </p>
                                    <p>
                                        <b>Keyboard/Palm Rest:</b>
                                        Exceptional condition. May have a few very minor scuffs or scratches, micro nicks, or micro dings from normal use.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-8"></div>
                            <p className="text-lg font-bold">Fair 👌</p>
                            <p className="text-xs italic font-bold">
                                These devices have been loved and often used, but not abused.
                                <br />
                                They are in overall Fair condition.
                            </p>
                            <div className="text-start">
                                <div className="space-y-1">
                                    <p>
                                        <b>Screen:</b>
                                        Fair condition. May have minor scratches or permanent key marks present that are visible when powered off, but mostly unnoticeable when powered on. May have a small, very faint hot spot or lighter area on the screen, a small dark spot that does not affect the display, or very minor screen discoloration (light pink tint only visible on a white background).
                                    </p>
                                    <p>
                                        <b>Outer Casing:</b>
                                        Fair condition. May have noticeable small scratches, scuffs, and possible minor dings, nicks, or slight discoloration. Laptop corners may be slightly scuffed, bent, or dinged. The underside may have more visible wear. iMac stands may be slightly bent. Device casings may have minor discoloration or permanent sticker stains that have changed the color of the aluminum.
                                    </p>
                                    <p>
                                        <b>Keyboard/Palm Rest:</b>
                                        Fair condition. May have a few scuffs, scratches, small nicks, or small dings from normal use.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-8"></div>
                            <p className="text-lg font-bold">Poor 🛠️</p>
                            <p className="text-xs italic font-bold">
                                These devices show significant signs of use, but are still usable.
                                <br />
                                They are in overall Poor condition.
                            </p>
                            <div className="text-start">
                                <div className="space-y-1">
                                    <p>
                                        <b>Screen:</b>
                                        Acceptable, usable condition. May have noticeable scratches or permanent key marks present that are visible when powered off and also when powered on. May have noticeable hot spots or lighter areas on the screen, dark spots that affect the display, or noticeable screen discoloration (pink tint visible on a white background).
                                    </p>
                                    <p>
                                        <b>Outer Casing:</b>
                                        Acceptable, usable condition. May have noticeable scratches, scuffs, dings, nicks, or casing discoloration. Laptop corners may be scuffed, bent, or dinged. The underside may have more visible wear. iMac stands may be noticeably bent. Device casings may have noticeable discoloration or permanent sticker stains that have changed the color of the aluminum.
                                    </p>
                                    <p>
                                        <b>Keyboard/Palm Rest:</b>
                                        Acceptable, usable condition. May have noticeable scuffs, scratches, nicks, or dings.
                                    </p>
                                </div>
                            </div>
                            <div className="pt-6"></div>
                            <i className="font-bold">
                                Reminder: The condition of the screen or LCD always takes priority.
                                <br/>
                                If the screen is cracked or unusable, cite this as a Screen Issue in the
                                <br/>
                                "Functional Condition {`>`} Has Functional Issues" section.
                            </i>
                        </div>
                        <button
                            onClick={handleClose}
                            className="mt-6 px-4 py-2 text-sm bg-secondary text-white rounded-lg w-full cursor-pointer"
                        >
                            Close Window
                        </button>
                    </div>
                </div>
            )}

        </>
    );
};

export default ProductDetails;
