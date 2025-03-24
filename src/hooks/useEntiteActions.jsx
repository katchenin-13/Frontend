import { useState, useEffect } from "react";
import Swal from "sweetalert2";

//donnes fictives initiales
const initialData = [
    {
       
        id: 1 ,
        entiteType: "ong",
        name: "Communaute Internationale des Femmes",
        email: "contact@cif.org",
        phone: "+225 07 12 34 56 78",
        ville: "Abidjan",
        adress: "Top-ranked search platform",
        responsableName: "Awa Koné",
        responsablePhone: "+225 07 11 22 33 44",
        responsableEmail: "awa.kone@cif.org",
        responsableFonction: "Présidente",
        description: "Organisation dédiée à la promotion des droits des femmes."
    },
    {
        id: 2 ,
        entiteType: "communaute",
        name: "Communauté Musulmane – SOBA",
        email: "info@musulmane-soba.ci",
        phone: "+225 05 98 76 54 32",
        ville: "Bouaké",
        adress: "Leading in OS market",
        responsableName: "Omar Diakité",
        responsablePhone: "+225 05 66 77 88 99",
        responsableEmail: "omar.diakite@musulmane-soba.ci",
        responsableFonction: "Imam Principal",
        description: "Groupe religieux assurant le bien-être spirituel et social."
    },
    {
        id: 3 ,
        eneficiaireType: "ong",
        name: "Communauté Chrétienne",
        email: "support@communaute-chretienne.com",
        phone: "+225 01 22 33 44 55",
        ville: "Yamoussoukro",
        adress: "Innovative tech products",
        responsableName: "Paul N'Guessan",
        responsablePhone: "+225 01 55 66 77 88",
        responsableEmail: "paul.nguessan@communaute-chretienne.com",
        responsableFonction: "Pasteur Principal",
        rescription: "Communauté engagée dans la prière et l’action sociale."
    },
    {
        id: 4 ,
        entiteType: "ong",
        name: "Communauté Juive",
        email: "contact@communaute-juive.net",
        phone: "+225 07 99 88 77 66",
        ville: "San Pedro",
        adress: "Brings all your news into one place",
        responsableName: "David Cohen",
        responsablePhone: "+225 07 77 88 99 00",
        responsableEmail: "david.cohen@communaute-juive.net",
        responsableFonction: "Rabbin",
        description: "Regroupement de la communauté juive pour les célébrations et événements."
    },
    {
        id: 5 ,
        entiteType: "ong",
        name: "Quotient Internationale des Femmes",
        email: "info@quotient.co",
        phone: "+225 05 66 55 44 33",
        ville: "Daloa",
        adress: "Web-based sales doc management",
        responsableName: "Marie Zadi",
        responsablePhone: "+225 05 33 22 11 00",
        responsableEmail: "marie.zadi@quotient.co",
        responsableFonction: "Secrétaire Générale",
        description: "Programme de soutien aux femmes entrepreneures."
    },
    {
        id: 6 ,
        entiteType: "ong",
        name: "Association Internationale des Femmes",
        email: "contact@aif.org",
        phone: "+225 01 44 33 22 11",
        ville: "Korhogo",
        adress: "Web-based sales doc management",
        responsableName: "Fatou Traoré",
        responsablePhone: "+225 01 99 88 77 66",
        responsableEmail: "fatou.traore@aif.org",
        responsableFonction: "Coordinatrice",
        description: "Réseau d’entraide et d’insertion professionnelle des femmes."
    },
    {
        id: 7 ,
        entiteType: "communaute",
        name: "Nancy Davolio",
        email: "nancy.davolio@example.com",
        phone: "+225 07 22 11 00 99",
        ville: "Abidjan",
        adress: "Web-based sales doc management",
        responsableName: "Nancy Davolio",
        responsablePhone: "+225 07 22 11 00 99",
        responsableEmail: "nancy.davolio@example.com",
        responsableFonction: "Consultante",
        description: "Experte en gestion de projets internationaux."
    },
    {
        id: 8 ,
        entiteType: "communaute",
        name: "Steven Buchanan",
        email: "steven.buchanan@example.com",
        phone: "+225 05 88 77 66 55",
        ville: "Yamoussoukro",
        adress: "Web-based sales doc management",
        responsableName: "Steven Buchanan",
        responsablePhone: "+225 05 88 77 66 55",
        responsableEmail: "steven.buchanan@example.com",
        responsableFonction: "Entrepreneur",
        description: "Fondateur d’une startup innovante dans la tech."
    }
];

export function useEntiteActions() {

    const [entites, setEntites] = useState([...initialData]);
    const [typeEntite] = useState([
        { id: 1, label: "Particulier", value: "particulier" },
        { id: 2, label: "Association", value: "association" },
        { id: 3, label: "Communaute", value: "communaute" },
        { id: 4, label: "Organisation", value: "organisation" },
        { id: 5, label: "ONG", value: "ong" },
    ]);

 
   console.log("dfjsjgfjh",initialData);
   
    //chargement intial des entite
    useEffect(() => {
        const storedEntites = JSON.parse(localStorage.getItem("entite"));
        console.log("test", storedEntites);
        const mergedEntite = (storedEntites && storedEntites?.length > 0) ? storedEntites : initialData;
        setEntites(mergedEntite);

        
        // Sauvegarde des contacts fusionnés dans le localStorage
        if (storedEntites?.length === 0) {
            localStorage.setItem("entites", JSON.stringify(mergedEntite));
        } //Sauvegarde des contacts fusionnés dans le localStorage   
    }, []);

    // Sauvegarde automatique des contacts dans le localStorage
    useEffect(() => {
        if (entites.length > 0) {
            localStorage.setItem('entites', JSON.stringify(entites));
        } 
    }, [entites]);


    // Fonction pour ajouter un entite
    const addEntite=(entite)=>{
        const newEntite = [{ id: Date.now(), ...entite }, ...entites];        
        setEntites(newEntite);
        localStorage.setItem('entites', JSON.stringify(newEntite));

    };

    // Fonction pour modifier un entite
    const EditEntite =(id,updatedEntite)=>{
        setEntites((prev) => {
            const updatedEntites = prev.map((entite) =>
                entite.id === id ? { ...entite, ...updatedEntite } : entite
            );
            // Sauvegarde des contacts fusionnés dans le localStorage
            localStorage.setItem('entites', JSON.stringify(updatedEntites));
            return updatedEntites;
        })
    };

  

    {
        Array.isArray(typeEntite) ? typeEntite.map((type) => (
            <option key={type.id} value={type.value}>{type.label}</option>
        )) : <option disabled>Chargement...</option>
    }
    // Fonction pour supprimer un entite
    const deleteEntite=(id)=>{
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
            const updatedEntites = entites.filter((entite) => entite.id !== id);
            setEntites(updatedEntites);
            localStorage.setItem('entites', JSON.stringify(updatedEntites));
            Swal.fire("Supprimé!", "Le entité a été supprimé.", "success");    
        }
        })
    
    };

    //function de show
    const showEntite = (entite)=>{
        Swal.fire({
            title:`<strong> Détails du entité</strong>`,
            html:`
                <table style="width:100%; border-collapse: collapse; text-align: left;">
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Nom</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${entite.name || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Email</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${entite.email || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Téléphone</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${entite.phone || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Adresse</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${entite.adress || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Ville</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${entite.ville || "Non renseigné"}</td>
                </tr>
            </table>
            `,
            icone:"info",
            confirmButtonText: "Fermer",
            width: "600px",


        })
    };


    return { entites, addEntite, EditEntite, deleteEntite, showEntite, typeEntite };
}
export default useEntiteActions;

