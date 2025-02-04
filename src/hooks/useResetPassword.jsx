import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useResetPassword = () => {
    // États du formulaire
    const [email, setEmail] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const [darkMode, setDarkMode] = useState(localStorage.getItem("dark-mode") === "true");

    const navigate = useNavigate();

    // Application ou suppression du mode sombre dans le DOM
    useEffect(() => {
        if (darkMode) {
            document.querySelector("html").classList.add("dark");
            document.querySelector("html").style.colorScheme = "dark";
        } else {
            document.querySelector("html").classList.remove("dark");
            document.querySelector("html").style.colorScheme = "light";
        }
    }, [darkMode]);

    // Fonction pour basculer le mode sombre
    const handleToggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem("dark-mode", newMode);
    };

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ici, ajoutez la logique pour envoyer le lien de réinitialisation
        console.log("Email:", email);
    };

    // Navigation vers la page de saisie d'un nouveau mot de passe
    const handleStartApp = () => {
        navigate("/new-password");
    };

    // Regrouper les états et les gestionnaires pour le composant de présentation
    const state = { email, newsletter, darkMode };
    const handlers = {
        setEmail,
        setNewsletter,
        handleToggleDarkMode,
        handleSubmit,
        handleStartApp,
    };

    return { state, handlers };
};
