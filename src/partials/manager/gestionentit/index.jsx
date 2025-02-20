import React, { useState } from "react";
import FilterSearch from "./FilterSearch";
import ModalButton from "./ModalButton";
import ConfigurableModal from "./ConfigurableModal"

const initialData = [
    { company: "Google", status: "Active", about: "Search Engine", details: "Top-ranked search platform", avatars: [] },
    { company: "Microsoft", status: "Inactive", about: "Software", details: "Leading in OS market", avatars: [] },
    { company: "Apple", status: "Active", about: "Hardware", details: "Innovative tech products", avatars: [] },
    { company: "Catalog", url: "catalogapp.io", status: "Customer", about: "Content curating app", details: "Brings all your news into one place", avatars: [] },
    { company: "Quotient", url: "quotient.co", status: "Customer", about: "Sales CRM", details: "Web-based sales doc management", avatars: [] },
];

function ListeEntity() {
    const [data, setData] = useState(initialData);
    const [searchText, setSearchText] = useState("");
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 3;

    const [selectedEntity, setSelectedEntity] = useState(null); // Gérer l'élément sélectionné
    const [isModalOpen, setIsModalOpen] = useState(false);



    const openModal = () => {
        setIsModalOpen(true);
    };

    // Fonction pour fermer le modal
    const closeModal = () => {
        setIsModalOpen(false); // Assurez-vous que l'état est correctement réinitialisé
    };
    // Exemple d'actions pour les boutons
    const handleAccept = () => {
        console.log('Accepté');
        closeModal();
    };

    const handleDecline = () => {
        console.log('Refusé');
        closeModal();
    };
    const handleEditClick = (entity) => {
        setSelectedEntity(entity); // Définir l'entité sélectionnée
        setIsModalOpen(true); // Ouvrir le modal
    };
    // Gestion de la recherche
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
        setCurrentPage(1); // Reset page to 1 after a search
    };

    const filteredData = data.filter(
        (item) =>
            item.company.toLowerCase().includes(searchText.toLowerCase()) ||
            item.about.toLowerCase().includes(searchText.toLowerCase()) ||
            item.details.toLowerCase().includes(searchText.toLowerCase())
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredData.length / rowsPerPage);
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleDelete = (index) => {
        const updatedData = [...data];
        updatedData.splice(indexOfFirstRow + index, 1); // Adjust index for current page
        setData(updatedData);
    };

    return (
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
            {/* Header */}
            <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Liste des entités</h2>
            </header>

           

            {/* Table */}
            <div className="overflow-x-auto">
                <div className="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl">
                    <section className="container px-4 mx-auto">
                        {/* Header Section */}
                        <div className="sm:flex sm:items-center sm:justify-between">
                            <div>
                                <div className="flex items-center gap-x-3">
                                    <h2 className="text-lg font-medium text-gray-800 dark:text-white">Nombre</h2>
                                    <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full dark:bg-gray-800 dark:text-blue-400">
                                        240 Activites
                                    </span>
                                </div>

                            </div>
                            <div className="flex items-center mt-4 gap-x-3">
                                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 sm:w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700">
                                    <svg
                                        width="20"
                                        height="20"
                                        viewBox="0 0 20 20"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <g clipPath="url(#clip0_3098_154395)">
                                            <path
                                                d="M13.3333 13.3332L9.99997 9.9999M9.99997 9.9999L6.66663 13.3332M9.99997 9.9999V17.4999M16.9916 15.3249C17.8044 14.8818 18.4465 14.1806 18.8165 13.3321C19.1866 12.4835 19.2635 11.5359 19.0351 10.6388C18.8068 9.7417 18.2862 8.94616 17.5555 8.37778C16.8248 7.80939 15.9257 7.50052 15 7.4999H13.95C13.6977 6.52427 13.2276 5.61852 12.5749 4.85073C11.9222 4.08295 11.104 3.47311 10.1817 3.06708C9.25943 2.66104 8.25709 2.46937 7.25006 2.50647C6.24304 2.54358 5.25752 2.80849 4.36761 3.28129C3.47771 3.7541 2.70656 4.42249 2.11215 5.23622C1.51774 6.04996 1.11554 6.98785 0.935783 7.9794C0.756025 8.97095 0.803388 9.99035 1.07431 10.961C1.34523 11.9316 1.83267 12.8281 2.49997 13.5832"
                                                stroke="currentColor"
                                                strokeWidth="1.67"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_3098_154395">
                                                <rect width="20" height="20" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span>Import</span>
                                </button>
                                
                                <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
                                    onClick={openModal}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>
                                    <span>Nouveau</span>
                            </button>
                               

                                {isModalOpen && (
                                    <ConfigurableModal
                                        title="Création d'une entité"
                                        isOpenInitially={isModalOpen}
                                        acceptButtonText="Confirmer"
                                        declineButtonText="Annuler"
                                        onAccept={handleAccept}
                                        onDecline={handleDecline}
                                        modalWidth="max-w-4xl"
                                        modalHeight="max-h-full"
                                        modalStyles={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
                                        entity={{ name: 'Exemple Entité' }}
                                        onClose={closeModal} // Ferme le modal lorsque l'utilisateur clique en dehors
                                    />
                                )}
                                
                              
                            </div>


                           

                        </div>
                        {/* Add Filter or Search Here */}

                        <div className="mt-6 md:flex md:items-center md:justify-between">
                            {/* Button Group */}
                            <div className="inline-flex overflow-hidden bg-white border divide-x rounded-lg dark:bg-gray-900 rtl:flex-row-reverse dark:border-gray-700 dark:divide-gray-700">
                                <button
                                    className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 bg-gray-100 sm:text-sm dark:bg-gray-800 dark:text-gray-300"
                                >
                                    View all
                                </button>

                                <button
                                    className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                                >
                                    Monitored
                                </button>

                                <button
                                    className="px-5 py-2 text-xs font-medium text-gray-600 transition-colors duration-200 sm:text-sm dark:hover:bg-gray-800 dark:text-gray-300 hover:bg-gray-100"
                                >
                                    Unmonitored
                                </button>
                            </div>

                            {/* Search Input */}
                            <div className="relative flex items-center mt-4 md:mt-0">
                                <span className="absolute">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 mx-3 text-gray-400 dark:text-gray-600"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                        />
                                    </svg>
                                </span>

                                <input
                                    type="text"
                                    placeholder="Rechercher..."
                                    value={searchText}
                                    onChange={handleSearchChange}
                                    className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            {/* end search */}
                        </div>
                        {/* Table Section */}
                        <div className="flex flex-col mt-6">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                                    <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                                            <thead className="bg-gray-50 dark:bg-gray-800">
                                                <tr>
                                                    <th className="py-3.5 px-4 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                                                        Company
                                                    </th>
                                                    <th className="px-12 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                                                        Status
                                                    </th>
                                                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                                                        About
                                                    </th>
                                                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500 dark:text-gray-400">
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                                {currentRows.map((item, index) => (
                                                    <tr key={index}>
                                                        {/* Colonne Company */}
                                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                            <div>
                                                                <h2 className="font-medium text-gray-800 dark:text-white">{item.company}</h2>
                                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{item.url}</p>
                                                            </div>
                                                        </td>

                                                        {/* Colonne Status */}
                                                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                {item.status}
                                                            </div>
                                                        </td>

                                                        {/* Colonne About */}
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div>
                                                                <h4 className="text-gray-700 dark:text-gray-200">{item.about}</h4>
                                                                <p className="text-gray-500 dark:text-gray-400">{item.details}</p>
                                                            </div>
                                                        </td>

                                                        {/* Colonne Action */}
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <div className="flex items-center space-x-2">
                                                                {/* Bouton Edit */}
                                                                <button
                                                                    className="px-2 py-2 text-blue-500 transition-colors duration-200 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-blue-400"
                                                                    title="Edit"
                                                                    onClick={() => handleEditClick(initialData)}

                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M16.862 3.487a2.25 2.25 0 013.182 3.182l-9.36 9.36a4.5 4.5 0 01-1.914 1.127l-4.036 1.009a.375.375 0 01-.462-.462l1.009-4.035a4.5 4.5 0 011.127-1.914l9.36-9.36z"
                                                                        />
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M19.5 12.75V19.5a2.25 2.25 0 01-2.25 2.25h-12A2.25 2.25 0 013 19.5v-12A2.25 2.25 0 015.25 5.25h6.75"
                                                                        />
                                                                    </svg>
                                                                </button>

                                                                {/* Bouton Delete */}
                                                                <button
                                                                    className="px-2 py-2 text-red-500 transition-colors duration-200 rounded-lg hover:bg-red-100 dark:hover:bg-red-700 dark:text-red-400"
                                                                    title="Delete"
                                                                    onClick={() => handleDelete(index)}
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M6 18L18 6M6 6l12 12"
                                                                        />
                                                                    </svg>
                                                                </button>

                                                                {/* Bouton View */}
                                                                <button
                                                                    className="px-2 py-2 text-green-500 transition-colors duration-200 rounded-lg hover:bg-green-100 dark:hover:bg-green-700 dark:text-green-400"
                                                                    title="View"
                                                                >
                                                                    <svg
                                                                        xmlns="http://www.w3.org/2000/svg"
                                                                        fill="none"
                                                                        viewBox="0 0 24 24"
                                                                        strokeWidth="1.5"
                                                                        stroke="currentColor"
                                                                        className="w-5 h-5"
                                                                    >
                                                                        <path
                                                                            strokeLinecap="round"
                                                                            strokeLinejoin="round"
                                                                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0zm-3 0a6 6 0 11-12 0 6 6 0 0112 0z"
                                                                        />
                                                                    </svg>
                                                                </button>
                                                            </div>
                                                        </td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-6 sm:flex sm:items-center sm:justify-between">
                            <div className="text-sm text-gray-500 dark:text-gray-400">
                                Page <span className="font-medium text-gray-700 dark:text-gray-100">{currentPage} sur {totalPages}</span>


                            </div>
                            <div className="flex items-center mt-4 gap-x-4 sm:mt-0">
                                <button
                                    onClick={handlePreviousPage}
                                    disabled={currentPage === 1}
                                    className={`px-4 py-2 border rounded-lg ${currentPage === 1 ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 rtl:-scale-x-100"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                                            onClick={handlePreviousPage}
                                            disabled={currentPage === 1}
                                        />
                                    </svg>
                                </button>

                                <button
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                    className={`px-4 py-2 border rounded-lg ${currentPage === totalPages ? "bg-gray-300" : "bg-blue-500 text-white"}`}
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth="1.5"
                                        stroke="currentColor"
                                        className="w-5 h-5 rtl:-scale-x-100"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                        />
                                    </svg>
                                </button>
                            </div>
                           
                        </div>
                </section>
                </div>
            </div>

            {/* Pagination */}
            
        </div>
    );
}

export default ListeEntity;
