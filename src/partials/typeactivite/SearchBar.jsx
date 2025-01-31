import React, { useState } from "react";

const SearchBar = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);

    const allSuggestions = [
        "React tutorial",
        "JavaScript basics",
        "YouTube clone",
        "React hooks",
        "Building a website",
        "React vs Vue",
        "Frontend development",
        "Web development trends",
        "Best coding practices",
        "React Native tutorial"
    ];

    const handleSearchChange = (e) => {
        const query = e.target.value;
        setSearchQuery(query);

        if (query.length > 0) {
            // Filter suggestions based on query
            const filteredSuggestions = allSuggestions.filter(suggestion =>
                suggestion.toLowerCase().includes(query.toLowerCase())
            );
            setSuggestions(filteredSuggestions);
        } else {
            setSuggestions([]);
        }
    };

    const handleSuggestionClick = (suggestion) => {
        setSearchQuery(suggestion);
        setSuggestions([]); // Hide suggestions after selection
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        // Logique de recherche ici (par exemple, redirection ou appel API)
        console.log("Rechercher:", searchQuery);
    };

    return (
        <div style={styles.searchBarContainer} className="">
            <form onSubmit={handleSearchSubmit} style={styles.form}>
                <input
                    type="text"
                    value={searchQuery}
                    onChange={handleSearchChange}
                    placeholder="Rechercher sur YouTube"
                    style={styles.input}
                    className={`w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none`}

                />
                <button type="submit" style={styles.searchButton}>
                    🔍
                </button>
            </form>

            {suggestions.length > 0 && (
                <div style={styles.suggestionsContainer} className="w-full h-10 px-3 text-black placeholder-gray-600 border" >
                    {suggestions.map((suggestion, index) => (
                        <div
                            key={index}
                            style={styles.suggestionItem}
                            onClick={() => handleSuggestionClick(suggestion)}
                        >
                            {suggestion}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

const styles = {
    searchBarContainer: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        padding: "10px",
    },
    form: {
        display: "flex",
        width: "60%",
        borderRadius: "20px",
        border: "1px solid #ccc",
        padding: "5px 10px",
        backgroundColor: "#fff",
    },
    input: {
        flex: 1,
        border: "none",
        outline: "none",
        fontSize: "16px",
        padding: "8px",
        borderRadius: "20px",
    },
    searchButton: {
        backgroundColor: "#ff0000",
        color: "white",
        border: "none",
        borderRadius: "50%",
        padding: "8px",
        marginLeft: "5px",
        cursor: "pointer",
    },
    suggestionsContainer: {
        width: "60%",
        backgroundColor: "#fff",
        borderRadius: "5px",
        border: "1px solid #ccc",
        marginTop: "10px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    },
    suggestionItem: {
        padding: "8px",
        cursor: "pointer",
        fontSize: "14px",
    },
    suggestionItemHover: {
        backgroundColor: "#f0f0f0",
    },
};

export default SearchBar;
