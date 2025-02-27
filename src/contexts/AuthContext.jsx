
import { createContext, useContext } from "react";
import useAuthenticationActions from "../hooks/useAuthenticationActions";


const AuthContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const authActions = useAuthenticationActions(); // Hook gérant les actions
    // recuperer la liste des  contacts
    console.log(authActions);
    
    return (
        <AuthContext.Provider value={authActions}>
            {children}
        </AuthContext.Provider>
    );
};



