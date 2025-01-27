import React, { useState } from 'react';
import FilterSearch from './FilterSearch';
import ModalButton from './ModalButton'


const [data, setData] = useState([
    { company: "Google", status: "Active", about: "Search Engine", details: "Top-ranked search platform", avatars: [], },
    { company: "Microsoft", status: "Inactive", about: "Software", details: "Leading in OS market", avatars: [], },
    { company: "Apple", status: "Active", about: "Hardware", details: "Innovative tech products", avatars: [], },
    {
        company: "Catalog",
        url: "catalogapp.io",
        status: "Customer",
        about: "Content curating app",
        details: "Brings all your news into one place",
        avatars: [],
    },
    {
        company: "Quotient",
        url: "quotient.co",
        status: "Customer",
        about: "Sales CRM",
        details: "Web-based sales doc management",
        avatars: [],
    },

    {
        company: "Catalog",
        url: "catalogapp.io",
        status: "Customer",
        about: "Content curating app",
        details: "Brings all your news into one place",
        avatars: [],
    },
    {
        company: "Quotient",
        url: "quotient.co",
        status: "Customer",
        about: "Sales CRM",
        details: "Web-based sales doc management",
        avatars: [],
    },
    {
        company: "Catalog",
        url: "catalogapp.io",
        status: "Customer",
        about: "Content curating app",
        details: "Brings all your news into one place",
        avatars: [],
    },
    {
        company: "Quotient",
        url: "quotient.co",
        status: "Customer",
        about: "Sales CRM",
        details: "Web-based sales doc management",
        avatars: [],
    },
]);





function Listeentity() {
    const [dynamicFields, setDynamicFields] = useState([]);
    const [entiteData, setEntiteData] = useState(data);
    const [popoverIndex, setPopoverIndex] = useState(null);
 

    const [libelle, setLibelle] = useState(''); // Champ du formulaire
    const [isEditing, setIsEditing] = useState(false); // Mode édition activé ou non
    const [editIndex, setEditIndex] = useState(null); // Index de l'élément à éditer
    // État pour le texte de recherche
    const [searchText, setSearchText] = useState("");

    // Fonction pour gérer la recherche
    const handleSearchChange = (e) => {
        setSearchText(e.target.value);
    };
    const handleSearchSubmit = () => {
        console.log("Recherche soumise :", searchText); // Effectuez une action ici (exemple : appel API)
    };

    // Filtrage des données
    const filteredData = data.filter(
        (item) =>
            item.company.toLowerCase().includes(searchText.toLowerCase()) ||
            item.about.toLowerCase().includes(searchText.toLowerCase()) ||
            item.details.toLowerCase().includes(searchText.toLowerCase())
    );
    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const rowsPerPage = 3;

    const totalPages = Math.ceil(entiteData.length / rowsPerPage);

    // Get current rows
    const indexOfLastRow = currentPage * rowsPerPage;
    const indexOfFirstRow = indexOfLastRow - rowsPerPage;
    const currentRows = entiteData.slice(indexOfFirstRow, indexOfLastRow);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    // Fonction pour ouvrir/fermer le popover
    const togglePopover = (index) => {
        setPopoverIndex(popoverIndex === index ? null : index);
    };
    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };


    const handleDelete = (index) => {
        setEntiteData(entiteData.filter((_, i) => i !== index));
    };


    return (
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-gray-800 shadow-sm rounded-xl">
            {/* Header */}
            <header className="px-5 py-4 border-b border-gray-200 dark:border-gray-700/60">
                <h2 className="font-semibold text-gray-800 dark:text-gray-100">Liste des entités</h2>
            </header>
            {/* Table des entités avec pagination */}
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
                                <ModalButton/>
                            </div>
                        </div>
                        {/* Table Section */}

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
                                    placeholder="Search"
                                    value={searchText}
                                    onChange={handleSearchChange}
                                    className="block w-full py-1.5 pr-5 text-gray-700 bg-white border border-gray-200 rounded-lg md:w-80 placeholder-gray-400/70 pl-11 rtl:pr-11 rtl:pl-5 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                                />
                            </div>
                            {/* end search */}
                        </div>
                        {/* Tableau filtré */}
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
                                                {filteredData.map((item, index) => (
                                                    <tr key={index}>
                                                        <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                            <div>
                                                                <h2 className="font-medium text-gray-800 dark:text-white">{item.company}</h2>
                                                                <p className="text-sm font-normal text-gray-600 dark:text-gray-400">{item.details}</p>
                                                            </div>
                                                        </td>
                                                        <td className="px-12 py-4 text-sm font-medium whitespace-nowrap">
                                                            <div className="inline px-3 py-1 text-sm font-normal rounded-full text-emerald-500 gap-x-2 bg-emerald-100/60 dark:bg-gray-800">
                                                                {item.status}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <h4 className="text-gray-700 dark:text-gray-200">{item.about}</h4>
                                                        </td>
                                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                                            <button className="px-2 py-2 text-blue-500 transition-colors duration-200 rounded-lg hover:bg-blue-100 dark:hover:bg-blue-700 dark:text-blue-400">
                                                                Edit
                                                            </button>
                                                            <button className="px-2 py-2 text-red-500 transition-colors duration-200 rounded-lg hover:bg-red-100 dark:hover:bg-red-700 dark:text-red-400">
                                                                Delete
                                                            </button>
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
                                <a
                                    href="#"
                                    className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
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
                                    <span>previous</span>
                                </a>


                                <a
                                    href="#"
                                    className="flex items-center justify-center w-1/2 px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md sm:w-auto gap-x-2 hover:bg-gray-100 dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700 dark:hover:bg-gray-800"
                                    onClick={handleNextPage}
                                    disabled={currentPage === totalPages}
                                >
                                    <span>Next</span>
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
                                </a>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>

    );
}

export default Listeentity;
