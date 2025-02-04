// src/hooks/useSignUp.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const useSignUp = () => {
    // États du formulaire
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [role, setRole] = useState("Designer");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);

    const navigate = useNavigate();

    // Gestion de la soumission du formulaire
    const handleSubmit = (e) => {
        e.preventDefault();
        // Ajoutez ici la logique pour soumettre les données
        console.log({ email, name, role, password, newsletter });
    };

    // Navigation vers le dashboard
    const handleStartApp = () => {
        navigate("/dashboard");
    };

    // Regroupement des états et des gestionnaires pour le composant de présentation
    const state = { email, name, role, password, newsletter };
    const handlers = {
        setEmail,
        setName,
        setRole,
        setPassword,
        setNewsletter,
        handleSubmit,
        handleStartApp,
    };

    return { state, handlers };
};
