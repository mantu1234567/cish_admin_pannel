import HeaderSection from "../components/HeaderSection";
import InputField from "../components/InputField";
import FileUpload from "../components/FileUpload";
import SelectDropdown from "../components/SelectDropdown";
import { useVarieties } from "../context/ApiContext";
import Button from "../components/Button";
import { useApiManager } from "../hooks/useApiManager";
import { useState } from "react";

const SubStaff = () => {
  const { state, dispatch } = useVarieties();
  const { createStaffItem } = useApiManager();
  const [formData, setFormData] = useState([]);

  const handlePublish = () => {
    const payload = { staff: state };

    createStaffItem.mutate(payload, {
      onSuccess: () => {
        dispatch({ type: "RESET_FIELDS" });
        alert("Department staff data published successfully!");
      },
      onError: (error) => {
        console.error(error);
        dispatch({ type: "RESET_FIELDS" });
        alert("Department staff data publish failed!");
      },
    });
  };
const handleFieldChange = (field, value) => {
    console.log(field, value);
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };
  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Staff", link: "/staff" },
    { label: "Add Staff" },
  ];

  const title = "ADD NEW DEPARTMENT STAFF";
  const description =
    "Upload staff details including designation, photo and name. The first uploaded photo will be used as a profile thumbnail.";

  return (
    <div className="mx-auto pl-12 pr-12 pb-24 bg-white">
      <HeaderSection
        breadcrumb={breadcrumb}
        title={title}
        description={description}
      />

      {/* Staff Role / Department */}
      <SelectDropdown
        label="Department"
        value={state.departement}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "departement", value })
        }
        options={[
          { label: "Scientific Staff", value: "scientific" },
          { label: "Technical Staff", value: "technical" },
          { label: "Skill Supporting Staff", value: "supporting" },
          { label: "Administrative Staff", value: "administrative" },
        ]}
      />

      {/* Staff Photo */}
      <FileUpload
       files={formData.files}
        onChange={(files) => handleFieldChange("files", files)}
      />

      {/* Staff Name */}
      <InputField
        label="Departement Name"
        value={state.departementName}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "departementName", value })
        }
        placeholder="Enter staff member's full name"
      />

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handlePublish} className="mt-4">
          Publish
        </Button>
      </div>
    </div>
  );
};

export default SubStaff;
