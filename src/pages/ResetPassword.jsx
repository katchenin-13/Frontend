import React, { useState, useEffect } from "react";
import onboardingImage from "../images/onboarding.jpg";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState("");

    const [newsletter, setNewsletter] = useState(false);
const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode") === "true");

    useEffect(() => {
        if (darkMode) {
            document.querySelector("html").classList.add("dark");
            document.querySelector("html").style.colorScheme = "dark";
        } else {
            document.querySelector("html").classList.remove("dark");
            document.querySelector("html").style.colorScheme = "light";
        }
    }, [darkMode]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (add logic for sign-in here)
        console.log("Email:", email);
    
    };

    const handleToggleDarkMode = () => {
        setDarkMode(!darkMode);
        localStorage.setItem("dark-mode", !darkMode);
    };
   
    const navigate = useNavigate();

    const handleStartApp = () => {
        navigate('/new-password')
    }
    return (
        <main className="bg-white dark:bg-gray-900 dark:text-gray-300">
            <div className="flex min-h-screen">
                {/* Image */}
                <div className="w-1/2 h-screen relative">
                    <img src={onboardingImage} alt="Onboarding" className="w-full h-full object-cover" />
                </div>
                {/* Formulaire de sign-up */}
                <div className="w-1/2 flex-1 flex justify-center items-center py-10 px-5">
                    <div className="w-full max-w-md space-y-8">
                        {/* Logo */}
                        <div className="text-center mb-6">
                            <a href="/" className="block">
                                <svg
                                    className="mx-auto"
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 32 32"
                                >
                                    <path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z"></path>
                                </svg>
                            </a>
                        </div>
                        <div className="flex justify-end items-center mb-6">
                           
                            <button onClick={handleToggleDarkMode} className="text-gray-600 dark:text-gray-300">
                                Basculer en mode sombre
                            </button>
                        </div>
                        {/* Titre du formulaire */}
                        <h1 className="text-3xl text-gray-800 dark:text-gray-100 font-bold">Réinitialiser votre mot de passe</h1>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            {/* Email */}
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Email Address <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                />
                            </div>

                                                  
                            <div className="flex justify-between items-center mb-4">
                                <button 
                                    onClick={handleStartApp}
                                type="submit" className="btn bg-gray-900 text-white px-6 py-2 rounded-md">
                                      Envoyer lien de réinitialisation
                                </button>
                            </div>

                        </form>

                        {/* Footer */}
                        <div className="mt-4 text-center">
                            <p className="text-sm">
                                Vous avez un compte ?{" "}
                                <a href="/signup" className="text-blue-500 hover:underline">
                                    Sign In
                                </a>
                            </p>
                        </div>
                    </div>
                </div>

               
            </div>
        </main>
    );
};

export default ResetPassword;
