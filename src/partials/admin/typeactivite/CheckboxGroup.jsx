import { useState } from "react";

const CheckboxGroup = ({ label, fieldId, handleFieldChange }) => {
    const [selectedValue, setSelectedValue] = useState(null);

    const handleChange = (value) => {
        setSelectedValue(value);
        handleFieldChange(fieldId, "required", value);
    };

    return (
        <div className="flex items-center space-x-4 border border-gray-300 rounded-lg px-3 py-2 w-full">
            <span className="text-black">{label}</span>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    name={`required-${fieldId}`}
                    value="oui"
                    checked={selectedValue === "oui"}
                    onChange={() => handleChange("oui")}
                    className="focus:ring-blue-500"
                />
                <span>Oui</span>
            </label>

            <label className="flex items-center space-x-2">
                <input
                    type="radio"
                    name={`required-${fieldId}`}
                    value="non"
                    checked={selectedValue === "non"}
                    onChange={() => handleChange("non")}
                    className="focus:ring-blue-500"
                />
                <span>Non</span>
            </label>
        </div>
    );
};

export default function App() {
  
    return (
        <div className="flex flex-col space-y-4">
            <CheckboxGroup label="Requis 1" fieldId="field1" handleFieldChange={handleFieldChange} />
            <CheckboxGroup label="Requis 2" fieldId="field2" handleFieldChange={handleFieldChange} />
            <CheckboxGroup label="Requis 3" fieldId="field3" handleFieldChange={handleFieldChange} />
        </div>
    );
}
