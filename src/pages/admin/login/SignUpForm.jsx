// src/components/SignUpForm.js
import React from "react";
import onboardingImage from "../../../images/onboarding.jpg";
import { useAuth } from "../../../contexts/AuthContext";
import useAuthenticationActions from "../../../hooks/useAuthenticationActions";
import { ToastContainer } from "react-toastify";

const SignUpForm = () => {
    const {
        email,
        name,
        role,
        password,
        newsletter,
        setEmail,
        setName,
        setRole,
        setPassword,
        setNewsletter,
        handleSubmit,
        handleStartApp,
    } = useAuth(useAuthenticationActions);

    return (
        <main className="bg-white dark:bg-gray-900 dark:text-gray-300">
            <ToastContainer />
            <div className="flex min-h-screen">
                {/* Image */}
                <div className="w-1/2 h-screen relative">
                    <img
                        src={onboardingImage}
                        alt="Onboarding"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Formulaire de sign-up */}
                <div className="w-1/2 flex-1 flex justify-center items-center py-10 px-5">
                    <div className="w-full max-w-md space-y-8">
                        {/* Logo */}
                        <div className="text-center mb-6">
                            <a href="/" className="block">
                                <svg className="mx-auto" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
                                    <path d="M31.956 14.8C31.372 6.92 25.08.628 17.2.044V5.76a9.04 9.04 0 0 0 9.04 9.04h5.716ZM14.8 26.24v5.716C6.92 31.372.63 25.08.044 17.2H5.76a9.04 9.04 0 0 1 9.04 9.04Zm11.44-9.04h5.716c-.584 7.88-6.876 14.172-14.756 14.756V26.24a9.04 9.04 0 0 1 9.04-9.04ZM.044 14.8C.63 6.92 6.92.628 14.8.044V5.76a9.04 9.04 0 0 1-9.04 9.04H.044Z"></path>
                                </svg>
                            </a>
                        </div>

                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
                            Créez votre compte
                        </h1>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Votre email<span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Nom complet <span className="text-red-500">*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Type de compte <span className="text-red-500">*</span>
                                </label>
                                <select
                                    id="role"
                                    value={role}
                                    onChange={(e) => setRole(e.target.value)}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                >
                                    <option>Particulier</option>
                                    <option>Organisation</option>
                                </select>
                            </div>
                            <div>
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                />
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    checked={newsletter}
                                    onChange={() => setNewsletter(!newsletter)}
                                    className="h-4 w-4 text-blue-600 border-gray-300 rounded"
                                />
                                <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600 dark:text-gray-400">
                                    Se souvenir de moi
                                </label>
                            </div>
                            <div className="flex items-center justify-end">
                                <button type="submit" className="px-6 py-3 bg-gray-900 text-white rounded-lg" onClick={handleStartApp}>
                                    Connexion
                                </button>
                            </div>
                        </form>
                        <div className="mt-4 text-center">
                            <p className="text-sm">
                                Vous avez un compte ? <a href="/" className="text-blue-500 hover:underline">Se connecter</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignUpForm;
