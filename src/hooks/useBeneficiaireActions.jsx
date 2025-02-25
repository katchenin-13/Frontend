import { useState, useEffect } from "react";
import Swal from "sweetalert2";

//donnes fictives initiales
const initialData = [
    {
       
        id: 1 ,
        beneficiaireType: "Association",
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
        beneficiaireType: "Communauté Religieuse",
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
        eneficiaireType: "Communauté Religieuse",
        ame: "Communauté Chrétienne",
        mail: "support@communaute-chretienne.com",
        hone: "+225 01 22 33 44 55",
        ille: "Yamoussoukro",
        dress: "Innovative tech products",
        esponsableName: "Paul N'Guessan",
        esponsablePhone: "+225 01 55 66 77 88",
        esponsableEmail: "paul.nguessan@communaute-chretienne.com",
        esponsableFonction: "Pasteur Principal",
        escription: "Communauté engagée dans la prière et l’action sociale."
    },
    {
        id: 4 ,
        beneficiaireType: "Communauté Religieuse",
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
        beneficiaireType: "Association",
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
        beneficiaireType: "Association",
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
        beneficiaireType: "Individu",
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
        beneficiaireType: "Individu",
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

export function useBeneficiaireActions() {

    const [beneficiaires, setBeneficiaires] = useState([]);
    const [beneficiaire,setBeneficiaire] = useState()
 
   console.log("dfjsjgfjh",initialData);
   
    //chargement intial des beneficiaire
    useEffect(() => {
        const storedBeneficiaires = JSON.parse(localStorage.getItem("beneficiaire"));
        console.log("test", storedBeneficiaires);
        const mergedBeneficiaire = (storedBeneficiaires && storedBeneficiaires?.length > 0) ? storedBeneficiaires : initialData;
        setBeneficiaires(mergedBeneficiaire);

        
        // Sauvegarde des contacts fusionnés dans le localStorage
        if (storedBeneficiaires?.length === 0) {
            localStorage.setItem("beneficiaires", JSON.stringify(mergedBeneficiaire));
        } //Sauvegarde des contacts fusionnés dans le localStorage   
    }, []);

    // Sauvegarde automatique des contacts dans le localStorage
    useEffect(() => {
        if (beneficiaires.length > 0) {
            localStorage.setItem('beneficiaires', JSON.stringify(beneficiaires));
        } 
    }, [beneficiaires]);


    // Fonction pour ajouter un beneficiaire
    const addBeneficiaire=(beneficiaire)=>{
        const updatedBeneficiaires = [{ id: Date.now(), ...beneficiaire }, ...beneficiaires];
        setBeneficiaires(updatedBeneficiaires);
        localStorage.setItem('beneficiaires', JSON.stringify(updatedBeneficiaires));

    };

    // Fonction pour modifier un beneficiaire
    const editBeneficiaire=(id,updatedBeneficiaire)=>{
        setBeneficiaires((prev) => {
            const updatedBeneficiaires = prev.map((beneficiaire) =>
                beneficiaire.id === id ? { ...beneficiaire, ...updatedBeneficiaire } : beneficiaire
            );
            // Sauvegarde des contacts fusionnés dans le localStorage
            localStorage.setItem('beneficiaires', JSON.stringify(updatedBeneficiaires));
            return updatedBeneficiaires;
        })
    };

    //get beneficiaire
    const getBeneficiaire = useCallback(
        async function getBeneficiaire(id,beneficiaire) {
           setBeneficiaire
            
        },
        [beneficiaire.id]
    );


    // Fonction pour supprimer un beneficiaire
    const deleteBeneficiaire=(id)=>{
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
            const updatedBeneficiaires = beneficiaires.filter((beneficiaire) => beneficiaire.id !== id);
            setBeneficiaires(updatedBeneficiaires);
            localStorage.setItem('beneficiaires', JSON.stringify(updatedBeneficiaires));
            Swal.fire("Supprimé!", "Le beneficiaire a été supprimé.", "success");    
        }
        })
    
    };

    //function de show
    const showBeneficiaire = (beneficiaire)=>{
        Swal.fire({
            title:`<strong> Détails du bénéficiaire</strong>`,
            html:`
                <table style="width:100%; border-collapse: collapse; text-align: left;">
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Nom</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${beneficiaire.name || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Email</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${beneficiaire.email || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Téléphone</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${beneficiaire.phone || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Adresse</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${beneficiaire.adress || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Ville</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${beneficiaire.ville || "Non renseigné"}</td>
                </tr>
            </table>
            `,
            icone:"info",
            confirmButtonText: "Fermer",
            width: "600px",


        })
    };


    return { beneficiaires, addBeneficiaire, editBeneficiaire, deleteBeneficiaire, showBeneficiaire };
}
export default useBeneficiaireActions;

