import React, { createContext, useContext } from 'react';
import { useEntiteActions } from '../hooks/useEntiteActions';

const EntiteContext = createContext(null); // Valeur initiale explicite

// Hook personnalisé pour utiliser le contexte avec une valeur par défaut
export const useEntite = () => {
    const context = useContext(EntiteContext);
    if (!context) {
        console.warn("useEntite doit être utilisé à l'intérieur d'un EntiteProvider.");
        return { entites: [], showEntite: () => { }, deleteEntite: () => { } };
    }
    return context;
};

export const EntiteProvider = ({ children }) => {
    const actionEntites = useEntiteActions(); // Récupération des actions
    console.log("Valeur de actionEntites :", actionEntites); // Debugging

    return (
        <EntiteContext.Provider value={actionEntites}>
            {children}
        </EntiteContext.Provider>
    );
};
