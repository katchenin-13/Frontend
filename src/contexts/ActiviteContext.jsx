
import { createContext, useContext } from "react";
import useActiviteActions from "../hooks/useActiviteActions";


const ActiviteContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useActivite = () => useContext(ActiviteContext);

export const ActiviteProvider = ({ children }) => {
    const activitesActions = useActiviteActions(); // Hook gérant les actions
    // recuperer la liste des  contacts
    console.log(activitesActions);

    return (
        <ActiviteContext.Provider value={activitesActions}>
            {children}
        </ActiviteContext.Provider>
    );
};

