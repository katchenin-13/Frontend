import React, { useState, useEffect } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContact } from '../../../contexts/contactContext';
import useContactActions from '../../../hooks/useContactActions';
import ConfigurableInput from "../../../components/ConfigurableInput";

const FormEditContact = ({ initialData = {} }) => {
    const { editContact, contacts } = useContact(useContactActions); // Fonction issue du contexte

    const [contactData, setContactData] = useState({
        id: initialData.id || Date.now(),
        name: initialData.name || '',
        email: initialData.email || '',
        phone: initialData.phone || '',
        ville: initialData.ville || '',
        adress: initialData.adress || '',
        description: initialData.description || '',
    });

    // Chercher le contact dans la liste si initialData.id est présent

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        const savedContact = localStorage.getItem("contact");

        if (savedContact && savedContact !== "undefined") {
            try {
                setContactData(JSON.parse(savedContact)); // Charge les données stockées
            } catch (error) {
                console.error("Erreur de parsing JSON :", error);
                localStorage.removeItem("contact"); // Supprime l'entrée corrompue
            }
        } else if (initialData && Object.keys(initialData).length > 0) {
            setContactData(initialData);
        }
    }, []);



    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifier les champs vides
        const emptyFields = Object.entries(contactData).filter(([key, value]) => {
            return typeof value === 'string' && !value.trim();
        });

        if (emptyFields.length > 0) {
            emptyFields.forEach(([key]) => {
                toast.error(`Le champ "${key}" est obligatoire.`);
            });
            return;
        }

        // Vérifier si l'ID existe pour mettre à jour ou ajouter
        if (contactData.id) {
            editContact(contactData.id, contactData);

            //parcour tous les contacts dans localStorage
            contacts.forEach((contact) => {
                if (contact.id === contactData.id) {
                    // Mettre à jour le contact dans la liste
                    contact.name = contactData.name;
                    contact.email = contactData.email;
                    contact.phone = contactData.phone;
                    contact.ville = contactData.ville;
                    contact.adress = contactData.adress;
                    contact.description = contactData.description;
                }
            });

            localStorage.setItem("contact", JSON.stringify(contactData));// ✅ Stocke correctement l'objet sélectionné

            // data initialData sera egale au data du localStorage
            localStorage.setItem("contacts", JSON.stringify(contacts));// ✅ Stocke correctement l'objet sélectionné
            console.log("Contact modifié :", contactData);


            toast.success("Contact modifié avec succès !");
        } else {
            toast.error("Erreur : Impossible de modifier un contact sans ID.");
            return;
        }

        // Réinitialisation du formulaire après soumission
        setContactData({ name: '',email: '',phone: '',ville: '',adress: '',description: '',});
    };


    return (
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 rounded-xl">
            <ToastContainer />
            <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Création ou Modification d’un Contact</h2>
            </header>
            <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={handleSubmit} className="border-gray-500 text-white p-6 rounded-2xl w-full max-w-4xl space-y-4">
                    <div className="border-2 border-gray-500 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <ConfigurableInput label="Nom complet" type="text" name="name" placeholder="Nom" value={contactData.name} onChange={handleChange} />
                            <ConfigurableInput label="Email" type="email" name="email" placeholder="exemple@gmail.com" value={contactData.email} onChange={handleChange} />
                            <ConfigurableInput label="Telephone" type="text" name="phone" placeholder="Telephone" value={contactData.phone} onChange={handleChange} />
                            <ConfigurableInput label="Ville/Village" type="text" name="ville" placeholder="Ville" value={contactData.ville} onChange={handleChange} />
                            <ConfigurableInput label="Adresse" type="text" name="adress" placeholder="Adresse" value={contactData.adress} onChange={handleChange} />
                        </div>
                    </div>
                    <div className="border-2 border-gray-500 p-4 rounded-lg">
                        <h2 className="font-semibold text-black uppercase">Description</h2>
                        <textarea
                            name="description"
                            value={contactData.description}
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

export default FormEditContact;
