import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useNewPassword = () => {
    // États du formulaire
    const [newPassword, setNewPassword] = useState("");
    const [confirPassword, setConfirPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    const navigate = useNavigate();

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour soumettre les données (ex: appel API)
        console.log({ newPassword, confirPassword, newsletter });
    };

    // Navigation vers le dashboard après soumission
    const handleStartApp = () => {
        navigate("/dashboard");
    };

    // Regrouper les états et les gestionnaires pour les passer au composant de présentation
    const state = { newPassword, confirPassword, newsletter };
    const handlers = {
        setNewPassword,
        setConfirPassword,
        setNewsletter,
        handleSubmit,
        handleStartApp,
    };

    return { state, handlers };
};
