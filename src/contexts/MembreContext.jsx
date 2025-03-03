
import React, { createContext, useContext } from 'react';
import { useMembreActions } from '../hooks/useMembreActions'; // Un hook dédié aux actions du contact

const MembreContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useMembre = () => useContext(MembreContext);

export const MembreProvider = ({ children }) => {
    const actionMembres = useMembreActions(); // Hook gérant les actions
    // recuperer la liste des  membres
    
    return (
        <MembreContext.Provider value={actionMembres}>
            {children}
        </MembreContext.Provider>
    );
};
