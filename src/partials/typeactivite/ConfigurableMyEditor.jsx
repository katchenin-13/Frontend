import { Editor } from "@tinymce/tinymce-react";

const ConfigurableMyEditor = ({ value, onChange }) => {
    return (
        <div className="flex flex-col col-span-2">
        <Editor
            apiKey="your-tinymce-api-key"
            initialValue={value}
            init={{
                height: 300,
                menubar: false,
                plugins: "advlist autolink lists link image charmap print preview anchor",
                toolbar: "undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat",
            }}
            onEditorChange={(content) => onChange({ target: { name: "editor", value: content } })}
        />
        </div>
    );
};
export default ConfigurableMyEditor;
