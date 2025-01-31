import React from 'react'
const ConfigurableTextArea = (props) => {
    const { label, name, value, onChange } = props  
    return (
        <div className="flex flex-col col-span-2">
            <label className="block text-gray-700">{label}</label>
            <textarea name={name} value={value} onChange={onChange} className="border p-2 rounded"></textarea>
        </div>
    )
}

export default ConfigurableTextArea