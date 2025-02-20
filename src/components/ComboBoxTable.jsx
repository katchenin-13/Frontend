import React, { useState } from "react";

const ComboBoxTable = ({ options = [], data = {} }) => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedOption, setSelectedOption] = useState(null);
    const [isDropdownOpen, setIsDropdownOpen] = useState();

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value.toLowerCase());
        setIsDropdownOpen(true); // Opens the dropdown when typing
    };

    const handleSelectOption = (option) => {
        setSelectedOption(option);
        setSearchTerm(option.label); // Show the selected option in the input
        setIsDropdownOpen(false); // Close the dropdown after selection
    };

    const filteredOptions = options.filter(option =>
        option.label.toLowerCase().includes(searchTerm)
    );

    const handleSearchSelect = () => {
        // Create a new option for the search term if it doesn't match any options
        if (searchTerm && !filteredOptions.some(option => option.label.toLowerCase() === searchTerm)) {
            const newOption = { label: searchTerm, value: searchTerm };
            handleSelectOption(newOption);
        }
    };

    return (
        <div className="relative w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none">
            {/* Search field with combo-box */}
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onFocus={() => setIsDropdownOpen(true)}
                placeholder="Sélectionner une catégorie"
                className="w-full h-10 px-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            {/* Dropdown list with filtered options */}
            {isDropdownOpen && (filteredOptions.length > 0 || searchTerm) && (
                <ul className=" z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg">
                    {filteredOptions.map((option) => (
                        <li
                            key={option.value}
                            onClick={() => handleSelectOption(option)}
                            className="px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                        >
                            {option.label}
                        </li>
                    ))}
                    {/* Option for the search term if not found in existing options */}
                    {searchTerm && !filteredOptions.some(option => option.label.toLowerCase() === searchTerm) && (
                        <li
                            onClick={handleSearchSelect}
                            className="px-3 py-2 cursor-pointer hover:bg-blue-500 hover:text-white font-bold text-gray-700"
                        >
                            Add "{searchTerm}"
                        </li>
                    )}
                </ul>
            )}

            {/* Displaying details of the selected option */}
            {selectedOption && data[selectedOption.value] && (
                <table className="w-full mt-3 border border-gray-300 rounded-lg">
                    <thead className="bg-blue-500 text-white">
                        <tr>
                            {Object.keys(data[selectedOption.value][0]).map((key) => (
                                <th key={key} className="px-3 py-2 border">
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data[selectedOption.value].map((item, index) => (
                            <tr key={index} className="border">
                                {Object.values(item).map((value, idx) => (
                                    <td key={idx} className="px-3 py-2 border">{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </div>
    );
};

export default ComboBoxTable;
