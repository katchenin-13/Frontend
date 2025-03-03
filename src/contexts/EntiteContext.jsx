
import React, { createContext, useContext } from 'react';
import {useEntiteActions} from '../hooks/useEntiteActions';

const EntiteContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useEntite = () => useContext(EntiteContext);

export const EntiteProvider = ({ children }) => {
    const actionEntites = useEntiteActions(); // Hook gérant les actions
    // recuperer la liste des  contacts
    console.log(actionEntites);
    
    return (
        <EntiteContext.Provider value={actionEntites}>
            {children}
        </EntiteContext.Provider>
    );
};
