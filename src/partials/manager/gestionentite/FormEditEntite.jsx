import React, { useEffect, useState } from 'react';
import ConfigurableInput from '../../../components/ConfigurableInput';
import useEntiteActions from '../../../hooks/useEntiteActions';
import { useEntite } from '../../../contexts/EntiteContext';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


const FormEditEntite = ({initialData = {}}) => {
    const { EditEntite, entites, typeEntite } = useEntite(useEntiteActions)
    const [EntiteData, setEntiteData] = useState({
        id:initialData.id||Date.now(),
        entiteType: initialData.entiteType ||'',
        name: initialData.name ||'',
        email: initialData.email ||'',
        phone: initialData.phone ||'',
        ville: initialData.ville ||'',
        adress: initialData.adresse||'',
        responsableName: initialData.responsableName || '',
        responsablePhone: initialData.responsableName || '',
        responsableEmail: initialData.responsableEmail || '',
        responsableFonction: initialData.responsableFonction|| '',
        description: initialData.description || '',
    });

console.log("EntiteData:", typeEntite);




 // Chercher le contact dans la liste si initialData.id est présent

    const handleChange = (e) => {
        setEntiteData({ ...EntiteData, [e.target.name]: e.target.value });
    };
    useEffect(() => {
        const savedEntite = localStorage.getItem("entite");
       
       
        if (savedEntite && savedEntite !== "undefined") {
            try {
                setEntiteData(JSON.parse(savedEntite)); // Charge les données stockées
            } catch (error) {
                console.error("Erreur de parsing JSON :", error);
                localStorage.removeItem("entite"); // Supprime l'entrée corrompue
            }
        } else if (initialData && Object.keys(initialData).length > 0) {
            setEntiteData(initialData);
        }
    }, []);

    const [dynamicFields, setDynamicFields] = useState([]);

    const addDynamicField = () => {
        setDynamicFields([...dynamicFields, { id: Date.now(), key: "", value: "" }]);
    };

    const removeDynamicField = (id) => {
        setDynamicFields(dynamicFields.filter(field => field.id !== id));
    };


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(EntiteData);
    // };


   const handleSubmit = (e) => {
        e.preventDefault();

        // Vérifier les champs vides
        const emptyFields = Object.entries(EntiteData).filter(([key, value]) => {
            return typeof value === 'string' && !value.trim();
        });

        if (emptyFields.length > 0) {
            emptyFields.forEach(([key]) => {
                toast.error(`Le champ "${key}" est obligatoire.`);
            });
            return;
        }

        // Vérifier si l'ID existe pour mettre à jour ou ajouter
        if (EntiteData.id) {
            EditEntite(EntiteData.id, EntiteData);

            //parcour tous les entite dans localStorage
            entites.forEach((entite) => {
                if (entite.id === EntiteData.id) {
                    // Mettre à jour le entite dans la liste
                    entite.entiteType = EntiteData.entiteType;
                    entite.name = EntiteData.name;
                    entite.email = EntiteData.email;
                    entite.phone = EntiteData.phone;
                    entite.ville = EntiteData.ville;
                    entite.adress = EntiteData.adress;
                    entite.description = EntiteData.description;
                }
            });

            localStorage.setItem("entite", JSON.stringify(EntiteData));// ✅ Stocke correctement l'objet sélectionné

            // data initialData sera egale au data du localStorage
            localStorage.setItem("entite", JSON.stringify(entites));// ✅ Stocke correctement l'objet sélectionné
            console.log("Entite modifié :", EntiteData);
            toast.success("Entite modifié avec succès !");
        } else {
            toast.error("Erreur : Impossible de modifier un entite sans ID.");
            return;
        }

        // Réinitialisation du formulaire après soumission
        setEntiteData({ name: '',email: '',phone: '',ville: '',adress: '',description: '',responsableEmail:"",responsableFonction:"",responsableName:"",responsablePhone:""});
    };
    return (

        <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 rounded-x">

  <ToastContainer />
            <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Création d’un membres</h2>
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
                                        id="entiteType"
                                        value={EntiteData.entiteType}
                                        name="entiteType"
                                        onChange={handleChange}
                                    >
                                        {Array.isArray(typeEntite) ? typeEntite.map((type) => (
                                            <option key={type.id} value={type.value}>{type.label}</option>
                                        )) : <option disabled>Chargement...</option>}
                                    </select>
                                </div>

                            </div>

                        </div>

                        {/* Info Contact */}
                        <div className="border-2 border-gray-500 p-4 rounded-lg">
                            <h2 className="font-semibold  text-black uppercase">Info Bénéficiaire</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                <ConfigurableInput label="Nom complet" type="text" name="name" placeholder="Nom complet" value={EntiteData.name} onChange={handleChange} />
                                <ConfigurableInput label="Email" type="email" name="email" placeholder="exemple@gmail.com" value={EntiteData.email} onChange={handleChange} />
                                <ConfigurableInput label="Telephone" type="text" name="phone" placeholder="Telephone" value={EntiteData.phone} onChange={handleChange} />
                                <ConfigurableInput label="Ville/Village" type="text" name="ville" placeholder="Ville" value={EntiteData.ville} onChange={handleChange} />
                                <ConfigurableInput label="Adresse" type="text" name="adress" placeholder="Adresse" value={EntiteData.adress} onChange={handleChange} />
                            </div>
                        </div>



                        {/* Description */}
                        <div className="border-2 border-gray-500 p-4 rounded-lg">
                            <h2 className="font-semibold text-black uppercase">Description</h2>
                            <textarea
                                name="description"
                                value={EntiteData.description}
                                onChange={handleChange}
                                className="w-full h-32 p-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                                placeholder="Entrez la description..."
                            />
                        </div>

                        {/* Autre Info */}
                        {/* Afficher Autre Info si Organisation est sélectionné */}
                        {EntiteData.entiteType === "communaute" && (
                            <div className="border-2 border-gray-500 p-4 rounded-lg">
                                <h2 className="font-semibold text-black uppercase">
                                    Autre info
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <ConfigurableInput label="Nom complet" type="text" name="responsableName" placeholder="Nom complet" value={EntiteData.responsableName} onChange={handleChange} />
                                    <ConfigurableInput label="Téléphone du Responsable" type="text" name="responsablePhone" placeholder="+225 01 01 01 10 10" value={EntiteData.responsablePhone} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="Email du Responsable" type="email" name="responsableEmail" placeholder="test@gmail.com" value={EntiteData.responsableEmail} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="fonction" type="text" name="responsableFonction" placeholder="Ex: Directeur" value={EntiteData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                </div>
                                {dynamicFields.map((field, index) => (
                                    <div key={field.id} className="flex items-center gap-2 mt-2">
                                        <ConfigurableInput
                                            label="Libélle"
                                            type="text"
                                            name="libelle"
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
                                            label="Valeur"
                                            type="text"
                                            name="Valeur"
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
                        {EntiteData.entiteType === "ong" && (
                            <div className="border-2 border-gray-500 p-4 rounded-lg">
                                <h2 className="font-semibold text-black uppercase">
                                    Autre info
                                </h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    <ConfigurableInput label="Nom complet" type="text" name="responsableName" placeholder="Nom complet" value={EntiteData.responsableName} onChange={handleChange} />
                                    <ConfigurableInput label="Téléphone du Responsable" type="text" name="responsablePhone" placeholder="+225 01 01 01 10 10" value={EntiteData.responsablePhone} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="Email du Responsable" type="email" name="responsableEmail" placeholder="test@gmail.com" value={EntiteData.responsableEmail} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                    <ConfigurableInput label="fonction" type="text" name="responsableFonction" placeholder="Ex: Directeur" value={EntiteData.responsableFonction} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                </div>
                                {dynamicFields.map((field, index) => (
                                    <div key={field.id} className="flex items-center gap-2 mt-2">
                                        <ConfigurableInput
                                            label="Libelle"
                                            type="text"
                                            name="libelle"
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
                                            label="Valeur"
                                            type="text"
                                            name="valeur"
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

export default FormEditEntite;
