import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

// Données fictives des utilisateurs
const users = [
    { email: "admin@example.com", password: "admin123", role: "admin", isAdmin: true },
    { email: "commercial@example.com", password: "commercial123", role: "commercial", isAdmin: true },
    { email: "gm@example.com", password: "gm123", role: "general_manager", isAdmin: false },
    { email: "manager@example.com", password: "manager123", role: "manager", isAdmin: false },
    { email: "redacteur@example.com", password: "redacteur123", role: "redacteur", isAdmin: false },
    { email: "agent@example.com", password: "agent123", role: "agent", isAdmin: false }
];

const useAuthenticationActions = () => {
    const navigate = useNavigate();

    // États globaux
    const [user, setUser] = useState(null);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode") === "true");

    // États pour les formulaires
    const [signUpData, setSignUpData] = useState({ email: "", name: "", role: "Sélectionner", password: "", newsletter: false });
    const [signInData, setSignInData] = useState({ email: "", password: "" });
    const [resetPasswordEmail, setResetPasswordEmail] = useState("");
    const [newPasswordData, setNewPasswordData] = useState({ newPassword: "", confirmPassword: "" });

    // Effet pour appliquer le mode sombre
    useEffect(() => {
        document.querySelector("html").classList.toggle("dark", darkMode);
        document.querySelector("html").style.colorScheme = darkMode ? "dark" : "light";
    }, [darkMode]);

    // Fonction de connexion
    const signIn = (e) => {
        e.preventDefault();
        const foundUser = users.find(u => u.email === signInData.email && u.password === signInData.password);
        if (!foundUser) {

            toast.error("Email ou mot de passe incorrect");
            return;
        }
        setUser(foundUser.email,foundUser.role,foundUser.isAdmin);
        // ajouter l'utilisateur connecté au localStorage
        localStorage.setItem("user", JSON.stringify(foundUser));
        console.log("Utilisateur connecté:", foundUser);
        
        toast.success(`Bienvenue ${foundUser.role} !`);
        navigate(foundUser.isAdmin ? "/admin-dashboard" : "/manager-dashboard");
    };

    // Fonction d'inscription
    const signUp = (e) => {
        e.preventDefault();
        console.log("Inscription réussie:", signUpData);
        navigate("/dashboard");
    };

    // Fonction de réinitialisation du mot de passe
    const resetPassword = (e) => {
        e.preventDefault();
        console.log("Réinitialisation du mot de passe pour:", resetPasswordEmail);
    };

    // Fonction de mise à jour du mot de passe
    const updatePassword = (e) => {
        e.preventDefault();
        console.log("Nouveau mot de passe:", newPasswordData);
        navigate("/dashboard");
    };

    // Fonction pour activer/désactiver le mode sombre
    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("dark-mode", newMode);
    };

    return {
        user,
        darkMode,
        signUpData,
        signInData,
        resetPasswordEmail,
        newPasswordData,
        setSignUpData,
        setSignInData,
        setResetPasswordEmail,
        setNewPasswordData,
        signIn,
        signUp,
        resetPassword,
        updatePassword,
        toggleDarkMode
    };
};

export default useAuthenticationActions;
