import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";
import FileUpload from "./FileUpload";
import { useVarieties } from "../context/ApiContext";
import HeaderSection from "./HeaderSection";
import { useState } from "react";
import { useApiManager } from "../hooks/useApiManager";
import Toast from "./Toast";
import DataTable from "./DataTable";

const VKSAForm = () => {
  const { state, dispatch } = useVarieties();
  const [formData, setFormData] = useState({ files: [] });
  const [publishedData, setPublishedData] = useState([]); // ✅ Table + Payload data
  const { createVarietiesItem } = useApiManager();
  const [showToast, setShowToast] = useState(false);

  // ✅ Extract local image URLs
  const getImageUrls = (files) => {
    if (!files || files.length === 0) return [];
    return files.map((file) => URL.createObjectURL(file));
  };

  // ✅ Add single record to table
  const handleAddToTable = () => {
    const newRecord = {
      name: state.inventors || "",
      date: state.vksaDate || "",
      title: state.details || "",
      images: getImageUrls(formData.files),
    };

    // Add record to table data
    setPublishedData((prev) => [...prev, newRecord]);
    // Reset form inputs
    dispatch({ type: "RESET_FIELDS" });
    setFormData({ files: [] });
  };

  // ✅ Publish entire table data as payload
  const handlePublish = () => {
    if (publishedData.length === 0) {
      alert("Please add at least one record before publishing.");
      return;
    }

    const payload = publishedData; // ✅ entire table data

    console.log("📦 Final Payload to API:", payload);

    createVarietiesItem.mutate(payload, {
      onSuccess: () => {
        setShowToast(true);
        // Optional: clear after successful publish
        // setPublishedData([]);
      },
    });
  };

  // ✅ Delete record from table
  const handleDelete = (index) => {
    setPublishedData((prev) => prev.filter((_, i) => i !== index));
  };

  const handleFieldChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "News & Events", link: "/news-events" },
    { label: "Add News & Events" },
  ];

  const title = "VIKSIT KRISHI SANKALP ABHIYAN";

  const columns = [
    { header: "VKSA Name", accessor: "name" },
    { header: "VKSA Date", accessor: "date" },
    { header: "VKSA Title", accessor: "title" },
  ];

  return (
    <div className="mx-auto pl-12 pr-12 py-24 bg-white">
      <HeaderSection breadcrumb={breadcrumb} title={title} description="" />

      {/* ---------- Form Section ---------- */}
      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <InputField
            label="VKSA Name"
            type="text"
            value={state.inventors}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "inventors", value })
            }
            placeholder="Enter Viksit Krishi Sankalp Abhiyan Name"
          />
        </div>
        <div className="w-1/2">
          <InputField
            label="VKSA Date"
            type="date"
            value={state.vksaDate}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "vksaDate", value })
            }
            placeholder="Viksit Krishi Sankalp Abhiyan Date"
          />
        </div>
      </div>

      <TextArea
        label="VKSA Title"
        value={state.details}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "details", value })
        }
        placeholder="Enter Viksit Krishi Sankalp Abhiyan Title"
      />

      <FileUpload
        files={formData.files}
        onChange={(files) => handleFieldChange("files", files)}
      />

      <div className="flex justify-end gap-4 mt-4">
        <Button onClick={handleAddToTable} className="bg-blue-600 hover:bg-blue-700">
          Add to Table
        </Button>
        <Button onClick={handlePublish} className="bg-green-700 hover:bg-green-800">
          Publish All
        </Button>
      </div>

      {/* ✅ Toast message */}
      {showToast && (
        <Toast
          message="VKSA Data Published successfully!"
          type="success"
          duration={5000}
          onClose={() => setShowToast(false)}
        />
      )}

      {/* ---------- Data Table Section ---------- */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4 text-gray-800">
          VKSA Records
        </h2>

        <DataTable
          columns={columns}
          data={publishedData}
          onDelete={handleDelete}
          itemsPerPage={5}
        />
      </div>
    </div>
  );
};

export default VKSAForm;
