import React, { useState } from "react";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import beneficiaires from "./data"; // Import des données locales
import "../../css/style.css";

const EmployeeAutoComplete = (props) => {

    const [filteredBeneficiaire] = useState(beneficiaires);
    const { label,placeholder, className } = props  


    const fields = { value: "FirstName" };
    const sortOrder = "Ascending";

    const HeaderTemplate = () => (    
        <div className="head flex items-center justify-between bg-gray-100 text-slate-800 p-2 rounded-md shadow-md">
            <span className="name font-semibold flex-1 text-left">Nom</span>
            <span className="country font-semibold flex-1 text-right">Localité</span>    
        </div>
    );

    const ItemTemplate = (data) => (
        <div className="item flex items-center justify-between bg-white hover:bg-gray-100 text-slate-700 p-3 rounded-lg shadow-sm transition duration-200">
            <span className="name flex-1 text-left font-medium">{data.FirstName}</span>
            <span className="country flex-1 text-right text-gray-500">{data.Country}</span>
        </div>
    );

    return (
        <div className="flex flex-col">
            <h2 className="text-gray-700">{label}</h2>            
            <AutoCompleteComponent
                id="atcelement"
                dataSource={filteredBeneficiaire}
                fields={fields} 
                itemTemplate={ItemTemplate}
                headerTemplate={HeaderTemplate}
                sortOrder={sortOrder}
                className={className}
                placeholder={placeholder}
            />
        </div>
    );

}

export default EmployeeAutoComplete;
