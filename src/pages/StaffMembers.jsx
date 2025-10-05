import HeaderSection from "../components/HeaderSection";
import InputField from "../components/InputField";
import FileUpload from "../components/FileUpload";
import TextArea from "../components/TextArea";
import { useVarieties } from "../context/ApiContext";
import Button from "../components/Button";
import { useApiManager } from "../hooks/useApiManager";

const StaffMembers = () => {
  const { state, dispatch } = useVarieties();
  const { createStaffItem } = useApiManager();

  const handlePublish = () => {
    const payload = { staff: state };

    createStaffItem.mutate(payload, {
      onSuccess: () => {
        dispatch({ type: "RESET_FIELDS" });
        alert("Staff data published successfully!");
      },
      onError: (error) => {
        console.error(error);
        dispatch({ type: "RESET_FIELDS" });
        alert("Staff data publish failed!");
      },
    });
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Staff", link: "/staff" },
    { label: "Add Staff" },
  ];

  const title = "ADD NEW STAFF MEMBER";
  const description =
    "Fill in staff details such as designation, emails, specialization, joining date, and qualifications. Upload a photo as the profile thumbnail.";

  return (
    <div className="mx-auto pl-12 pr-12 pb-24 bg-white">
      <HeaderSection
        breadcrumb={breadcrumb}
        title={title}
        description={description}
      />

      {/* Full Name */}
      <InputField
        label="Full Name"
        value={state.fullName}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "fullName", value })
        }
        placeholder="Enter full name (e.g., Dr. Anju Bajpai)"
      />

      {/* Designation */}
      <InputField
        label="Designation"
        value={state.designation}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "designation", value })
        }
        placeholder="Enter designation (e.g., Principal Scientist)"
      />

      {/* ICAR Email */}
      <InputField
        label="ICAR Email"
        value={state.icarEmail}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "icarEmail", value })
        }
        placeholder="Enter ICAR official email"
      />

      {/* Alternate Email */}
      <InputField
        label="Alternate Email"
        value={state.alternateEmail}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "alternateEmail", value })
        }
        placeholder="Enter alternate email"
      />

      {/* Specialization */}
      <InputField
        label="Specialization"
        value={state.specialization}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "specialization", value })
        }
        placeholder="Enter specialization (e.g., Fruit Science)"
      />

      {/* Joining Date */}
      <InputField
        label="Joining Date"
        type="date"
        value={state.joiningDate}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "joiningDate", value })
        }
      />

      {/* M.Sc. From */}
      <InputField
        label="M.Sc. From"
        value={state.mscFrom}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "mscFrom", value })
        }
        placeholder="Enter University/Institute"
      />

      {/* Ph.D. From */}
      <InputField
        label="Ph.D. From"
        value={state.phdFrom}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "phdFrom", value })
        }
        placeholder="Enter University/Institute"
      />

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
    </div>
  );
};

export default StaffMembers;
