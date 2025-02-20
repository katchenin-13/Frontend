import { useState } from "react";

export function useBeneficiaire() {
    const [beneficiaire, setBeneficiaire] = useState([]);
    const [isAdding, setIsAdding] = useState(false);  // Pour gérer l'ajout
    const [isEditing, setIsEditing] = useState(false);  // Pour gérer l'édition
    const [dynamicFields, setDynamicFields] = useState([]);

    // Add function: Adds a new beneficiaire
    const addBeneficiaire = (newBeneficiaire) => {
        setBeneficiaire((prevBeneficiaires) => [...prevBeneficiaires, newBeneficiaire]);
        setIsAdding(false); // Fermer le mode ajout après ajout
    };

    // Edit function: Edits an existing beneficiaire
    const editBeneficiaire = (index, updatedBeneficiaire) => {
        const updatedBeneficiaires = [...beneficiaire];
        updatedBeneficiaires[index] = updatedBeneficiaire;
        setBeneficiaire(updatedBeneficiaires);
        setIsEditing(false); // Fermer le mode édition après modification
    };

    // Delete function: Deletes a beneficiaire
    const deleteBeneficiaire = (index) => {
        const updatedBeneficiaires = beneficiaire.filter((_, i) => i !== index);
        setBeneficiaire(updatedBeneficiaires);
    };

    // Filter function
    const filterBeneficiaire = (criteria) => {
        return beneficiaire.filter((item) =>
            Object.keys(criteria).every((key) => item[key] === criteria[key])
        );
    };

    // Sort function
    const sortBeneficiaire = (field) => {
        const sortedBeneficiaires = [...beneficiaire].sort((a, b) => a[field].localeCompare(b[field]));
        setBeneficiaire(sortedBeneficiaires);
    };

    // Search function
    const searchBeneficiaire = (searchTerm) => {
        return beneficiaire.filter((item) => Object.values(item).some((value) => value.includes(searchTerm)));
    };

    // Pagination function
    const paginateBeneficiaire = (page, pageSize) => {
        const start = (page - 1) * pageSize;
        const end = start + pageSize;
        return beneficiaire.slice(start, end);
    };

    // Add dynamic field
    const addDynamicField = (fieldName) => {
        setDynamicFields((prevFields) => [...prevFields, fieldName]);
    };

    // Remove dynamic field
    const removeDynamicField = (fieldName) => {
        setDynamicFields((prevFields) => prevFields.filter((field) => field !== fieldName));
    };

    return {
        beneficiaire,
        addBeneficiaire,
        editBeneficiaire,
        deleteBeneficiaire,
        filterBeneficiaire,
        sortBeneficiaire,
        searchBeneficiaire,
        paginateBeneficiaire,
        addDynamicField,
        removeDynamicField,
        isAdding,
        isEditing,
        setIsAdding,
        setIsEditing,
    };
}

export default useBeneficiaire;
