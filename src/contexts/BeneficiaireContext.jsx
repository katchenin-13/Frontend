
import React, { createContext, useContext } from 'react';
import {useBeneficiaireActions} from '../hooks/useBeneficiaireActions';

const BeneficiaireContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useBeneficiaire = () => useContext(BeneficiaireContext);

export const BeneficiaireProvider = ({ children }) => {
    const actionBeneficiaire = useBeneficiaireActions(); // Hook gérant les actions
    // recuperer la liste des  contacts
    console.log(actionBeneficiaire);
    
    return (
        <BeneficiaireContext.Provider value={actionBeneficiaire}>
            {children}
        </BeneficiaireContext.Provider>
    );
};
