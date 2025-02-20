import React from "react";
import onboardingImage from "../images/onboarding.jpg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignInForm = ({ state, handlers }) => {
    const { email, password, newsletter } = state;
    const { setEmail, setPassword, setNewsletter, handleSubmit } = handlers;

    return (
        <main className="bg-white dark:bg-gray-900 dark:text-gray-300">
            <ToastContainer position="top-right" autoClose={3000} />
            <div className="flex min-h-screen">
                <div className="w-1/2 h-screen relative">
                    <img src={onboardingImage} alt="Onboarding" className="w-full h-full object-cover" />
                </div>

                <div className="w-1/2 flex-1 flex justify-center items-center py-10 px-5">
                    <div className="w-full max-w-md space-y-8">
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
                            Connexion
                        </h1>

                        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Email <span className="text-red-500">*</span>
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
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                    required
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

                            <div className="flex justify-between items-center mb-4">
                                <a href="/reset-password" className="text-sm text-violet-500">
                                    Mot de passe oublié ?
                                </a>
                                <button type="submit" className="px-6 py-3 bg-gray-900 text-white rounded-lg">
                                    Connexion
                                </button>
                            </div>
                        </form>

                        <div className="mt-4 text-center">
                            <p className="text-sm">
                                Vous n'avez pas de compte ?{" "}
                                <a href="/signup" className="text-blue-500 hover:underline">
                                    Créer un compte
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default SignInForm;
