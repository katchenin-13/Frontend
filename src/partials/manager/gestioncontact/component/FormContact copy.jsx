import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ConfigurableInput from "../../../../components/ConfigurableInput";

const FormContact = ({ initialData = {}, onSubmit, title, updateContactsList }) => {
    const [contactData, setContactData] = useState({
        id: initialData.id || Date.now(),
        nom: initialData.nom || '',  // Correction ici
        email: initialData.email || '',
        phone: initialData.phone || '',
        ville: initialData.ville || '',
        adress: initialData.adress || '',
        description: initialData.description || '',
    });

//   useEffect(() => {
//     if (initialData && Object.keys(initialData).length > 0) {
//         setContactData(initialData);
//     }
// }, [initialData]);


    useEffect(() => {
        const savedContact = localStorage.getItem("contact");
        if (savedContact) {
            setContactData(JSON.parse(savedContact)); // Charge les données stockées
        } else if (initialData && Object.keys(initialData).length > 0) {
            setContactData(initialData);
        }
    }, [initialData]);


    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifier si un champ est vide
        const emptyFields = Object.entries(contactData).filter(([key, value]) => {
            return typeof value === 'string' && !value.trim();
        });

        if (emptyFields.length > 0) {
            emptyFields.forEach(([key]) => {
                toast.error(`Le champ "${key}" est obligatoire.`);
            });
            return; // Stoppe la soumission si des champs sont vides
        }

        // Ajoutez ici la logique pour soumettre les données (ex: appel API)
        // Ajouter ou modifier les données dans le localStorage
        localStorage.setItem("contact", JSON.stringify(contactData));

        // On appelle onSubmit si la fonction est définie, pour gérer la soumission ailleurs
        if (onSubmit) {
            onSubmit(contactData);
        }

        toast.success("Formulaire soumis avec succès !");

        // Vider les champs après la soumission
        setContactData({
            nom: '',
            email: '',
            phone: '',
            ville: '',
            adress: '',
            description: '',
        });
    };

    return (
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 rounded-xl">
            <ToastContainer />
            <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
            </header>
            <div className="p-4 md:p-5 space-y-4">
                <form onSubmit={handleSubmit} className="border-gray-500 text-white p-6 rounded-2xl w-full max-w-4xl space-y-4">
                    <div className="border-2 border-gray-500 p-4 rounded-lg">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                            <ConfigurableInput label="Nom complet" type="text" name="nom" placeholder="Nom" value={contactData.nom} onChange={handleChange} />
                            <ConfigurableInput label="Email" type="email" name="email" placeholder="exemple@gmail.com" value={contactData.email} onChange={handleChange} />
                            <ConfigurableInput label="Fonction" type="text" name="phone" placeholder="Fonction" value={contactData.phone} onChange={handleChange} />
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

export default FormContact;
