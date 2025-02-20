import React, { useEffect, useState } from 'react';
import ConfigurableInput from '../../../components/ConfigurableInput';

const ConfigurableModal = ({
    //destructuration du props
    title = 'Default Title',
    isOpenInitially = false,
    modalStyles = {},
    headerStyles = {},
    bodyStyles = {},
    modalWidth = 'max-w-lg', // Tailwind CSS class for modal width
    modalHeight = 'max-h-full',// Tailwind CSS class for modal height
    /**############################################### Configuration du modal ########################
     *  modalWidth = max-w-7xl modalHeight= max-h-full Extra Large modal
     *  modalWidth =  max-w-4xl modalHeight= max-h-full  Large Modal
     *  modalWidth = max-w-lg modalHeight= max-h-full   Default Modal
     *   modalWidth = max-w-md modalHeight= max-h-full Small modal
     *  
     */
}) => {


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




    const [isOpen, setIsOpen] = useState(isOpenInitially);
    const [dynamicFields, setDynamicFields] = useState([]);

    const addDynamicField = () => {
        setDynamicFields([...dynamicFields, { id: Date.now(), key: "", value: "" }]);
    };

    const removeDynamicField = (id) => {
        setDynamicFields(dynamicFields.filter(field => field.id !== id));
    };
    useEffect(() => {
        setIsOpen(isOpenInitially); // Synchronise l'état interne avec la prop
    }, [isOpenInitially]);

    const handleClose = () => {
        setIsOpen(false);
        if (onClose) onClose(); // Appelle la fonction de fermeture passée en prop
    };

    if (!isOpen) return null; // Si le modal est fermé, ne rien afficher

    // Fonction pour ouvrir le modal


    // Fonction pour fermer le modal
    const closeModal = () => {
        setIsModalOpen(false);
    };



    // Exemple d'actions pour les boutons


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


    // Handlers for Organisation Fields



    // Handlers for Contact Fields



    // Handlers for Responsable Fields







    return (
        <>
            {/* Button to open modal */}
            {/* <button
                onClick={openModal}
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Nouveau
            </button> */}

            {/* Modal */}
            <div
                className="fixed top-0 left-0 right-0 z-50 w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full"
                style={modalStyles}
            >
                <div className={`relative w-full  ${modalWidth} ${modalHeight} mx-auto`}>
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        {/* Modal header */}
                        <div
                            className={`flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600 border-gray-200`}
                            style={headerStyles}
                        >
                            <h3 className="text-xl font-medium text-gray-900 dark:text-white">{title}</h3>
                            <button
                                type="button"
                                onClick={handleClose}
                                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                                <svg
                                    className="w-3 h-3"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 14 14"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                    />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>

                        {/* Modal body */}
                        <div className="p-4 md:p-5 space-y-4" style={bodyStyles}>
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
                                            
                                            <ConfigurableInput label="Nom du Responsable" type="text" name="responsableName" placeholder="responsable nom" value={formData.responsableName} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                            <ConfigurableInput label="Email du Responsable" type="text" name="responsableEmail" placeholder="test@gmail.com" value={formData.responsableEmail} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                            <ConfigurableInput label="Fonction" type="text" name="fonction" placeholder="test@gmail.com" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                            <ConfigurableInput label="adresse" type="text" name="Adresse" placeholder="test@gmail.com" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />

                                        </div>
                                    </div>

                                    {/* Info Responsable */}
                                    <div className="border-2 border-gray-500 p-4 rounded-lg">
                                        <h2 className="font-semibold text-black uppercase">Info Responsable</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                                <ConfigurableInput label="Nom du Responsable" type="text" name="responsableName" placeholder="responsable nom" value={formData.responsableName} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                                <ConfigurableInput label="Email du Responsable" type="text" name="responsableEmail" placeholder="test@gmail.com" value={formData.responsableEmail} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                                <ConfigurableInput label="Fonction" type="text" name="fonction" placeholder="Ex: Directeur" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                                <ConfigurableInput label="adresse" type="text" name="Adresse" placeholder="BP 123" value={formData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                        </div>


                                    </div>

                                    {/* Connexion */}
                                    <div className="border-2 border-gray-500 p-4 rounded-lg">
                                        <h2 className="font-semibold text-black uppercase">Connexion</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                                            <ConfigurableInput label="Email" type="email" name="connexionEmail" placeholder="test@gmail.com" value={formData.connexionEmail} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                            <ConfigurableInput label="Mot de Passe" type="password" name="connexionPassword" placeholder="mot de passe" value={formData.password} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                            <ConfigurableInput label="Email" type="email" name="connexionEmail" placeholder="confirmation password" value={formData.confirmPassword} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
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

                        {/* Modal footer */}
                        {/* <div
                                className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600"
                                style={footerStyles}
                            >
                                <button
                                    onClick={() => {
                                        onAccept();
                                        closeModal();
                                    }}
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                >
                                    {acceptButtonText}
                                </button>
                                <button
                                    onClick={() => {
                                        onDecline();
                                        closeModal();
                                    }}
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                >
                                    {declineButtonText}
                                </button>
                            </div> */}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ConfigurableModal;
