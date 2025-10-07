import HeaderSection from "../components/HeaderSection";
import InputField from "../components/InputField";
import FileUpload from "../components/FileUpload";
import TextArea from "../components/TextArea";
import { useVarieties } from "../context/ApiContext";
import Button from "../components/Button";
import { useApiManager } from "../hooks/useApiManager";
import Toast from "../components/Toast";
import { useState } from "react";

const StaffMembers = () => {
  const { state, dispatch } = useVarieties();
  const { createStaffItem } = useApiManager();
  const [showToast, setShowToast] = useState(false);

  const handlePublish = () => {
    setShowToast(true);
    const payload = { staff: state };

    createStaffItem.mutate(payload, {
      onSuccess: () => {
        dispatch({ type: "RESET_FIELDS" });
        alert("Staff data published successfully!");
      },
      // onError: (error) => {
      //   console.error(error);
      //   dispatch({ type: "RESET_FIELDS" });
      //   alert("Staff data publish failed!");
      // },
    });
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Staff", link: "/staff" },
    { label: "Add Staff Member" },
  ];

  const title = "NEW STAFF MEMBER";
  const description = "";

  return (
    <div className="mx-auto pl-12 pr-12 pb-24 bg-white">
      <HeaderSection
        breadcrumb={breadcrumb}
        title={title}
        description={description}
      />
      <div className="flex flex-row gap-4">
        {/* Full Name */}
        <div className="w-1/2">
          <InputField
            label="Full Name"
            value={state.fullName}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "fullName", value })
            }
            placeholder="Enter full name (e.g., Dr. Anju Bajpai)"
          />
        </div>
        {/* Designation */}
        <div className="w-1/2">
          <InputField
            label="Designation"
            value={state.designation}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "designation", value })
            }
            placeholder="Enter designation (e.g., Principal Scientist)"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        {/* ICAR Email */}
        <div className="w-1/2">
          <InputField
            label="ICAR Email"
            type="email"
            value={state.icarEmail}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "icarEmail", value })
            }
            placeholder="Enter ICAR official email"
          />
        </div>
        <div className="w-1/2">
          {/* Alternate Email */}
          <InputField
            label="Alternate Email"
            type="email"
            value={state.alternateEmail}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "alternateEmail", value })
            }
            placeholder="Enter alternate email"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          {/* Specialization */}
          <InputField
            label="Specialization"
            value={state.specialization}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "specialization", value })
            }
            placeholder="Enter specialization (e.g., Fruit Science)"
          />
        </div>
        <div className="w-1/2">
          {/* Joining Date */}
          <InputField
            label="Joining Date"
            type="date"
            value={state.joiningDate}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "joiningDate", value })
            }
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          {/* M.Sc. From */}
          <InputField
            label="M.Sc. From"
            value={state.mscFrom}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "mscFrom", value })
            }
            placeholder="Enter University/Institute"
          />
        </div>
        <div className="w-1/2">
          {/* Ph.D. From */}
          <InputField
            label="Ph.D. From"
            value={state.phdFrom}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "phdFrom", value })
            }
            placeholder="Enter University/Institute"
          />
        </div>
      </div>
      {/* Staff Image */}
      <FileUpload
        label="Staff Photo"
        files={state.photo}
        onChange={(files) =>
          dispatch({ type: "SET_FIELD", field: "photo", value: files })
        }
      />

      {/* Additional Notes (Optional) */}
      <TextArea
        label="Additional Notes"
        value={state.notes}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "notes", value })
        }
        placeholder="Enter any extra details"
      />

      {/* Save Button */}
      <div className="flex justify-end">
        <Button onClick={handlePublish} className="mt-4">
          Publish
        </Button>
      </div>
      {showToast && (
        <Toast
          message="Saved successfully!"
          type="success"
          duration={5000}
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
};

export default StaffMembers;
