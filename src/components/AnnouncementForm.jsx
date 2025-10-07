import InputField from "./InputField";
import TextArea from "./TextArea";
import Button from "./Button";
import FileUpload from "./FileUpload";
import { useVarieties } from "../context/ApiContext";
import HeaderSection from "./HeaderSection";
import { useState } from "react";
import { useApiManager } from "../hooks/useApiManager";
import Toast from "./Toast";
const AnnouncementForm = () => {
  const { state, dispatch } = useVarieties();
  const [formData, setFormData] = useState([]);
  const { createVarietiesItem } = useApiManager();
  const [showToast, setShowToast] = useState(false);
  const handlePublish = () => {
    setShowToast(true)
    const payload = {
      name: state.title || null,
      category: "TECHNOLOGY",
      shortDescription: state.details || null,
      techDetails: {
        yieldKgPerTree: state.yieldKgPerTree || null,
        fruitWeightG: state.fruitWeightG || null,
        tssBrix: state.tssBrix || null,
        shelfLifeDays: state.shelfLifeDays || null,
      },
      icNo: state.icNumber || null,
      yearDevelopment: state.yearOfDevelopment || null,
      yearRelease: state.yearOfRelease || null,
      yearCommercialization: state.yearOfCommercialization || null,
      targetCustomers: state.targetCustomers ? [state.targetCustomers] : null,
      inventors: state.inventors
        ? [
            {
              fullName: state.inventors || null,
              email: state.inventorEmail || null,
              affiliation: state.inventorAffiliation || null,
            },
          ]
        : null,
      licensingTerms: state.natureOfLicense
        ? [
            {
              natureOfLicense: state.natureOfLicense || null,
              durationYears: state.licenseDuration || null,
              territory: state.licensingTerritory || null,
              licenseFeeCents: state.licenseFee || null,
              rebatePercent: state.rebatePercent || null,
              royalty: state.royalty || null,
              notes: state.licenseNotes || null,
            },
          ]
        : null,
    };

    createVarietiesItem.mutate(payload, {
      onSuccess: () => {
        dispatch({ type: "RESET_FIELDS" });
        alert("Published successfully");
      },
      // onError: (error) => {
      //   console.error("Publish error:", error);
      //   dispatch({ type: "RESET_FIELDS" });
      //   alert("Publish failed");
      // },
    });
  };

  
  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Annoucement", link: "/Annoucement" },
    { label: "Annoucement" },
  ];

  const title = "ANNOUNCEMENT";
  const description = "";
  return (
    <div className="mx-auto pl-12 pr-12 py-24 bg-white">
      <HeaderSection
        breadcrumb={breadcrumb}
        title={title}
        description={description}
      />

          <InputField
            label="Announcement"
            type="text"
            value={state.inventors}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "inventors", value })
            }
            placeholder="Enter Announcement"
          />
       
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

export default AnnouncementForm;
