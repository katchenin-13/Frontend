import { useEffect, useState } from "react";
import Swal from "sweetalert2";

// Données fictives initiales
const initialData = [
     {
            id:1,
            name: "Communaute Internationale des Femmes",
            email: "contact@cif.org",
            phone: "+225 07 12 34 56 78",
            adress: "Top-ranked search platform",
            ville:"Korhogo",
            
        },
        {
            id:2,
            name: "Communauté Musulmane – SOBA",
            email: "info@musulmane-soba.ci",
            phone: "+225 05 98 76 54 32",
            adress: "Leading in OS market",
            ville: "Bouake",
            
        },
        {
            id:3,
            name: "Communauté Chrétienne",
            email: "support@communaute-chretienne.com",
            phone: "+225 01 22 33 44 55",
            adress: "Innovative tech products",
            ville: "Korhogo",
            
        },
        {
            id:4,
            name: "Communauté Juive",
            email: "contact@communaute-juive.net",
            phone: "+225 07 99 88 77 66",
            adress: "Brings all your news into one place",
            ville: "Korhogo",
            
        },
        {
            id:5,
            name: "Quotient Internationale des Femmes",
            email: "info@quotient.co",
            phone: "+225 05 66 55 44 33",
            adress: "Web-based sales doc management",
            ville: "Korhogo",
            
        },
        {
            id:6,
            name: "Association Internationale des Femmes",
            email: "contact@aif.org",
            phone: "+225 01 44 33 22 11",
            adress: "Web-based sales doc management",
            
        },
        {
            id:7,
            name: "Nancy Davolio",
            email: "nancy.davolio@example.com",
            phone: "+225 07 22 11 00 99",
            adress: "Web-based sales doc management",
            ville: "Korhogo",
    
            
        },
        {
            id:1,
            name: "Steven Buchanan",
           
            email: "steven.buchanan@example.com",
            phone: "+225 05 88 77 66 55",
            adress: "Web-based sales doc management",
            ville: "Korhogo",
            
        }
];

export function useContactActions() {
    const [contacts, setContacts] = useState([]);

    // Chargement initial des contacts
    useEffect(() => {
        const storedContacts = JSON.parse(localStorage.getItem("contacts"));
        const mergedContacts = storedContacts.length > 0 ? storedContacts : initialData;
        setContacts(mergedContacts);
        // Sauvegarde des contacts fusionnés dans le localStorage
        if (storedContacts.length === 0) {
            localStorage.setItem("contacts", JSON.stringify(mergedContacts));
        }
    }, []);

    // Sauvegarde automatique des contacts dans le localStorage
    useEffect(() => {
        if (contacts.length > 0) {
            localStorage.setItem("contacts", JSON.stringify(contacts));
        }
    }, [contacts]);

    
    // Fonction pour ajouter un contact
    const addContact = (contact) => {
        const updatedContacts = [{ id: Date.now(), ...contact }, ...contacts];
        setContacts(updatedContacts);
        localStorage.setItem("contacts", JSON.stringify(updatedContacts));
    };

    // Fonction pour modifier un contact
    const editContact = (id, updatedContact) => {
        setContacts((prev) => {
            const updatedContacts = prev.map((contact) =>
                contact.id === id ? { ...contact, ...updatedContact } : contact
            );

            // Mise à jour du localStorage
            localStorage.setItem("contacts", JSON.stringify(updatedContacts));

            return updatedContacts;
        });
    };

    // Fonction pour supprimer un contact
    const deleteContact = (id) => {
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
                setContacts((prev) => prev.filter((contact) => contact.id !== id));
                Swal.fire("Supprimé !", "Le contact a été supprimé.", "success");
            }
        });
    };


    // const showContact = (contact) => {
    //     Swal.fire({
    //         title: contact.name,
    //         html: `
    //         <p><strong>Email:</strong> ${contact.email}</p>
    //         <p><strong>Téléphone:</strong> ${contact.phone}</p>
    //         <p><strong>Adresse:</strong> ${contact.adress || "Non renseigné"}</p>
    //         <p><strong>Ville:</strong> ${contact.ville || "Non renseigné"}</p>
    //     `,
    //         icon: "info",
    //         confirmButtonText: "Fermer"
    //     });
    // };




    const showContact = (contact) => {
        Swal.fire({
            title: `<strong>Détails du Contact</strong>`,
            html: `
            <table style="width:100%; border-collapse: collapse; text-align: left;">
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Nom</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${contact.name || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Email</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${contact.email || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Téléphone</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${contact.phone || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Adresse</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${contact.adress || "Non renseigné"}</td>
                </tr>
                <tr>
                    <th style="border: 1px solid #ddd; padding: 8px; background: #f4f4f4;">Ville</th>
                    <td style="border: 1px solid #ddd; padding: 8px;">${contact.ville || "Non renseigné"}</td>
                </tr>
            </table>
        `,
            icon: "info",
            confirmButtonText: "Fermer",
            width: "600px",
        });
    };

    return {
        contacts,
        addContact,
        editContact,
        showContact,
        deleteContact,
    };
}

export default useContactActions;
