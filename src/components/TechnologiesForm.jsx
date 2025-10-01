import InputField from "./InputField";
import TextArea from "./TextArea";
import SelectDropdown from "./SelectDropdown";
import Button from "./Button";
import FileUpload from "./FileUpload";

import { useVarieties } from "../context/ApiContext";
import { publishVariety } from "../api/varietiesApi";
import HeaderSection from "./HeaderSection";
import { useState } from "react";
import { useApiManager } from "../hooks/useApiManager";
import RoyaltyDropdown from "./RoyaltyDropdown ";
import RoyaltyField from "./RoyaltyDropdown ";
const TechnologiesForm = () => {
  const { state, dispatch } = useVarieties();
  const [formData, setFormData] = useState([]);
  const { createVarietiesItem } = useApiManager();
 const handlePublish = () => {
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
    targetCustomers: state.targetCustomers
      ? [state.targetCustomers]
      : null,
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
    onError: (error) => {
      console.error("Publish error:", error);
      dispatch({ type: "RESET_FIELDS" });
      alert("Publish failed");
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
  console.log(formData);
  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Technologies", link: "/technologies" },
    { label: "Add Technologies" },
  ];

  const title = "WHAT IS YOUR NEW TECHNOLOGIES POST";
  const description =
    "Upload Your Media. The First Image Will Be Used As The Thumbnail In Feeds. Drag And Drop Up To 3 Image/Video 10 Create A Mutabos";
  return (
    <div className="mx-auto pl-12 pr-24 py-24 bg-white">
      <HeaderSection
        breadcrumb={breadcrumb}
        title={title}
        description={description}
      />

      <InputField
        label="TECHNOLOGIE TITLE"
        value={state.title}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "title", value })
        }
        placeholder="Example: CISH-METWASH"
      />
      <FileUpload
        files={formData.files}
        onChange={(files) => handleFieldChange("files", files)}
      />
      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <InputField
            label="Name of Inventor(s)/Developer(s)"
            value={state.inventors}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "inventors", value })
            }
            placeholder="Example: Dr. Shailendra Rajan, Dr. S. S. Negi, Dr. Ram Kumar"
          />
        </div>
        <div className="w-1/2">
          <InputField
            label="Collaborator(s)"
            value={state.collaborators}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "collaborators", value })
            }
            placeholder="Example: Dr. R. P. Shukla, Dr. B. K. Pandey"
          />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <InputField
            label="Maintainer Inventor"
            value={state.maintainerInventor}
            onChange={(value) =>
              dispatch({
                type: "SET_FIELD",
                field: "maintainerInventor",
                value,
              })
            }
            placeholder="Example: Dr. Ashish Yadav"
          />
        </div>
        <div className="w-1/2">
          <InputField
            label="Year of Development"
            value={state.yearOfDevelopment}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "yearOfDevelopment", value })
            }
            placeholder="Example: 2000"
          />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <InputField
            label="Year of Commercialization"
            value={state.yearOfCommercialization}
            onChange={(value) =>
              dispatch({
                type: "SET_FIELD",
                field: "yearOfCommercialization",
                value,
              })
            }
            placeholder="Example: 2024"
          />
        </div>
        <div className="w-1/2">
          <InputField
            label="Year of Release"
            value={state.yearOfRelease}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "yearOfRelease", value })
            }
            placeholder="Example: 2024 (SVRC), 2024 (CVRC)"
          />
        </div>
      </div>

      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <InputField
            label="PPVFRA Breeder’s right registration"
            value={state.ppvfraRegistration}
            onChange={(value) =>
              dispatch({
                type: "SET_FIELD",
                field: "ppvfraRegistration",
                value,
              })
            }
            placeholder="Example: REG/2016/375"
          />
        </div>
        <div className="w-1/2">
          <InputField
            label="IC No."
            value={state.icNumber}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "icNumber", value })
            }
            placeholder="Example: 0640186"
          />
        </div>
      </div>

      <TextArea
        label="TECHNOLOGIE DETAILS"
        value={state.details}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "details", value })
        }
        placeholder="Enter detailed description"
      />
      <div className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-3">
        LICENSING TERMS
      </div>

      <div className="flex flex-row gap-4 mb-4">
        <div className="w-1/2">
          <InputField
            label="Nature of License"
            value={state.natureOfLicense}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "natureOfLicense", value })
            }
            placeholder="Example: Non-Exclusive"
          />
        </div>
        <div className="w-1/2">
          <InputField
            label="Duration"
            value={state.licenseDuration}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "licenseDuration", value })
            }
            placeholder="Example: 7 Years"
          />
        </div>
      </div>

      <div className="flex flex-row gap-4 mb-4">
        <div className="w-1/2">
          <SelectDropdown
            label="Licensing Territory"
            value={state.licensingTerritory}
            onChange={(value) =>
              dispatch({
                type: "SET_FIELD",
                field: "licensingTerritory",
                value,
              })
            }
            options={[
              { label: "India", value: "india" },
              { label: "Global", value: "global" },
              { label: "Both", value: "both" },
            ]}
          />
        </div>
        <div className="w-1/2">
          <InputField
            label="License Fee"
            value={state.licenseFee}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "licenseFee", value })
            }
            placeholder="Example: Rs. 1,00,000 + 18% GST (25% rebate for MSME)"
          />
        </div>
      </div>

      <div className="flex flex-row gap-4 mb-4">
        <div className="w-1/2">
          <SelectDropdown
            label="Target Customers"
            value={state.targetCustomers}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "targetCustomers", value })
            }
            options={[
              { label: "Farmers", value: "farmers" },
              { label: "Orchardists", value: "orchardists" },
              { label: "Industries", value: "industries" },
              { label: "Startups", value: "startups" },
              { label: "MSMEs", value: "msmes" },
              { label: "MNCs", value: "mncs" },
              { label: "FPOs and SHGs", value: "fpos_shgs" },
              { label: "Guava Farmers", value: "guava_farmers" },
              { label: "Mango Farmers", value: "mango_farmers" },
            ]}
          />
        </div>
        <div className="w-1/2">
          <RoyaltyField
            fieldLabel="Royalty"
            value={state.royalty}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "royalty", value })
            }
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button onClick={handlePublish} className="mt-4">
          Publish
        </Button>
      </div>
    </div>
  );
};

export default TechnologiesForm;
