import React from 'react';

const ConfigurableInput = (props) => {
    const { label, type, name, placeholder, value, onChange, className } = props  
    return (
        <div>
            <label className="block text-gray-700">{label}</label>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                className={`w-full h-10 px-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none ${className}`}
            />
        </div>
    )
}

export default ConfigurableInput