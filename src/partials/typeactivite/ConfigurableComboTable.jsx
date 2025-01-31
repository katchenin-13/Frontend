import React, { useState, useMemo, useCallback } from "react";

const ConfigurableComboTable = ({
    options = [],
    data = {},
    placeholder = "-- Select an Option --",
    searchPlaceholder = "Rechercher...",
    tableClass = "w-full mt-3 border border-gray-300 rounded-lg",
    headerClass = "bg-blue-500 text-white",
    rowClass = "border",
    cellClass = "px-3 py-2 border",
    searchClass = "w-full h-10 px-3 mt-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none",
    selectClass = "w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none",
    noResultMessage = "Aucun résultat trouvé."
}) => {
    const [selectedOption, setSelectedOption] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    const handleSelectChange = useCallback((event) => {
        setSelectedOption(event.target.value);
        setSearchTerm(""); // Reset search when changing option
    }, []);

    const handleSearchChange = useCallback((event) => {
        setSearchTerm(event.target.value.toLowerCase());
    }, []);

    const filteredData = useMemo(() => {
        if (!selectedOption || !data[selectedOption]) return [];
        return data[selectedOption].filter(row =>
            Object.values(row).some(value =>
                value.toString().toLowerCase().includes(searchTerm)
            )
        );
    }, [selectedOption, data, searchTerm]);

    return (
        <div>
            {/* Option Selector */}
            <select
                onChange={handleSelectChange}
                value={selectedOption}
                className={selectClass}
            >
                <option value="">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>

            {/* Search Field */}
            {selectedOption && data[selectedOption] && (
                <input
                    type="text"
                    placeholder={searchPlaceholder}
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className={searchClass}
                />
            )}

            {/* Filtered Table */}
            {selectedOption && filteredData.length > 0 ? (
                <table className={tableClass}>
                    <thead className={headerClass}>
                        <tr>
                            {Object.keys(filteredData[0]).map((key) => (
                                <th key={key} className={cellClass}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-black">
                        {filteredData.map((item, index) => (
                            <tr key={index} className={rowClass}>
                                {Object.values(item).map((value, idx) => (
                                    <td key={idx} className={cellClass}>{value}</td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                selectedOption && (
                    <p className="mt-3 text-red-500">{noResultMessage}</p>
                )
            )}
        </div>
    );
};

export default ConfigurableComboTable;
