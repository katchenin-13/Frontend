import React from "react";
import onboardingImage from "../../../images/onboarding.jpg";
import { ToastContainer } from "react-toastify";
import { useAuth } from "../../../contexts/AuthContext";
import useAuthenticationActions from "../../../hooks/useAuthenticationActions";

const NewPasswordForm = () => {
    const {
        newPasswordData,
        setNewPasswordData,
        updatePassword
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

                {/* Formulaire de nouveau mot de passe */}
                <div className="w-1/2 flex-1 flex justify-center items-center py-10 px-5">
                    <div className="w-full max-w-md space-y-8">
                        {/* Titre du formulaire */}
                        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100 text-center">
                            Réinitialisation du mot de passe
                        </h1>

                        <form onSubmit={updatePassword} className="mt-8 space-y-6">
                            {/* Nouveau mot de passe */}
                            <div>
                                <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Nouveau mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="newPassword"
                                    value={newPasswordData.newPassword}
                                    onChange={(e) => setNewPasswordData({ ...newPasswordData, newPassword: e.target.value })}
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                />
                            </div>

                            {/* Confirmer le mot de passe */}
                            <div>
                                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
                                    Confirmer le mot de passe
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    value={newPasswordData.confirmPassword}
                                    onChange={(e) => setNewPasswordData({ ...newPasswordData, confirmPassword: e.target.value })}
                                    required
                                    className="w-full mt-2 p-3 border border-gray-300 rounded-lg dark:bg-gray-800 dark:border-gray-600 dark:text-gray-200"
                                />
                            </div>

                            <div className="flex justify-between items-center mb-4">
                                <button
                                    type="submit"
                                    className="px-6 py-3 bg-gray-900 text-white rounded-lg"
                                >
                                    Réinitialiser le mot de passe
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default NewPasswordForm;
