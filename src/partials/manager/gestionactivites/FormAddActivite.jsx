import React, { useState } from 'react';
import ConfigurableInput from '../../../components/ConfigurableInput';
import ConfigurableTextArea from '../../../components/ConfigurableTextArea';
import ConfigurableSelectField from '../../../components/ConfigurableSelectField';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function FormAddActivite() {
   
    const formArray = ["brouillon", "validation", "programmation", "assignation"];
    const [formNo, setFormNo] = useState(formArray[0]);
    const [status, setStatus] = useState("brouillon");
    const [state, setState] = useState({
        motif: "",
        date: "",
        daterealisation: "",
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


    const inputHandle = (e) => {
        setState({
            ...state
            , [e.target.name]:
                e.target.value
        });
    };
    const currentStepIndex = formArray.indexOf(formNo);

     const validationRules = {
            brouillon: () => state.motif && state.date && state.typeactivitesdes !== "---Selectionner un type d'activité---",
            validation: () => state.telephone && state.email,
            programmation: () => state.responsableName && state.responsableEmail && state.responsableFonction
        };
        const next = () => {
            const currentStepIndex = formArray.indexOf(status);
    
            if (currentStepIndex === -1 || currentStepIndex >= formArray.length - 1) {
                return toast.error("Impossible de continuer.");
            }
    
            const currentStep = formArray[currentStepIndex];
    
            if (validationRules[currentStep]?.()) {
                setFormNo(formNo + 1);
                setStatus(formArray[currentStepIndex + 1]);
            } else {
                toast.error("Veuillez remplir tous les champs requis");
            }
        };

    const pre = () => {
        setFormNo(formNo - 1);
    };

    const finalSubmit = () => {
        if (status === "terminer") {
            toast.success("Activité assignée avec succès !");
        } else {
            toast.error("L'activité ne peut pas être assignée sans responsable.");
        }
    };

    return (
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl" >
            {/* Header */}
            <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Création d'une Activites</h2>
            </header>
            <div className="overflow-x-auto">
                <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl">
                    <section className="container px-4 mx-auto">
                        <ToastContainer />
                        <div className="card w-full rounded-md shadow-md bg-white p-5">
                            <div className="flex justify-center items-center">
                                {formArray.map((label, i) => (
                                    <>
                                        <div className={`w-[120px] my-3 text-white rounded-full ${currentStepIndex >= i ? "bg-blue-500" : "bg-slate-400"
                                            } h-[35px] flex justify-center items-center`}>
                                            {label}
                                        </div>
                                        {i !== formArray.length - 1 && (
                                            <div className={`w-[85px] h-[2px] ${currentStepIndex > i ? "bg-blue-500" : "bg-slate-400"}`}>
                                            </div>
                                        )}
                                    </>
                                ))}
                            </div>

                            {formNo === "brouillon" && (

                                <form onSubmit={handleSubmit} className="border-gray-500 text-white p-6 rounded-2xl w-full space-y-4">
                                    <h1 className="text-2xl font-bold text-center mb-4">Création d’une entité</h1>

                                    {/* Info Activités */}
                                    <div className="border-2 border-gray-500 p-4 rounded-lg w-full">
                                        <h2 className="font-semibold text-black uppercase">Info Activités</h2>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                            <ConfigurableInput label="Motif de la demande d’audience" name="motif" value={state.motif} onChange={inputHandle} />
                                            <ConfigurableInput label="Date de la creaction" name="date" type="date" value={state.date} onChange={inputHandle} />
                                            {/* <EmployeeAutoComplete label="Bénéficiaire" name="beneficiaire" placeholder="Bénéficiaire" /> */}
                                            <ConfigurableSelectField label="Types d'activité" name="typeactivitesdes" value={state.typeactivitesdes} onChange={inputHandle} options={["Audience", "Discussion", "Conference", "Dons", "Promesse", "Autre"]} />
                                            <ConfigurableTextArea label="Observation" name="observation" value={state.observation} onChange={inputHandle} />
                                        </div>
                                    </div>

                                    {/* Autre Info (Dons) */}
                                    {state.typeactivitesdes === "Dons" && (

                                        <div className="border-2 border-gray-500 p-4 rounded-lg">
                                            <h2 className="font-semibold text-black uppercase">Autre info</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                                <ConfigurableSelectField label="Type" name="typeDonsPromesse" value={state.typeactivitesdes} onChange={inputHandle} options={["En espece", "En nature"]} />
                                                {/* Masquer ou désactiver le champ Nature si "En espece" est sélectionné */}

                                                {state.typeactivitesdes !== "En espece" && (
                                                    <ConfigurableInput label="Nature" name="nature" type="text" value={state.nature} onChange={inputHandle} 
                                                        disabled={state.typeactivitesdes === "En espece"} />


                                                )}

                                                <ConfigurableInput label="Quantité" name="quantite" type="number" value={state.quantite} onChange={inputHandle}  />
                                                <ConfigurableInput label="Valeur" name="valeur" type="number" value={state.valeur} onChange={inputHandle}  />
                                                <ConfigurableInput label="Date de la realisation" name="danterealisation" type="date" value={state.daterealisation} onChange={inputHandle}  />

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
                                    {state.typeactivitesdes === "Promesse" && (
                                        <div className="border-2 border-gray-500 p-4 rounded-lg">
                                            <h2 className="font-semibold text-black uppercase">Autre info</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                                <ConfigurableSelectField label="Type" name="typeDonsPromesse" value={state.typeactivitesdes} onChange={handleChange} options={["En espece", "En nature"]} />
                                                {/* Masquer ou désactiver le champ Nature si "En espece" est sélectionné */}

                                                {state.typeactivitesdes !== "En espece" && (
                                                    <ConfigurableInput label="Nature" name="nature" type="text" value={state.nature} onChange={handleChange} 
                                                        disabled={state.typeactivitesdes === "En espece"} />


                                                )}

                                                <ConfigurableInput label="Quantité" name="quantite" type="number" value={state.quantite} onChange={handleChange}  />
                                                <ConfigurableInput label="Valeur" name="valeur" type="number" value={state.valeur} onChange={handleChange}  />
                                                <ConfigurableInput label="Date de la realisation" name="danterealisation" type="date" value={state.valeur} onChange={handleChange}  />

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
                                    {state.typeactivitesdes === "Audience" && (
                                        <div className="border-2 border-gray-500 p-4 rounded-lg">
                                            <h2 className="font-semibold text-black uppercase">Autre info</h2>
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                                <ConfigurableInput label="Nom du demandeur" name="demandeurNom" value={state.responsableName} onChange={handleChange}  />
                                                <ConfigurableInput label="Téléphone du demandeur" type="text" name="demandeurPhone" placeholder="+225 01 01 01 10 10" value={state.responsablePhone} onChange={handleChange} className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none" />
                                                <ConfigurableInput label="Email du demandeur" name="demandeurEmail" value={state.responsableEmail} onChange={handleChange}  />
                                                <ConfigurableInput label="Date de rencontre souhaitée" name="date" type="date" value={state.date} onChange={handleChange}  />

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
                                            onClick={next}
                                            className="px-6 py-2 text-lg font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700 transition"
                                        >
                                            Soumettre
                                        </button>
                                        {/* <button  className="px-3 py-2 text-white bg-blue-500 w-full">Suivant</button> */}

                                    </div>

                                </form>
                            )}

                            {formNo === "validation" && (
                                <div>
                                    <input name="telephone" placeholder="Téléphone" value={state.telephone} onChange={inputHandle} className="p-2 border w-full mb-2" />
                                    <input name="email" placeholder="Email" value={state.email} onChange={inputHandle} className="p-2 border w-full mb-2" />
                                    <textarea name="observation" placeholder="Observation" value={state.observation} onChange={inputHandle} className="p-2 border w-full mb-2"></textarea>
                                    <div className="flex gap-2">
                                        <button onClick={pre} className="px-3 py-2 bg-gray-500 text-white w-full">Précédent</button>
                                        <button onClick={next} className="px-3 py-2 bg-blue-500 text-white w-full">Suivant</button>
                                    </div>
                                </div>
                            )}

                            {formNo === "programmation" && (
                                <div>
                                    <input name="responsableName" placeholder="Nom du responsable" value={state.responsableName} onChange={inputHandle} className="p-2 border w-full mb-2" />
                                    <input name="responsableEmail" placeholder="Email du responsable" value={state.responsableEmail} onChange={inputHandle} className="p-2 border w-full mb-2" />
                                    <input name="responsableFonction" placeholder="Fonction du responsable" value={state.responsableFonction} onChange={inputHandle} className="p-2 border w-full mb-2" />
                                    <div className="flex gap-2">
                                        <button onClick={pre} className="px-3 py-2 bg-gray-500 text-white w-full">Précédent</button>
                                        <button onClick={next} className="px-3 py-2 bg-blue-500 text-white w-full">Suivant</button>
                                    </div>
                                </div>
                            )}

                            {formNo === "assignation" && (
                                <div>
                                    <input name="responsableName" placeholder="Date debut prévus" value={state.responsableName} onChange={inputHandle} className="p-2 border w-full mb-2" />
                                    <input name="responsableEmail" placeholder="Date fin prévus" value={state.responsableEmail} onChange={inputHandle} className="p-2 border w-full mb-2" />
                                    <div className="flex gap-2">
                                        <button onClick={pre} className="px-3 py-2 bg-gray-500 text-white w-full">Précédent</button>
                                    </div>
                                    <p>Validation et assignation terminées.</p>
                                    <button onClick={finalSubmit} className="px-3 py-2 bg-green-500 text-white w-full">Soumettre</button>
                                </div>
                            )}
                        </div>
                    </section>
                </div>
            </div>
        </div>
    );
}

export default FormAddActivite;
