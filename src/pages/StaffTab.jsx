import { useState } from "react";
import InputField from "../components/InputField";
import FileUpload from "../components/FileUpload";
import TextArea from "../components/TextArea";
import Button from "../components/Button";


export default function StaffTab() {
  const [formData, setFormData] = useState({
    name: "",
    image: null,
    description: "",
  });

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    console.log("Staff Data:", formData);
    alert("Staff data submitted!");
    setFormData({ name: "", image: null, description: "" });
  };

  return (
    <div>
      <InputField
        label="Staff Name"
        value={formData.name}
        onChange={(value) => handleFieldChange("name", value)}
        placeholder="Enter staff name"
      />

      <FileUpload
        files={formData.image}
        onChange={(files) => handleFieldChange("image", files)}
      />

      <TextArea
        label="Description"
        value={formData.description}
        onChange={(value) => handleFieldChange("description", value)}
        placeholder="Enter description"
      />

      <div className="flex justify-end">
        <Button onClick={handleSubmit} className="mt-4">
          Save Staff
        </Button>
      </div>
    </div>
  );
}
