import React, { useState } from 'react';

const data = [
  { libelle: 'ONG', nombrebeneficiaire: 10, datecreation: '10/20/2025' },
  { libelle: 'ASSOCIATION', nombrebeneficiaire: 20, datecreation: '10/20/2025' },
  { libelle: 'COMMUNAUTE', nombrebeneficiaire: 15, datecreation: '11/01/2025' },
  { libelle: 'ORGANISATION', nombrebeneficiaire: 25, datecreation: '11/10/2025' },
  { libelle: 'PARTICULIER', nombrebeneficiaire: 8, datecreation: '12/01/2025' },  
];

function ListeTypeBeneficiaire() {
  const [dynamicFields, setDynamicFields] = useState([]);
  const [entiteData, setEntiteData] = useState(data);

 
  const [organisationFields, setOrganisationFields] = useState([""]);
// Index de l'élément à éditer

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3; 
  
  const totalPages = Math.ceil(entiteData.length / rowsPerPage);

  // Get current rows
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = entiteData.slice(indexOfFirstRow, indexOfLastRow);

  const [selectedOption, setSelectedOption] = useState("");
  const [selectedOptionPro, setSelectedOptionPro] = useState("");
  // Handlers for Organisation Fields
  const addOrganisationField = () => {
    setOrganisationFields([...organisationFields, ""]);
  };

  const removeOrganisationField = (index) => {
    const updatedFields = organisationFields.filter((_, i) => i !== index);
    setOrganisationFields(updatedFields);
  };


  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleFieldChange = (id, field, value) => {
    setDynamicFields((prevFields) =>
      prevFields.map((fieldItem) =>
        fieldItem.id === id ? { ...fieldItem, [field]: value } : fieldItem
      )
    );
  };

  const handleAddEntite = (e) => {
    e.preventDefault();
    const libelle = e.target.libelle.value;
    const newEntite = {
      libelle,
      nombrebeneficiaire: dynamicFields.length,
      datecreation: new Date().toLocaleDateString(),
    };
    setEntiteData([...entiteData, newEntite]);
    setDynamicFields([]); // Reset dynamic fields after submission
    e.target.reset();
  };



   

    // const handleChange = (event) => {
    //   setSelectedOption(event.target.value);
  
    // }

    // const handleChangePro = (event) =>{
    //   setSelectedOptionPro(event.target.value);
    // }

  const handleChange = (event, setOption) => {
    setOption(event.target.value);
  };

  return (
    <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      {/* Header */}
      <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Liste des bénéficiaires</h2>
      </header>
      {/* Formulaire pour ajouter une entité */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
        <div>
          {/* <h3 className="font-semibold text-gray-800 dark:text-gray-100 mb-4">Creation une entité</h3> */}
          <form onSubmit={handleAddEntite} className="space-y-4 text-gray-700">
            <div className="flex flex-wrap">
              <div className="w-full">
                <label className="block mb-1" htmlFor="libelle">
                  Libellé du type
                </label>
                <input
                  className="w-full h-10 px-3 text-base placeholder-gray-600 border rounded-lg focus:shadow-outline"
                  type="text"
                  id="libelle"
                  placeholder="Entrez un libellé"
                  required
                />
              </div>
            </div>
            {/* /**Section assignation */ }
            <div className="space-y-4">
              {/* Section Assignable */}
              <div className="flex items-center space-x-4 border border-gray-300 rounded-lg px-3 py-2 w-full">
                <span className="text-black">Assignable</span>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="assignable"
                    value="oui"
                    checked={selectedOption === "oui"}
                    onChange={(e) => handleChange(e, setSelectedOption)}
                    className="focus:ring-green-500 checked:bg-green-500 checked:border-green-500"
                  />
                  <span>Oui</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="assignable"
                    value="non"
                    checked={selectedOption === "non"}
                    onChange={(e) => handleChange(e, setSelectedOption)}
                    className="focus:ring-red-500 checked:bg-red-500 checked:border-red-500"
                  />
                  <span>Non</span>
                </label>
              </div>

              {/* Section Programmable */}
              <div className="flex items-center space-x-4 border border-gray-300 rounded-lg px-3 py-2 w-full">
                <span className="text-black">Programable</span>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="programable"
                    value="oui"
                    checked={selectedOptionPro === "oui"}
                    onChange={(e) => handleChange(e, setSelectedOptionPro)}
                    className="focus:ring-green-500 checked:bg-green-500 checked:border-green-500"
                  />
                  <span>Oui</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="programable"
                    value="non"
                    checked={selectedOptionPro === "non"}
                    onChange={(e) => handleChange(e, setSelectedOptionPro)}
                    className="focus:ring-red-500 checked:bg-red-500 checked:border-red-500"
                  />
                  <span>Non</span>
                </label>
              </div>
            </div>


            <table className="min-w-full table-auto border-collapse">
              <thead className="bg-gray-500 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Nom du champ</th>
                  <th className="px-4 py-2 text-left">Type de champ</th>
                  <th className="px-4 py-2 text-left">Requis</th>
                  <th className="px-4 py-2 text-left"><button
                    type="button"
                    onClick={addOrganisationField}
                    className="bg-blue-500 text-white p-2 rounded "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 mr-2"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4v16m8-8H4"
                      />
                    </svg>
                  </button></th>
                </tr>
              </thead>
              <tbody>
                {organisationFields.map((field, index) => (
                  <tr key={field.id} className="border-b">
                    <td className="px-4 py-2">
                      <input
                        className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        type="text"
                        value={field.name}
                        onChange={(e) =>
                          handleFieldChange(field.id, "name", e.target.value)
                        }
                        placeholder="Nom du champ"
                        required
                      />
                    </td>
                    <td className="px-4 py-2">
                      <select
                        className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
                        value={field.type}
                        onChange={(e) =>
                          handleFieldChange(field.id, "type", e.target.value)
                        }
                      >
                        <option value="text">Texte</option>
                        <option value="select">Select</option>
                        <option value="date">Date</option>
                        <option value="number">Nombre</option>
                      </select>
                    </td>
                    <td className="px-4 py-2">
                      <div className="flex items-center w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none">
                        <label htmlFor={`required-${field.id}`} className="mr-2">
                          Requis
                        </label>
                        <input
                          type="checkbox"
                          id={`required-${field.id}`}
                          checked={field.required}
                          onChange={(e) =>
                            handleFieldChange(
                              field.id,
                              "required",
                              e.target.checked
                            )
                          }
                        />
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <button
                        onClick={() => removeOrganisationField(index)}
                        className="bg-red-500 text-white p-2 rounded"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

           
           
            <button
              type="submit"
              className="w-full py-2 px-4 bg-sky-600 text-white rounded-md shadow-sm hover:bg-sky-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
            >
              Ajouter
            </button>
          </form>
        </div>

        {/* Table des entités avec pagination */}
        <div className="overflow-x-auto">
          <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl">
            
            <div className="p-4 flex justify-between">
              <h5 className="text-lg font-semibold text-gray-800">Liste des bénéficiaires</h5>

              <div class="ml-3">
                <div class="w-full max-w-sm min-w-[100px] relative">
                  <div class="relative">
                    <input
                      class="bg-white w-full pr-11 h-10 pl-3 py-2 bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-black rounded transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-400 shadow-sm focus:shadow-md"
                      placeholder="Search for invoice..."
                    />
                    <button
                      class="absolute h-8 w-8 right-1 top-1 my-auto px-2 flex items-center bg-white rounded "
                      type="button"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="w-8 h-8 text-slate-600">
                        <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="overflow-scroll">
              <table className="w-full text-left table-auto text-sm text-gray-700">
                <thead className="bg-sky-600 text-white">
                  <tr>
                    <th className="p-4">Libellé</th>
                    <th className="p-4">Nombre de bénéficiaires</th>
                    <th className="p-4">Date de création</th>
                    <th className="p-4">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {currentRows.map((item, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="p-4">{item.libelle}</td>
                      <td className="p-4">{item.nombrebeneficiaire}</td>
                      <td className="p-4">{item.datecreation}</td>
                      <td className="p-4 flex">
                        <button
                          className="text-blue-600 hover:underline mr-4"
                          onClick={() => alert('Fonctionnalité Edit à implémenter')}
                        >
                          Edit
                        </button>
                        <button
                          className="text-red-600 hover:underline"
                          onClick={() => handleDelete(index)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-between items-center p-4 border-t border-gray-200 dark:border-gray-700">
              <button
                className="px-4 py-2 text-white bg-gray-600 rounded-md disabled:opacity-50"
                onClick={handlePreviousPage}
                disabled={currentPage === 1}
              >
                Précédent
              </button>
              <span className="text-gray-600">
                Page {currentPage} sur {totalPages}
              </span>
              <button
                className="px-4 py-2 text-white bg-gray-600 rounded-md disabled:opacity-50"
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                Suivant
              </button>
            </div>
          </div>
          </div>
      </div>
    </div>
  );
}

export default ListeTypeBeneficiaire;
