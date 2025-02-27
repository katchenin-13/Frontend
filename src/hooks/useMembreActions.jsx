import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// Données fictives initiales
const initialData = [
     {
            id:1,
            name: "Communaute Internationale des Femmes",
            email: "membre@cif.org",
            phone: "+225 07 12 34 56 78",
            adress: "Top-ranked search platform",

            
        },
        {
            id:2,
            name: "Communauté Musulmane – SOBA",
            email: "info@musulmane-soba.ci",
            phone: "+225 05 98 76 54 32",
            adress: "Leading in OS market",
           
            
        },
        {
            id:3,
            name: "Communauté Chrétienne",
            email: "support@communaute-chretienne.com",
            phone: "+225 01 22 33 44 55",
            adress: "Innovative tech products",
           
        },
        {
            id:4,
            name: "Communauté Juive",
            email: "membre@communaute-juive.net",
            phone: "+225 07 99 88 77 66",
            adress: "Brings all your news into one place",
 
            
        },
        {
            id:5,
            name: "Quotient Internationale des Femmes",
            email: "info@quotient.co",
            phone: "+225 05 66 55 44 33",
            adress: "Web-based sales doc management",
           
            
        },
        {
            id:6,
            name: "Association Internationale des Femmes",
            email: "membre@aif.org",
            phone: "+225 01 44 33 22 11",
            adress: "Web-based sales doc management",
            
        },
        {
            id:7,
            name: "Nancy Davolio",
            email: "nancy.davolio@example.com",
            phone: "+225 07 22 11 00 99",
            adress: "Web-based sales doc management",
     
    
            
        },
        {
            id:9,
            name: "Steven Buchanan",
           
            email: "steven.buchanan@example.com",
            phone: "+225 05 88 77 66 55",
            adress: "Web-based sales doc management",
           
            
        }
];

export function useMembreActions() {
    const [membres, setMembre] = useState([]);
   
    // Chargement initial des membres
    useEffect(() => {
        const storedMembres = JSON.parse(localStorage.getItem("membres"));
        const mergedMembres = ( storedMembres && storedMembres.length > 0) ? storedMembres : initialData;
        setMembre(mergedMembres);
        // Sauvegarde des membres fusionnés dans le localStorage
        if (storedMembres?.length === 0) {
            localStorage.setItem("membres", JSON.stringify(mergedMembres));
        }
    }, []);

    // Sauvegarde automatique des membres dans le localStorage
    useEffect(() => {
        if (membres.length > 0) {
            localStorage.setItem("membres", JSON.stringify(membres));
        }
    }, [membres]);

    
    // Fonction pour ajouter un membre
    const addMembre = (membre) => {
        const updatedMembres = [{ id: Date.now(), ...membre }, ...membres];
        setMembre(updatedMembres);
        localStorage.setItem("membres", JSON.stringify(updatedMembres));
    };

    // Fonction pour modifier un membre
    const editMembre = (id, updatedMembre) => {
        setMembre((prev) => {
            const updatedMembres = prev.map((membre) =>
                membre.id === id ? { ...membre, ...updatedMembre } : membre
            );

            // Mise à jour du localStorage
            localStorage.setItem("membres", JSON.stringify(updatedMembres));

            return updatedMembre;
        });
    };

    // Fonction pour supprimer un membre
    const deleteMembre = (id) => {
        Swal.fire({
            title: "Êtes-vous sûr ?",
            text: "Cette action est irréversible !",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Oui, supprimer !",
            cancelButtonText: "Annuler"
        }).then((result) => {
            if (result.isConfirmed) {
                setMembre((prev) => prev.filter((membre) => membre.id !== id));
                localStorage.setItem("membres", JSON.stringify(membres.filter((membre) => membre.id !== id)));
                Swal.fire("Supprimé !", "Le membre a été supprimé.", "success");
            }
        });
    };






    const showMembre = (membre) => {
        Swal.fire({
            title: `<strong>Détails du membre</strong>`,
            html: `
            <table style="width:100%; border-collapse: collapse; text-align: left;">
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Nom</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${membre.name || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Email</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${membre.email || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Téléphone</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${membre.phone || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Adresse</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${membre.adress || "Non renseigné"}</td>
                </tr>
               
            </table>
        `,
            icon: "info",
            confirmButtonText: "Fermer",
            width: "600px",
        });
    };

    return {
        membres,
        addMembre,
        editMembre,
        showMembre,
        deleteMembre,
       
    };
}

export default useMembreActions;
