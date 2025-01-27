import React, { useState } from 'react';

const data = [
  { libelle: 'Particulier', nombreentite: 10, datecreation: '10/20/2025' },
  { libelle: 'Organisation', nombreentite: 20, datecreation: '10/20/2025' },
  { libelle: 'Entreprise', nombreentite: 15, datecreation: '11/01/2025' },
  { libelle: 'Gouvernement', nombreentite: 25, datecreation: '11/10/2025' },
  { libelle: 'Association', nombreentite: 8, datecreation: '12/01/2025' },
];

function ListeEntite() {
  const [entiteData, setEntiteData] = useState(data);
  const [libelle, setLibelle] = useState(''); // Champ du formulaire
  const [isEditing, setIsEditing] = useState(false); // Mode édition activé ou non
  const [editIndex, setEditIndex] = useState(null); // Index de l'élément à éditer

  // Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 3;
  const totalPages = Math.ceil(entiteData.length / rowsPerPage);
  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = entiteData.slice(indexOfFirstRow, indexOfLastRow);

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

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isEditing) {
      // Mettre à jour l'élément en cours d'édition
      const updatedData = [...entiteData];
      updatedData[editIndex] = {
        ...updatedData[editIndex],
        libelle,
      };
      setEntiteData(updatedData);
      setIsEditing(false); // Quitter le mode édition
    } else {
      // Ajouter un nouvel élément
      const newEntite = {
        libelle,
        nombreentite: entiteData.length + 1,
        datecreation: new Date().toLocaleDateString(),
      };
      setEntiteData([...entiteData, newEntite]);
    }
    setLibelle(''); // Réinitialiser le champ
    setEditIndex(null); // Réinitialiser l'index
  };

  const handleEdit = (index) => {
    const globalIndex = indexOfFirstRow + index; // Récupérer l'index global
    const entiteToEdit = entiteData[globalIndex];
    setLibelle(entiteToEdit.libelle); // Charger le libellé dans le formulaire
    setIsEditing(true); // Activer le mode édition
    setEditIndex(globalIndex); // Sauvegarder l'index de l'élément
  };

  const handleDelete = (index) => {
    const globalIndex = indexOfFirstRow + index; // Récupérer l'index global
    setEntiteData(entiteData.filter((_, i) => i !== globalIndex));
  };

  return (
    <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
      {/* Header */}
      <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
        <h2 className="font-semibold text-gray-800 dark:text-gray-100">Liste des entités</h2>
      </header>

      {/* Formulaire d'ajout/édition */}
      <form onSubmit={handleSubmit} className="p-4">
        <div className="flex items-center gap-4">
          <input
            type="text"
            name="libelle"
            value={libelle}
            onChange={(e) => setLibelle(e.target.value)}
            placeholder="Entrez le libellé"
            className="p-2 border border-gray-300 rounded-md w-full"
            required
          />
          <button
            type="submit"
            className={`px-4 py-2 rounded-md text-white ${isEditing ? 'bg-yellow-500' : 'bg-blue-500'
              }`}
          >
            {isEditing ? 'Mettre à jour' : 'Ajouter'}
          </button>
        </div>
      </form>

      {/* Tableau avec pagination */}
      <div className="overflow-x-auto">
        <table className="w-full text-left table-auto text-sm text-gray-700">
          <thead className="bg-sky-600 text-white">
            <tr>
              <th className="p-4">Libellé</th>
              <th className="p-4">Nombre d'entités</th>
              <th className="p-4">Date de création</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentRows.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100">
                <td className="p-4">{item.libelle}</td>
                <td className="p-4">{item.nombreentite}</td>
                <td className="p-4">{item.datecreation}</td>
                <td className="p-4">
                  <button
                    className="text-blue-600 hover:underline mr-2"
                    onClick={() => handleEdit(index)}
                  >
                    Modifier
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(index)}
                  >
                    Supprimer
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
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
  );
}

export default ListeEntite;
