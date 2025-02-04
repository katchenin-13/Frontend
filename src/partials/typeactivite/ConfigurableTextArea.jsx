import React from 'react'
const ConfigurableTextArea = (props) => {
    const { label, name, value, desscription, onChange } = props  
    return (
        <div className="flex flex-col col-span-2">
            <label className="block text-gray-700">{label}</label>
            <textarea name={name} value={value} onChange={onChange} className="w-full h-32 p-3 text-black placeholder-gray-600 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none"placeholder={desscription}></textarea>
        </div>
    )
}

export default ConfigurableTextArea

