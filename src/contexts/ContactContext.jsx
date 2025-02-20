
import React, { createContext, useContext } from 'react';
import { useContactActions } from '../hooks/useContactActions'; // Un hook dédié aux actions du contact

const ContactContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useContact = () => useContext(ContactContext);

export const ContactProvider = ({ children }) => {
    const actionContact = useContactActions(); // Hook gérant les actions
    // recuperer la liste des  contacts
    
    return (
        <ContactContext.Provider value={actionContact}>
            {children}
        </ContactContext.Provider>
    );
};
