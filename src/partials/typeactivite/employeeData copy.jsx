import React from "react";
import { DataManager, ODataV4Adaptor, Query } from "@syncfusion/ej2-data";
import { AutoCompleteComponent } from "@syncfusion/ej2-react-dropdowns";
import "../../css/style.css";

const employeeData = new DataManager({
    adaptor: new ODataV4Adaptor(),
    crossDomain: true,
    url: "https://services.odata.org/V4/Northwind/Northwind.svc/",
});

// Définition de la requête pour récupérer les employés
const query = new Query()
    .from("Employees")
    .select(["FirstName", "City", "EmployeeID"])
    .take(6);

// Configuration des champs de l'AutoComplete
const fields = { value: "FirstName" };

// Ordre de tri des résultats
const sortOrder = "Ascending";

// Template pour l'en-tête
const HeaderTemplate = () => (
    <span className="head">
        <span className="name">Name</span>
        <span className="city">City</span>
    </span>
);

// Template pour chaque élément de la liste
const ItemTemplate = (data) => (
    <span className="item">
        <span className="name">{data.FirstName}</span>
        <span className="city">{data.City}</span>
    </span>
);

const EmployeeAutoComplete = () => {
    return (
        <AutoCompleteComponent
            id="atcelement"
            query={query}
            dataSource={employeeData}
            sortOrder={sortOrder}
            itemTemplate={ItemTemplate}
            headerTemplate={HeaderTemplate}
            fields={fields}
            placeholder="Find an employee"
        />
    );
};

export default EmployeeAutoComplete;
