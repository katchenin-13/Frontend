import React, { useState } from "react";

const CreationEntite = () => {
    // State pour stocker les champs de formulaire
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
        connexionEmail: "",
        password: "",
        confirmPassword: "",
        description: "",
    });
    const [organisationFields, setOrganisationFields] = useState([""]);
      const [contactFields, setContactFields] = useState([""]);
      const [responsableFields, setResponsableFields] = useState([""]);

    // State pour gérer les champs dynamiques
    const [dynamicFields, setDynamicFields] = useState({
        organisation: [],
        contact: [],
        responsable: [],
        connexion: [],
    });

    // const handleChange = (e) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

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

    const addField = (section) => {
        setDynamicFields({
            ...dynamicFields,
            [section]: [...dynamicFields[section], ""],
        });
    };

    const handleDynamicChange = (e, section, index) => {
        const updatedFields = [...dynamicFields[section]];
        updatedFields[index] = e.target.value;
        setDynamicFields({ ...dynamicFields, [section]: updatedFields });
    };

    // Handlers for Organisation Fields
    const addOrganisationField = () => {
        setOrganisationFields([...organisationFields, ""]);
    };

    const removeOrganisationField = (index) => {
        const updatedFields = organisationFields.filter((_, i) => i !== index);
        setOrganisationFields(updatedFields);
    };

    const handleOrganisationChange = (index, value) => {
        const updatedFields = organisationFields.map((field, i) => (i === index ? value : field));
        setOrganisationFields(updatedFields);
    };

    // Handlers for Contact Fields
    const addContactField = () => {
        setContactFields([...contactFields, ""]);
    };

    const removeContactField = (index) => {
        const updatedFields = contactFields.filter((_, i) => i !== index);
        setContactFields(updatedFields);
    };

    const handleContactChange = (index, value) => {
        const updatedFields = contactFields.map((field, i) => (i === index ? value : field));
        setContactFields(updatedFields);
    };

    // Handlers for Responsable Fields
    const addResponsableField = () => {
        setResponsableFields([...responsableFields, ""]);
    };

    const removeResponsableField = (index) => {
        const updatedFields = responsableFields.filter((_, i) => i !== index);
        setResponsableFields(updatedFields);
    };

    const handleResponsableChange = (index, value) => {
        const updatedFields = responsableFields.map((field, i) => (i === index ? value : field));
        setResponsableFields(updatedFields);
    };
    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <form
                onSubmit={handleSubmit}
                className="border-gray-500 text-white p-6 rounded-2xl w-full max-w-4xl space-y-4"
            >
                <h1 className="text-2xl font-bold text-center mb-4">
                    Création d’une entité
                </h1>
                {/* Organisation */}
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <h2 className="font-semibold mb-4 text-black uppercase">ORGANISATION</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <div className="flex items-center">
                            {/* Logo upload section */}
                            <div className="border-2 border-gray-500 p-4 rounded-lg mt-4">
                                <label
                                    htmlFor="dropzone-file"
                                    className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
                                >
                                    <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg
                                            className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 20 16"
                                        >
                                            <path
                                                stroke="currentColor"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                                            />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                                            <span className="font-semibold">Cliquez pour importer</span>{" "}
                                            ou glissez et déposez
                                        </p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">
                                            SVG, PNG, JPG ou GIF (MAX. 800x400px)
                                        </p>
                                    </div>
                                    <input id="dropzone-file" type="file" className="hidden" />
                                </label>
                            </div>
                        </div>

                        {/* Organisation Type Select */}
                        <div>
                            <label
                                htmlFor="organisationType"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Type d'organisation
                            </label>
                            <select
                                className="w-full h-10 px-3 text-base placeholder-gray-600 border border-blue-500 rounded-lg bg-blue-50 text-blue-700 focus:ring-blue-500 focus:border-blue-500"
                                id="organisationType"
                                value={formData.organisationType}
                                name="organisationType"
                                onChange={handleChange}
                            >
                                <option value="text">Particulier</option>
                                <option value="select">Organisation</option>
                            </select>
                        </div>
                      
                    </div>
                    
                </div>

                {/* Info Contact */}
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <h2 className="font-semibold  text-black uppercase">Info Contact</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <input
                            type="text"
                            name="nom"
                            placeholder="nom entite"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                        
                        <input
                            type="text"
                            name="contactPhone"
                            placeholder="+225 01 01 01 10 10"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="contactEmail"
                            placeholder="test@gmail.com"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                       
                        <input
                            type="text"
                            name="localisation"
                            placeholder="localité"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                    </div>

                    
                   
                </div>

                {/* Info Responsable */}
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <h2 className="font-semibold text-black uppercase">Info Responsable</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <input
                            type="text"
                            name="responsablePhone"
                            placeholder="+225 01 01 01 10 10"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="responsableEmail"
                            placeholder="test@gmail.com"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="fonction"
                            placeholder="Ex: Directeur"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="adresse"
                            placeholder="Adresse"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                    </div>

                   
                </div>

                {/* Connexion */}
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <h2 className="font-semibold text-black uppercase">Connexion</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                        <input
                            type="email"
                            name="connexionEmail"
                            placeholder="Email"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Mot de passe"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
                        <input
                            type="password"
                            name="confirmPassword"
                            placeholder="Confirmer mot de passe"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                            onChange={handleChange}
                        />
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
                            <input
                                type="text"
                                name="responsablePhone"
                                placeholder="+225 01 01 01 10 10"
                                className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="responsableEmail"
                                placeholder="test@gmail.com"
                                className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="fonction"
                                placeholder="Ex: Directeur"
                                className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleChange}
                            />
                            <input
                                type="text"
                                name="adresse"
                                placeholder="Adresse"
                                className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleChange}
                            />
                        </div>
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
                            <input
                                type="text"
                                name="responsablePhone"
                                placeholder="+225 01 01 01 10 10"
                                className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleChange}
                            />
                            <input
                                type="email"
                                name="responsableEmail"
                                placeholder="test@gmail.com"
                                className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                onChange={handleChange}
                            />
                         
                        </div>
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
    );
};

export default CreationEntite;
