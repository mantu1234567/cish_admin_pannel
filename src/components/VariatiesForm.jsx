import InputField from "./InputField";
import TextArea from "./TextArea";
import SelectDropdown from "./SelectDropdown";
import Button from "./Button";
import FileUpload from "./FileUpload";

import { useVarieties } from "../context/VarietiesContext";
import { publishVariety } from "../api/varietiesApi";
import HeaderSection from "./HeaderSection";
import { useState } from "react";
const VariatiesForm = () => {
  const { state, dispatch } = useVarieties();
const [formData,setFormData ] = useState([])
  const handlePublish = async () => {
    try {
      await publishVariety(state);
      alert("Published successfully");
    } catch (error) {
      console.error(error);
      alert("Publish failed");
    }
  };
  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Varieties", link: "/varieties" },
    { label: "Add Varieties" },
  ];

  const title = "WHAT IS YOUR NEW VARIETIES POST";
  const description =
    "Upload Your Media. The First Image Will Be Used As The Thumbnail In Feeds. " +
    "Drug And Drop Up To 3 Image/Video 10 Create A Mutabos";
  return (
    <div className="mx-auto p-6 bg-white shadow rounded">
      <HeaderSection
        breadcrumb={breadcrumb}
        title={title}
        description={description}
      />

      <InputField
        label="Varieties Title"
        value={state.title}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "title", value })
        }
        placeholder="Example: CISH-METWASH"
      />
      <TextArea
        label="Varieties Details"
        value={state.details}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "details", value })
        }
        placeholder="Enter detailed description"
      />
      <FileUpload
        files={formData.files}
        onChange={(files) => handleFieldChange("files", files)}
      />
      <SelectDropdown
        label="License Fee"
        value={state.licenseFee}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "licenseFee", value })
        }
        options={[
          { label: "Both", value: "both" },
          { label: "India Only", value: "india" },
          { label: "Global Only", value: "global" },
        ]}
      />
      <div className="flex flex-row gap-4 overflow-x-auto">
        <div className="w-1/2">
          <InputField
            label="For Global Marketing"
            value={state.licenseFeeGlobal}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "licenseFeeGlobal", value })
            }
            placeholder="e.g. Rs.25,000 + taxes"
          />
        </div>
        <div className="w-1/2">
          <InputField
            label="For Farms"
            value={state.forFarmsGlobalMarket}
            onChange={(value) =>
              dispatch({
                type: "SET_FIELD",
                field: "forFarmsGlobalMarket",
                value,
              })
            }
            placeholder="25% rebate on the license fee for MSME firms"
          />
        </div>
      </div>

      <InputField
        label="For Domestic Marketing"
        value={state.licenseFeeDomestic}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "licenseFeeDomestic", value })
        }
        placeholder="e.g. Rs.25,000 + taxes"
      />
      <InputField
        label="For Farms"
        value={state.forFarmsDomesticMarket}
        onChange={(value) =>
          dispatch({
            type: "SET_FIELD",
            field: "forFarmsDomesticMarket",
            value,
          })
        }
        placeholder="25% rebate on the license fee for MSME firms"
      />

      <InputField
        label="Royalty"
        value={state.royalty}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "royalty", value })
        }
        placeholder="e.g. 10%"
      />

      <SelectDropdown
        label="Licensing Territory"
        value={state.licensingTerritory}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "licensingTerritory", value })
        }
        options={[
          { label: "Both", value: "both" },
          { label: "India Only", value: "india" },
          { label: "Global Only", value: "global" },
        ]}
      />

      <SelectDropdown
        label="Target Customers"
        value={state.targetCustomers}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "targetCustomers", value })
        }
        options={[
          { label: "Startups", value: "startups" },
          { label: "Farms", value: "farms" },
        ]}
      />

      <Button onClick={handlePublish} className="mt-4">
        Publish
      </Button>
    </div>
  );
};

export default VariatiesForm;
