import React, { useState } from "react";

const steps = [
    { id: 1, title: "Personal Info" },
    { id: 2, title: "Address" },
    { id: 3, title: "Review & Submit" },
];

function App() {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        address: "",
        city: "",
    });

    const handleNext = () => {
        if (currentStep < steps.length) {
            setCurrentStep(currentStep + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const renderStepContent = () => {
        switch (currentStep) {
            case 1:
                return (
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name:</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">Email:</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                );
            case 2:
                return (
                    <div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Address:</label>
                            <input
                                type="text"
                                name="address"
                                value={formData.address}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700">City:</label>
                            <input
                                type="text"
                                name="city"
                                value={formData.city}
                                onChange={handleChange}
                                className="w-full p-2 border border-gray-300 rounded"
                            />
                        </div>
                    </div>
                );
            case 3:
                return (
                    <div>
                        <h3 className="text-lg font-bold mb-4">Review Your Details</h3>
                        <p><strong>Name:</strong> {formData.name}</p>
                        <p><strong>Email:</strong> {formData.email}</p>
                        <p><strong>Address:</strong> {formData.address}</p>
                        <p><strong>City:</strong> {formData.city}</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
                <div className="mb-6">
                    <h1 className="text-xl font-bold text-center">{steps[currentStep - 1].title}</h1>
                    <div className="flex justify-between mt-4">
                        {steps.map((step) => (
                            <div
                                key={step.id}
                                className={`w-1/3 text-center py-1 rounded ${currentStep === step.id
                                        ? "bg-blue-500 text-white"
                                        : "bg-gray-200 text-gray-700"
                                    }`}
                            >
                                Step {step.id}
                            </div>
                        ))}
                    </div>
                </div>

                <form>{renderStepContent()}</form>

                <div className="flex justify-between mt-6">
                    <button
                        onClick={handlePrev}
                        disabled={currentStep === 1}
                        className={`px-4 py-2 rounded ${currentStep === 1
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-500 text-white"
                            }`}
                    >
                        Previous
                    </button>
                    <button
                        onClick={handleNext}
                        disabled={currentStep === steps.length}
                        className={`px-4 py-2 rounded ${currentStep === steps.length
                                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                                : "bg-blue-500 text-white"
                            }`}
                    >
                        {currentStep === steps.length ? "Submit" : "Next"}
                    </button>
                </div>
            </div>
        </div>
    );
}

export default App;
