import React, { useEffect, useState } from 'react';
import ConfigurableInput from './ConfigurableInput';
import ConfigurableTextArea from './ConfigurableTextArea';
import ConfigurableSelectField from './ConfigurableSelectField';
import EmployeeAutoComplete from './employeeData';

const ConfigurableModal = ({
    title = 'Default Title',
    isOpenInitially = false,
    modalStyles = {},
    headerStyles = {},
    modalWidth = 'max-w-lg',
    modalHeight = '',
    onClose
}) => {
    const [formData, setFormData] = useState({
        motif: "",
        date: "",
        beneficiaire: "---Selectionner un beneficiaire---",
        typeactivitesdes: "---Selectionner un type d'activité---",
        chefDelegation: "",
        telephone: "",
        email: "",
        participants: "",
        observation: "",
        typeactivite: "",
        nature: "",
        quantite: "",
        valeur: "",
        responsableName: "",
        responsableEmail: "",
        responsableFonction: "",
        adresse: "",
    });

    const [dynamicFields, setDynamicFields] = useState([]);

    useEffect(() => {
        setFormData((prevData) => ({ ...prevData, typeactivitesdes: "---Selectionner un type d'activité---" }));
    }, [isOpenInitially]);

    const handleClose = () => {
        if (onClose) onClose();
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const addDynamicField = () => {
        const newField = { id: Date.now(), key: "", value: "" };
        setDynamicFields((prevFields) => [...prevFields, newField]);
    };

    const removeDynamicField = (id) => {
        setDynamicFields((prevFields) => prevFields.filter(field => field.id !== id));
    };

    return (
        <div className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full" style={modalStyles}>
            <div className={`relative w-full ${modalWidth} ${modalHeight} mx-auto`}>
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    {/* Modal Header */}
                    <div className={`flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200`} style={headerStyles}>
                        <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                        <button type="button" onClick={handleClose} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white">
                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>

                    {/* Modal Body */}
                    <div className="flex min-h-screen bg-white">
                        <form onSubmit={handleSubmit} className="border-gray-500 text-white p-6 rounded-2xl w-full max-w-4xl space-y-4">
                            <h1 className="text-2xl font-bold text-center mb-4">Création d’une entité</h1>

                            {/* Info Activités */}
                            <div className="border-2 border-gray-500 p-4 rounded-lg">
                                <h2 className="font-semibold text-black uppercase">Info Activités</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <ConfigurableInput label="Motif de la demande d’audience" name="motif" value={formData.motif} onChange={handleChange} required />
                                    <ConfigurableInput label="Date de la reaction" name="date" type="date" value={formData.date} onChange={handleChange} required />
                                    <EmployeeAutoComplete label="Bénéficiaire" name="beneficiaire" placeholder="Bénéficiaire" />
                                    <ConfigurableSelectField label="Types d'activité" name="typeactivitesdes" value={formData.typeactivitesdes} onChange={handleChange} options={["Audience", "Discussion", "Conference", "Dons", "Promesse", "Autre"]} />
                                    <ConfigurableTextArea label="Observation" name="observation" value={formData.observation} onChange={handleChange} />
                                </div>
                            </div>

                            {/* Autre Info (Dons) */}
                            {formData.typeactivitesdes === "Dons"  && (

                                <div className="border-2 border-gray-500 p-4 rounded-lg">
                                    <h2 className="font-semibold text-black uppercase">Autre info</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <ConfigurableSelectField label="Type" name="typeDonsPromesse" value={formData.typeactivitesdes} onChange={handleChange} options={["En espece", "En nature"]} />
                                        {/* Masquer ou désactiver le champ Nature si "En espece" est sélectionné */}
                                        
                                        {formData.typeactivitesdes !== "En espece" && (
                                            <ConfigurableInput label="Nature" name="nature" type="text" value={formData.nature} onChange={handleChange} required 
                                                disabled={formData.typeactivitesdes === "En espece"}/>

                                         
                                        )}

                                        <ConfigurableInput label="Quantité" name="quantite" type="number" value={formData.quantite} onChange={handleChange} required />
                                        <ConfigurableInput label="Valeur" name="valeur" type="number" value={formData.valeur} onChange={handleChange} required />
                                        <ConfigurableInput label="Date de la realisation" name="danterealisation" type="date" value={formData.valeur} onChange={handleChange} required />

                                    </div>

                                    {/* Dynamic Fields */}
                                    {dynamicFields.map((field, index) => (
                                        <div key={field.id} className="flex items-center gap-2 mt-2">
                                            <ConfigurableInput label="Fonction" name="fonction" value={field.key} onChange={(e) => {
                                                const updatedFields = [...dynamicFields];
                                                updatedFields[index].key = e.target.value;
                                                setDynamicFields(updatedFields);
                                            }} />
                                            <ConfigurableInput label="Fonction" name="fonction" value={field.value} onChange={(e) => {
                                                const updatedFields = [...dynamicFields];
                                                updatedFields[index].value = e.target.value;
                                                setDynamicFields(updatedFields);
                                            }} />
                                            <button onClick={() => removeDynamicField(field.id)} className="bg-red-500 text-white p-2 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={addDynamicField} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                        Ajouter autre info
                                    </button>
                                </div>
                                
                            )}

                            {/* Autre Info (Promesse) */}
                            {formData.typeactivitesdes === "Promesse" && (
                                <div className="border-2 border-gray-500 p-4 rounded-lg">
                                    <h2 className="font-semibold text-black uppercase">Autre info</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <ConfigurableSelectField label="Type" name="typeDonsPromesse" value={formData.typeactivitesdes} onChange={handleChange} options={["En espece", "En nature"]} />
                                        {/* Masquer ou désactiver le champ Nature si "En espece" est sélectionné */}

                                        {formData.typeactivitesdes !== "En espece" && (
                                            <ConfigurableInput label="Nature" name="nature" type="text" value={formData.nature} onChange={handleChange} required
                                                disabled={formData.typeactivitesdes === "En espece"} />


                                        )}

                                        <ConfigurableInput label="Quantité" name="quantite" type="number" value={formData.quantite} onChange={handleChange} required />
                                        <ConfigurableInput label="Valeur" name="valeur" type="number" value={formData.valeur} onChange={handleChange} required />
                                        <ConfigurableInput label="Date de la realisation" name="danterealisation" type="date" value={formData.valeur} onChange={handleChange} required />

                                    </div>
                                    {/* Dynamic Fields */}
                                    {dynamicFields.map((field, index) => (
                                        <div key={field.id} className="flex items-center gap-2 mt-2">
                                            <ConfigurableInput label="Fonction" name="fonction" value={field.key} onChange={(e) => {
                                                const updatedFields = [...dynamicFields];
                                                updatedFields[index].key = e.target.value;
                                                setDynamicFields(updatedFields);
                                            }} />
                                            <ConfigurableInput label="Fonction" name="fonction" value={field.value} onChange={(e) => {
                                                const updatedFields = [...dynamicFields];
                                                updatedFields[index].value = e.target.value;
                                                setDynamicFields(updatedFields);
                                            }} />
                                            <button onClick={() => removeDynamicField(field.id)} className="bg-red-500 text-white p-2 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={addDynamicField} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                        Ajouter autre info
                                    </button>
                                </div>
                            )}      

                            {/* Autre Info (Organisation) */}
                            {formData.typeactivitesdes === "Audience" && (
                                <div className="border-2 border-gray-500 p-4 rounded-lg">
                                    <h2 className="font-semibold text-black uppercase">Autre info</h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                        <ConfigurableInput label="Nom du demandeur" name="demandeurNom" value={formData.responsableName} onChange={handleChange} required />
                                        <ConfigurableInput label="Téléphone du demandeur" type="text" name="demandeurPhone" placeholder="+225 01 01 01 10 10" value={formData.responsablePhone} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                        <ConfigurableInput label="Email du demandeur" name="demandeurEmail" value={formData.responsableEmail} onChange={handleChange} required />
                                        <ConfigurableInput label="Date de rencontre souhaitée" name="date" type="date" value={formData.date} onChange={handleChange} required />

                                    </div>

                                    {/* Dynamic Fields */}
                                    {dynamicFields.map((field, index) => (
                                        <div key={field.id} className="flex items-center gap-2 mt-2">
                                            <ConfigurableInput label="Fonction" name="fonction" value={field.key} onChange={(e) => {
                                                const updatedFields = [...dynamicFields];
                                                updatedFields[index].key = e.target.value;
                                                setDynamicFields(updatedFields);
                                            }} />
                                            <ConfigurableInput label="Fonction" name="fonction" value={field.value} onChange={(e) => {
                                                const updatedFields = [...dynamicFields];
                                                updatedFields[index].value = e.target.value;
                                                setDynamicFields(updatedFields);
                                            }} />
                                            <button onClick={() => removeDynamicField(field.id)} className="bg-red-500 text-white p-2 rounded">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    ))}
                                    <button type="button" onClick={addDynamicField} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600">
                                        Ajouter autre info
                                    </button>
                                </div>
                            )}

                     

                            {/* Submit Button */}
                            <div className="flex justify-end mt-6 space-x-4">
                                <button
                                    type="button"
                                    className="px-6 py-2 text-lg font-medium text-gray-700 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
                                >
                                    Annuler
                                </button>

                                <button
                                    type="button"
                                    className="px-6 py-2 text-lg font-medium text-white bg-yellow-500 rounded-lg hover:bg-yellow-600 transition"
                                >
                                    Brouillon
                                </button>

                                <button
                                    type="submit"
                                    className="px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                                >
                                    Soumettre
                                </button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfigurableModal;
