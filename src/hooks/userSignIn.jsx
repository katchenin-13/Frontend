// src/hooks/useSignIn.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignIn = () => {
    // États du formulaire
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    const navigate = useNavigate();

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique de connexion (ex: appel API)
        console.log({ email, password, newsletter });
    };

    // Navigation vers le dashboard après connexion
    const handleStartApp = () => {
        navigate("/dashboard");
    };

    // Retourne l'état et les gestionnaires en un objet
    const state = { email, password, newsletter };
    const handlers = {
        setEmail,
        setPassword,
        setNewsletter,
        handleSubmit,
        handleStartApp,
    };

    return { state, handlers };
};
