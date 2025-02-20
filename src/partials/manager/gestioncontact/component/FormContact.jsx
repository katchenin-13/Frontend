import React, { useEffect, useState } from 'react';
import ConfigurableInput from '../../../../components/ConfigurableInput';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddContactForm = ({ updateContactsList }) => {
    const [contactData, setContactData] = useState({
        id: Date.now(),
        name: '',
        email: '',
        phone: '',
        ville: '',
        adress: '',
        description: '',
    });

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(contactData).some(value => !value.trim())) {
            toast.error("Tous les champs sont obligatoires.");
            return;
        }

        updateContactsList('add', contactData);
        toast.success("Contact ajouté avec succès !");

        setContactData({ id: Date.now(), name: '', email: '', phone: '', ville: '', adress: '', description: '' });
    };

    return (
        <FormContainer title="Ajouter un Contact" onSubmit={handleSubmit} contactData={contactData} onChange={handleChange} />
    );
};

const EditContactForm = ({ initialData, updateContactsList }) => {
    const [contactData, setContactData] = useState(initialData);

    useEffect(() => {
        setContactData(initialData);
    }, [initialData]);

    const handleChange = (e) => {
        setContactData({ ...contactData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (Object.values(contactData).some(value => !value.trim())) {
            toast.error("Tous les champs sont obligatoires.");
            return;
        }

        updateContactsList('edit', contactData);
        toast.success("Contact modifié avec succès !");
    };

    return (
        <FormContainer title="Modifier un Contact" onSubmit={handleSubmit} contactData={contactData} onChange={handleChange} />
    );
};

const FormContainer = ({ title, onSubmit, contactData, onChange }) => (
    <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 rounded-xl">
        <ToastContainer />
        <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
            <h2 className="font-semibold text-gray-800 dark:text-gray-100">{title}</h2>
        </header>
        <div className="p-4 md:p-5 space-y-4">
            <form onSubmit={onSubmit} className="border-gray-500 text-white p-6 rounded-2xl w-full max-w-4xl space-y-4">
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <ConfigurableInput label="Nom complet" type="text" name="name" value={contactData.name} onChange={onChange} />
                        <ConfigurableInput label="Email" type="email" name="email" value={contactData.email} onChange={onChange} />
                        <ConfigurableInput label="Fonction" type="text" name="phone" value={contactData.phone} onChange={onChange} />
                        <ConfigurableInput label="Ville/Village" type="text" name="ville" value={contactData.ville} onChange={onChange} />
                        <ConfigurableInput label="Adresse" type="text" name="adress" value={contactData.adress} onChange={onChange} />
                    </div>
                </div>
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <h2 className="font-semibold text-black uppercase">Description</h2>
                    <textarea name="description" value={contactData.description} onChange={onChange} className="w-full h-32 p-3 text-black border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" placeholder="Entrez la description..." />
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

export { AddContactForm, EditContactForm };
