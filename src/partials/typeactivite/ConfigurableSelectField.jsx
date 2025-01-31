import React from 'react';
import PropTypes from 'prop-types';

const ConfigurableSelectField = (props) => {
    const { label, name, value, onChange, options } = props;

    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="block text-gray-700">{label}</label>
            <select
                id={name}
                name={name}
                value={value}
                onChange={onChange}
                className="w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"
            >
                {/* Option par défaut */}
                <option value="" disabled>Select an option</option>

                {/* Création des options dynamiquement */}
                {options.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    );
};

// Définition des types de props attendus pour le composant
ConfigurableSelectField.propTypes = {
    label: PropTypes.string.isRequired,         // Le label est requis et doit être une chaîne de caractères
    name: PropTypes.string.isRequired,          // Le nom est requis et doit être une chaîne de caractères
    value: PropTypes.string.isRequired,        // La valeur sélectionnée doit être une chaîne de caractères
    onChange: PropTypes.func.isRequired,       // La fonction de gestion du changement doit être une fonction
    options: PropTypes.arrayOf(PropTypes.string).isRequired,  // options doit être un tableau de chaînes
};

export default ConfigurableSelectField;
