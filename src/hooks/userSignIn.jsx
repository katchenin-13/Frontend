// src/hooks/useSignIn.js
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";


// Données fictives des utilisateurs avec le champ isAdmin
const users = [
    { email: "admin@example.com", password: "admin123", role: "admin", isAdmin: true },
    { email: "commercial@example.com", password: "commercial123", role: "commercial", isAdmin: true },
    { email: "gm@example.com", password: "gm123", role: "general_manager", isAdmin: false },
    { email: "manager@example.com", password: "manager123", role: "manager", isAdmin: false },
    { email: "redacteur@example.com", password: "redacteur123", role: "redacteur", isAdmin: false },
    { email: "agent@example.com", password: "agent123", role: "agent", isAdmin: false },
    { email: "user1@example.com", password: "user123", role: "agent", isAdmin: false },
    { email: "user2@example.com", password: "user123", role: "agent", isAdmin: false },
    { email: "user3@example.com", password: "user123", role: "agent", isAdmin: false },
    { email: "user4@example.com", password: "user123", role: "redacteur", isAdmin: false },
];





export const useSignIn = () => {
    // États du formulaire
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newsletter, setNewsletter] = useState(false);
    const navigate = useNavigate();






    // Gestion de la soumission du formulaire

    const handleSubmit = (e) => {
        e.preventDefault();

        // Trouvez l'utilisateur par son email et mot de passe
        const user = users.find(u => u.email === email && u.password === password);

        if (!user) {
            // Utilisateur non trouvé, affichez un message d'erreur
            toast.error("Email ou mot de passe incorrect");
            return;
        }

        // Vérification du groupe utilisateur (isAdmin)
        if (user.isAdmin && user.role === "admin") {
            // Groupe admin (admin, commercial)
            toast.success(`Bienvenue ${user.role} - Groupe Admin`);
            navigate("/admin-dashboard");  // Redirection vers le tableau de bord admin
        } else if (!user.isAdmin && user.role === "general_manager") {
            // Groupe manager (general_manager, manager, redacteur, agent)
            toast.success(`Bienvenue ${user.role} - Groupe Manager`);
            navigate("/manager-dashboard");  // Redirection vers le tableau de bord manager
        }

        // Ajoutez ici la logique de connexion (ex: appel API)
        console.log({ email, password, newsletter });
    };

    // Retourne l'état et les gestionnaires en un objet
    const state = { email, password, newsletter };
    const handlers = {
        setEmail,
        setPassword,
        setNewsletter,
        handleSubmit,
    };

    return { state, handlers };
};
