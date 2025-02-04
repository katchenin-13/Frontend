import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Briefcase, User, Rocket, CheckCircle, Building2 } from 'lucide-react';
import onboardingImage from "../images/onboarding.jpg";
import Dashboard from './Dashboard';

function Onboarding() {
    const [selectedOption, setSelectedOption] = useState(null);
    const [step, setStep] = useState(1);

    const [formData, setFormData] = useState({
        companyName: '',
        city: '',
        postalCode: '',
        streetAddress: '',
        country: 'USA',
    });

    const navigate = useNavigate();

    const handleStartApp = () =>{
        navigate('/dashboard')
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleNextStep = () => {
        if (step < 4) {
            setStep(step + 1);
        }
    };

    const handlePreviousStep = () => {
        if (step > 1) {
            setStep(step - 1);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleNextStep();
    };

    const options = [
        { id: 1, label: 'I have a company', icon: <Briefcase className="w-5 h-5 text-purple-500" /> },
        { id: 2, label: "I'm a freelance / contractor", icon: <User className="w-5 h-5 text-purple-500" /> },
        { id: 3, label: "I'm just getting started", icon: <Rocket className="w-5 h-5 text-purple-500" /> },
    ];

    const option = [
        {
            id: 'individual',
            icon: <User size={40} className="text-purple-500" />,
            title: 'Individual',
            description: 'Lorem ipsum is place text commonly used.',
        },
        {
            id: 'organization',
            icon: <Building2 size={40} className="text-purple-500" />,
            title: 'Organization',
            description: 'Lorem ipsum is place text commonly used.',
        },
    ];

    return (
        <div className="flex h-screen bg-gray-50">
            <div className="w-1/2 px-10 flex flex-col justify-center">
                <div className="flex justify-between items-center mb-8">
                    <div className="flex space-x-2">
                        {[1, 2, 3, 4].map((stepNumber) => (
                            <div
                                key={stepNumber}
                                className={`h-2 w-8 rounded-full ${step === stepNumber ? 'bg-purple-500' : 'bg-gray-300'}`}
                            ></div>
                        ))}
                    </div>
                    <a href="#" className="text-sm text-purple-600 font-medium">Sign In</a>
                </div>

                {/* Step 1 */}
                {step === 1 && (
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">Tell us your situation</h1>
                        <div className="space-y-4">
                            {options.map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => setSelectedOption(option.id)}
                                    className={`flex items-center space-x-3 p-4 border rounded-xl cursor-pointer transition duration-200 ${selectedOption === option.id ? 'border-purple-500 bg-purple-50' : 'border-gray-300 bg-white'}`}
                                >
                                    {option.icon}
                                    <span className="text-gray-800 font-medium">{option.label}</span>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-end mt-6">
                            <button
                                onClick={handleNextStep}
                                className="w-1/2 py-3 bg-black text-white rounded-xl flex items-center justify-center space-x-2 hover:bg-gray-800 transition disabled:opacity-50"
                                disabled={!selectedOption}
                            >
                                <span>Next Step</span>
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 2 */}
                {step === 2 && (
                    <div>
                        <h1 className="text-3xl font-bold text-gray-900 mb-6">Select your profile type</h1>
                        <div className="space-y-4 flex">
                            {option.map((option) => (
                                <div
                                    key={option.id}
                                    onClick={() => setSelectedOption(option.id)}
                                    className={`w-64 p-6 border-2 rounded-xl cursor-pointer transition duration-300 text-center shadow-sm hover:shadow-md ${selectedOption === option.id ? 'border-purple-500' : 'border-gray-200'}`}
                                >
                                    <div className="flex justify-center mb-4">{option.icon}</div>
                                    <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                                    <p className="text-gray-500">{option.description}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-between mt-6">
                            <button
                                onClick={handlePreviousStep}
                                className="py-3 bg-gray-300 text-gray-800 rounded-xl px-4 hover:bg-gray-400 transition"
                            >
                                <ArrowLeft className="w-4 h-4 mr-1 inline" /> Back
                            </button>
                            <button
                                onClick={handleNextStep}
                                className="py-3 bg-black text-white rounded-xl px-4 hover:bg-gray-800 transition disabled:opacity-50"
                                disabled={!selectedOption}
                            >
                                Next Step <ArrowRight className="w-4 h-4 inline ml-1" />
                            </button>
                        </div>
                    </div>
                )}

                {/* Step 3 */}
                {step === 3 && (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h1 className="text-2xl font-bold text-gray-900 mb-4">Company Information</h1>

                        {/* Form for Individual */}
                        {selectedOption === 'individual' && (
                            <>
                                <input
                                    type="text"
                                    name="firstName"
                                    placeholder="First Name *"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border rounded-md"
                                />
                                <input
                                    type="text"
                                    name="lastName"
                                    placeholder="Last Name *"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border rounded-md"
                                />
                            </>
                        )}

                        {/* Form for Organization */}
                        {selectedOption === 'organization' && (
                            <>
                                <input
                                    type="text"
                                    name="companyName"
                                    placeholder="Company Name *"
                                    value={formData.companyName}
                                    onChange={handleChange}
                                    required
                                    className="w-full p-2 border rounded-md"
                                />
                                <div className="flex gap-4">
                                    <input
                                        type="text"
                                        name="city"
                                        placeholder="City *"
                                        value={formData.city}
                                        onChange={handleChange}
                                        required
                                        className="w-1/2 p-2 border rounded-md"
                                    />
                                    <input
                                        type="text"
                                        name="postalCode"
                                        placeholder="Postal Code *"
                                        value={formData.postalCode}
                                        onChange={handleChange}
                                        required
                                        className="w-1/2 p-2 border rounded-md"
                                    />
                                </div>
                            </>
                        )}

                        <div className="flex justify-between">
                            <button type="button" onClick={handlePreviousStep} className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400">Back</button>
                            <button type="submit" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800">Next Step</button>
                        </div>
                    </form>
                )}

                {/* Step 4 */}
                {step === 4 && (
                    <div className="text-center">
                        <CheckCircle className="text-green-500 w-12 h-12 mx-auto mb-4" />
                        <h1 className="text-3xl font-bold">You’re all set!</h1>
                        <p className="mt-2 text-gray-700">Thank you for completing the onboarding process.</p>
                        <button 
                            onClick={handleStartApp}
                        className="mt-6 bg-black text-white px-6 py-3 rounded-xl hover:bg-gray-800 transition">Start Using the App</button>
                    </div>
                )}
            </div>

            <div className="w-1/2 h-screen relative">
                <img src={onboardingImage} alt="Onboarding" className="w-full h-full object-cover" />
            </div>
        </div>
    );
}

export default Onboarding;
