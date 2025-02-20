import React, { useEffect, useState } from 'react';
import ConfigurableInput from '../../../components/ConfigurableInput';

const EditBeneficiaire = () => {


    const [formData, setFormData] = useState({
        organisationType: "",
        contactPhone: "",
        contactEmail: "",
        website: "",
        localisation: "",
        responsablePhone: "",
        responsableEmail: "",
        fonction: "",
        adresse: "",
        responsableLocalisation: "",

        description: "",
    });





    const [dynamicFields, setDynamicFields] = useState([]);

    const addDynamicField = () => {
        setDynamicFields([...dynamicFields, { id: Date.now(), key: "", value: "" }]);
    };

    const removeDynamicField = (id) => {
        setDynamicFields(dynamicFields.filter(field => field.id !== id));
    };


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };


    return (

        <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 rounded-x">


            <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Création d’un beneficiaire</h2>
            </header>
            {/* Modal body */}
            <div className="p-4 md:p-5 space-y-4" >
                <div className="flex justify-center items-center min-h-screen bg-white">
                    <form
                        onSubmit={handleSubmit}
                        className="border-gray-500 text-white p-6 rounded-2xl w-full max-w-4xl space-y-4"
                    >

                        {/* Organisation */}
                        <div className="border-2 border-gray-500 p-4 rounded-lg">
                            <h2 className="font-semibold mb-4 text-black uppercase"> Type de Bénéficiaire</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">


                                {/* Organisation Type Select */}
                                <div>
                              
                                    <select
                                        className="w-full h-10 px-3 text-base placeholder-gray-600 border border-blue-500 rounded-lg bg-blue-50 text-blue-700 focus:ring-blue-500 focus:border-blue-500"
                                        id="organisationType"
                                        value={formData.organisationType}
                                        name="organisationType"
                                        onChange={handleChange}
                                    >
                                        <option value="text">PARTICULIER</option>
                                        <option value="select">ASSOCIATION</option>
                                        <option value="communaute">COMMUNAUTE</option>
                                        <option value="organisation">ORGANISATION</option>
                                        <option value="org">ORG</option>
                                    </select>
                                </div>

                            </div>

                        </div>

                        {/* Info Contact */}
                        <div className="border-2 border-gray-500 p-4 rounded-lg">
                            <h2 className="font-semibold  text-black uppercase">Info Bénéficiaire</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

                                <ConfigurableInput label="Nom du Responsable" type="text" name="responsableName" placeholder="responsable nom" value={formData.responsableName} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                <ConfigurableInput label="Email du Responsable" type="text" name="responsableEmail" placeholder="test@gmail.com" value={formData.responsableEmail} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                <ConfigurableInput label="Fonction" type="text" name="fonction" placeholder="test@gmail.com" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                <ConfigurableInput label="adresse" type="text" name="Adresse" placeholder="test@gmail.com" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />

                            </div>
                        </div>



                        {/* Description */}
                        <div className="border-2 border-gray-500 p-4 rounded-lg">
                            <h2 className="font-semibold text-black uppercase">Description</h2>
                            <textarea
                                name="description"
                                value={formData.description}
                                onChange={handleChange}
                                className="w-full h-32 p-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                placeholder="Entrez la description..."
                            />
                        </div>

                        {/* Autre Info */}
                        {/* Afficher Autre Info si Organisation est sélectionné */}
                        {formData.organisationType === "select" && (
                            <div className="border-2 border-gray-500 p-4 rounded-lg">
                                <h2 className="font-semibold text-black uppercase">
                                    Autre info
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <ConfigurableInput label="Téléphone du Responsable" type="text" name="responsablePhone" placeholder="+225 01 01 01 10 10" value={formData.responsablePhone} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="Email du Responsable" type="email" name="responsablePhone" placeholder="test@gmail.com" value={formData.responsableEmail} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="fonction" type="text" name="fonction" placeholder="Ex: Directeur" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />


                                </div>
                                {dynamicFields.map((field, index) => (
                                    <div key={field.id} className="flex items-center gap-2 mt-2">
                                        <ConfigurableInput
                                            label="fonction"
                                            type="text"
                                            name="fonction"
                                            placeholder="Ex: Directeur"
                                            value={field.key}
                                            onChange={(e) => {
                                                const newFields = [...dynamicFields];
                                                newFields[index].key = e.target.value;
                                                setDynamicFields(newFields);
                                            }}
                                            className="w-1/2 h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                        />
                                        <ConfigurableInput
                                            label="fonction"
                                            type="text"
                                            name="fonction"
                                            placeholder="Ex: Directeur"
                                            value={field.value}
                                            onChange={(e) => {
                                                const newFields = [...dynamicFields];
                                                newFields[index].value = e.target.value;
                                                setDynamicFields(newFields);
                                            }}
                                            className="w-1/2 h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                        />
                                        <button
                                            onClick={() => removeDynamicField(field.id)}
                                            className="bg-red-500 text-white p-2 rounded"
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    onClick={addDynamicField}
                                >
                                    Ajouter un champ
                                </button>

                            </div>
                        )}
                        {formData.organisationType === "text" && (
                            <div className="border-2 border-gray-500 p-4 rounded-lg">
                                <h2 className="font-semibold text-black uppercase">
                                    Autre info
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">

                                    <ConfigurableInput label="Nom du Responsable" type="text" name="responsableName" placeholder="responsable nom" value={formData.responsableName} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="Email du Responsable" type="text" name="responsableEmail" placeholder="test@gmail.com" value={formData.responsableEmail} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="Fonction" type="text" name="fonction" placeholder="Ex: Directeur" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="adresse" type="text" name="Adresse" placeholder="BP 123" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                </div>
                                {dynamicFields.map((field, index) => (
                                    <div key={field.id} className="flex items-center gap-2 mt-2">
                                        <ConfigurableInput
                                            label="fonction"
                                            type="text"
                                            name="fonction"
                                            placeholder="Ex: Directeur"
                                            value={field.key}
                                            onChange={(e) => {
                                                const newFields = [...dynamicFields];
                                                newFields[index].key = e.target.value;
                                                setDynamicFields(newFields);
                                            }}
                                            className="w-1/2 h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                        />
                                        <ConfigurableInput
                                            label="fonction"
                                            type="text"
                                            name="fonction"
                                            placeholder="Ex: Directeur"
                                            value={field.value}
                                            onChange={(e) => {
                                                const newFields = [...dynamicFields];
                                                newFields[index].value = e.target.value;
                                                setDynamicFields(newFields);
                                            }}
                                            className="w-1/2 h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                        />

                                        <button
                                            onClick={() => removeDynamicField(field.id)}
                                            className="bg-red-500 text-white p-2 rounded"
                                        >
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="h-5 w-5 mr-2"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M6 18L18 6M6 6l12 12"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                                    onClick={addDynamicField}
                                >
                                    Ajouter un champ
                                </button>
                            </div>
                        )}
                        {/* Submit Button */}
                        <div className="flex justify-end mt-6">
                            <button
                                type="submit"
                                className="px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg"
                            >
                                Soumettre
                            </button>
                        </div>
                    </form>
                </div>
            </div>


        </div>




    );
};

export default EditBeneficiaire;
