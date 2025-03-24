
import React, { useEffect, useState } from 'react'



//données fictives

const initialData = [
    {
        id: 1,
        date_rencontre: "10/02/2025",
        date_fin: "20/02/2025",
        beneficiaire: {
            nom: "Jean Dupont",
            phone: "+2250102030405",
            address: "Abidjan, Côte d'Ivoire"
        },
        motif: "Demande de financement",
        status: "En attente",
        brouillon: false
    },
    {
        id: 2,
        date_rencontre: "12/03/2025",
        date_fin: "15/03/2025",
        beneficiaire: {
            nom: "Marie Claire",
            phone: "+2250607080910",
            address: "Yamoussoukro, Côte d'Ivoire"
        },
        motif: "Demande d'information",
        status: "Terminée",
        brouillon: true
    },
    {
        id: 3,
        date_rencontre: "05/04/2025",
        date_fin: "10/04/2025",
        beneficiaire: {nom: "Paul Tanguy",phone: "+2250708091011",address: "San Pedro, Côte d'Ivoire"},
        motif: "Demande de formation",
        status: "En attente",
        brouillon: false
    },
    {
        id: 4,
        date_rencontre: "15/05/2025",
        date_fin: "20/05/2025",
        beneficiaire: {
            nom: "Awa Kouadio",
            phone: "+2250908070605",
            address: "Daloa, Côte d'Ivoire"
        },
        motif: "Demande de financement",
        status: "Validée",
        brouillon: false
    },
    {
        id: 5,
        date_rencontre: "18/06/2025",
        date_fin: "22/06/2025",
        beneficiaire: {
            nom: "Koffi Didier",
            phone: "+2250123456789",
            address: "Bouaké, Côte d'Ivoire"
        },
        motif: "Demande d'information",
        status: "En attente",
        brouillon: true
    }
];
export function useActiviteActions() {
    const [activites, setActivites] = useState([ ...initialData ]);
    //recuperation de la liste 
    const [beneficiaire] = useState([
        { id: 1, nom: "Steven Buchanan",value: 1, phone: "+2250102030405", address: "Abidjan, Côte d'Ivoire"},
        {id: 2, nom: "Communauté Chrétienne",value: 1, phone: "+2250607080910", address: "Yamoussoukro, Côte d'Ivoire"},
        {id: 3, nom: "Association des jeunes",value: 1, phone: "+2250708091011", address: "San Pedro, Côte d'Ivoire"},
        {id: 4, nom: "Awa Kouadio",value: 1, phone: "+2250908070605", address: "Daloa, Côte d'Ivoire"},
        {id: 5, nom: "ONG Communautaire",value: 1, phone: "+2250123456789", address: "Bouaké, Côte d'Ivoire"}
    ]);

    useEffect(() => {
        const storedActivites = JSON.parse(localStorage.getItem("activite"));
       console.log('storedActivites', storedActivites);
       const mergedActivite = (storedActivites && storedActivites?.length > 0) ? storedActivites : initialData;
       
       //Sauvegarde des activites fusionnes dans le localStorage
       if (storedActivites?.length === 0) {
        localStorage.setItem("activites", JSON.stringify(mergedActivite));
        
       }//Sauvegarde des activites fusionnés dans le localStorage
    }, []);

    // Sauvegarde automatique des activites dans le localStorage
    useEffect(() => {
       if (activites?.length > 0) {
        localStorage.setItem("activites", JSON.stringify(activites));
        
       }
    }, [activites]);

    // Fonction pour ajouter une activite
    const addActivite = (activite) => {
        const newActivite = [{ id: Date.now(), ...activite },...activites];
        setActivites([ newActivite]);
        localStorage.setItem("activites", JSON.stringify([newActivite]));
      };
    
      // Fonction pour mettre à jour une activite
      const editActivite = (id, updatedActivite) => {
      setActivites((prev) => {
          const updatedActivites = prev.map((activite) =>
            activite.id === id ? { ...activite, ...updatedActivite } : activite
          );
          // Sauvegarde des activites fusionnés dans le localStorage
          localStorage.setItem('activites',JSON.stringify(updatedActivites));
          return updatedActivites;
      })
    
      };

      {
        Array.isArray(beneficiaire)? beneficiaire.map((beneficiaire) => {
         <option key={beneficiaire.id} value={beneficiaire.value}>{beneficiaire.nom}</option> 
        }):<option disabled>Chargement....</option>
      }
      
    

      // Fonction pour supprimer une activite
      const deleteActivite=(id)=>{
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
                 const updatedActivites = activites.filter((activite) => activite.id !== id);
                 setBeneficiaires(updatedActivites);
                 localStorage.setItem('beneficiaires', JSON.stringify(updatedActivites));
                 Swal.fire("Supprimé!", "Le activité a été supprimé.", "success");    
             }
             })
         
         };

        //Detail sur l'activite
           const showActivite = (activite)=>{
                Swal.fire({
                    title:`<strong> Détails du bénéficiaire</strong>`,
                    html:`
                        <table style="width:100%; border-collapse: collapse; text-align: left;">
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Nom</th>
                            <td style="border: 1px solid #ddd; padding: 8px;">${activite.motif || "Non renseigné"}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Email</th>
                            <td style="border: 1px solid #ddd; padding: 8px;">${activite.date_rencontre || "Non renseigné"}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Téléphone</th>
                            <td style="border: 1px solid #ddd; padding: 8px;">${activite.date_fin || "Non renseigné"}</td>
                        </tr>
                        <tr>
                            <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Adresse</th>
                            <td style="border: 1px solid #ddd; padding: 8px;">${activite.status || "Non renseigné"}</td>
                        </tr>
                      
                    </table>
                    `,
                    icone:"info",
                    confirmButtonText: "Fermer",
                    width: "600px",
        
        
                })
            };
        
  return {activites,addActivite,editActivite,deleteActivite,showActivite,beneficiaire}
}

export default useActiviteActions

 