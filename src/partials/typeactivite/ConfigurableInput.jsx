import React from 'react';

const ConfigurableInput = (props) => {
    const { label, type, name, placeholder, value, onChange, className, disabled } = props  
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
                disabled={disabled}
            />
        </div>
    )
}

export default ConfigurableInput



    // < div >
    //                                         <label
    //                                             htmlFor="organisationType"
    //                                             className="block text-sm font-medium text-gray-700 mb-1"
    //                                         >
    //                                             Type d'organisation
    //                                         </label>
    //                                         <select
    //                                             className="w-full h-10 px-3 text-base placeholder-gray-600 border border-blue-500 rounded-lg bg-blue-50 text-blue-700 focus:ring-blue-500 focus:border-blue-500"
    //                                             id="organisationType"
    //                                             value={formData.organisationType}
    //                                             name="organisationType"
    //                                             onChange={handleChange}
    //                                         >
    //                                             <option value="text1">Audience</option>
    //                                             <option value="select1">Discussion</option>
    //                                             <option value="text2">Conference</option>
    //                                             <option value="select2">Conference</option>
    //                                             <option value="text">Promesse</option>
    //                                             <option value="select">Dons</option>
    //                                             <option value="select1">Autres</option>
    //                                         </select>
    //                                     </div >