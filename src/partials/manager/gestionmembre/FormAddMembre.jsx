import React, { useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useMembreActions } from '../../../hooks/useMembreActions';
import ConfigurableInput from "../../../components/ConfigurableInput";

const FormAddMembre = () => {
    const { membres, addMembre } = useMembreActions(); // Utilisation correcte du hook

    const [membreData, setMembreData] = useState({
        name: '',
        email: '',
        phone: '',
        adress: '',
        description: '',
    });

    const handleChange = (e) => {
        setMembreData({ ...membreData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifier les champs vides
        const emptyFields = Object.entries(membreData).filter(([_, value]) => {
            return typeof value === 'string' && !value.trim();
        });

        if (emptyFields.length > 0) {
            emptyFields.forEach(([key]) => {
                toast.error(`Le champ "${key}" est obligatoire.`);
            });
            return;
        }

        // Vérifier si un membre avec le même email existe déjà
        const membreExists = membres.some(membre => membre.email === membreData.email);
        if (membreExists) {
            toast.error("Ce membre existe déjà avec cet email.");
            return;
        }

        // Ajouter le membre via le contexte
        addMembre(membreData);// Ajoute le membre via le contexte
        console.log(membres);

        localStorage.setItem("membres", JSON.stringify(membres)); // Sauvegarde des membres dans le localStorage
        toast.success("Membre ajouté avec succès !");

        // Réinitialiser le formulaire après soumission
        setMembreData({ name: '', email: '', phone: '',  adress: '', description: '' });
    };

    return (
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 rounded-xl">
            <ToastContainer />
            <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Création d’un Membre</h2>
            </header>
            <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={handleSubmit} className="border-gray-500 text-white p-6 rounded-2xl w-full max-w-4xl space-y-4">
                    <div className="border-2 border-gray-500 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <ConfigurableInput label="Nom complet" type="text" name="name" placeholder="Nom complet" value={membreData.name} onChange={handleChange} />
                            <ConfigurableInput label="Email" type="email" name="email" placeholder="exemple@gmail.com" value={membreData.email} onChange={handleChange} />
                            <ConfigurableInput label="Telephone" type="text" name="phone" placeholder="Telephone" value={membreData.phone} onChange={handleChange} />
                            <ConfigurableInput label="Adresse" type="text" name="adress" placeholder="Adresse" value={membreData.adress} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="border-2 border-gray-500 p-4 rounded-lg">
                        <h2 className="font-semibold text-black uppercase">Description</h2>
                        <textarea
                            name="description"
                            value={membreData.description}
                            onChange={handleChange}
                            className="w-full h-32 p-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            placeholder="Entrez la description..."
                        />
                    </div>
                    <div className="flex justify-end mt-6">
                        <button type="submit" className="px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg">
                            Soumettre
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default FormAddMembre;
