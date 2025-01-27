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

    // Mode édition ou création
    const [isEditing, setIsEditing] = useState(false);

    // Exemple de données existantes à modifier (mock)
    const existingData = {
        organisationType: "Organisation",
        contactPhone: "+2250101011010",
        contactEmail: "exemple@test.com",
        website: "https://exemple.com",
        localisation: "Abidjan",
        responsablePhone: "+2250101012020",
        responsableEmail: "responsable@test.com",
        fonction: "Directeur Général",
        adresse: "Abidjan, Cocody",
        responsableLocalisation: "Plateau",
        connexionEmail: "connexion@test.com",
        password: "motdepasse123",
        confirmPassword: "motdepasse123",
        description: "Description de l'entité",
    };

    // Charger les données existantes pour édition
    const loadFormData = () => {
        setFormData(existingData);
        setIsEditing(true);
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
        if (isEditing) {
            console.log("Données modifiées :", formData);
        } else {
            console.log("Nouvelle entité créée :", formData);
        }
        // Réinitialiser le formulaire après soumission
        setFormData({
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
        setIsEditing(false);
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-white">
            <form
                onSubmit={handleSubmit}
                className="border-gray-500 text-white p-6 rounded-2xl w-full max-w-4xl space-y-4"
            >
                <h1 className="text-2xl font-bold text-center mb-4">
                    {isEditing ? "Modifier l’entité" : "Création d’une entité"}
                </h1>

                {/* Organisation */}
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <h2 className="font-semibold mb-4 text-black uppercase">
                        ORGANISATION
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <input
                            type="text"
                            name="organisationType"
                            value={formData.organisationType}
                            placeholder="Type d'organisation"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />
                        <input
                            type="text"
                            name="website"
                            value={formData.website}
                            placeholder="Site web"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Info Contact */}
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <h2 className="font-semibold text-black uppercase">INFO CONTACT</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <input
                            type="text"
                            name="contactPhone"
                            value={formData.contactPhone}
                            placeholder="Téléphone de contact"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="contactEmail"
                            value={formData.contactEmail}
                            placeholder="Email de contact"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Info Responsable */}
                <div className="border-2 border-gray-500 p-4 rounded-lg">
                    <h2 className="font-semibold text-black uppercase">INFO RESPONSABLE</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                        <input
                            type="text"
                            name="responsablePhone"
                            value={formData.responsablePhone}
                            placeholder="Téléphone responsable"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />
                        <input
                            type="email"
                            name="responsableEmail"
                            value={formData.responsableEmail}
                            placeholder="Email responsable"
                            className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
                            onChange={handleChange}
                        />
                    </div>
                </div>

                {/* Actions */}
                <div className="flex justify-between mt-4">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                    >
                        {isEditing ? "Modifier" : "Créer"}
                    </button>
                    {!isEditing && (
                        <button
                            type="button"
                            onClick={loadFormData}
                            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
                        >
                            Charger données existantes
                        </button>
                    )}
                </div>
            </form>
        </div>
    );
};

export default CreationEntite;
