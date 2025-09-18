import InputField from "./InputField";
import TextArea from "./TextArea";
import SelectDropdown from "./SelectDropdown";
import Button from "./Button";
import FileUpload from "./FileUpload";

import { useVarieties } from "../context/ApiContext";
import HeaderSection from "./HeaderSection";
import { useState } from "react";
import { useApiManager } from "../hooks/useApiManager";
import RoyaltyDropdown from "./RoyaltyDropdown ";
const VariatiesForm = () => {
  const { state, dispatch } = useVarieties();
  const [formData, setFormData] = useState([]);
  const { createVarietiesItem } = useApiManager();
  const handlePublish = () => {
    const payload = { varieties: state };
    createVarietiesItem.mutate(payload, {
      onSuccess: () => {
        dispatch({ type: "RESET_FIELDS" });
        alert("Published successfully");
      },
      onError: (error) => {
        console.error(error);
        dispatch({ type: "RESET_FIELDS" });
        alert("Publish failed");
      },
    });
  };
  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Varieties", link: "/varieties" },
    { label: "Add Varieties" },
  ];

  const title = "WHAT IS YOUR NEW VARIETIES POST";
  const description =
    "Upload Your Media. The First Image Will Be Used As The Thumbnail In Feeds. Drug And Drop Up To 3 Image/Video 10 Create A Mutabos";
  return (
    <div className="mx-auto pl-12 pr-36 py-24 bg-white">
      <HeaderSection
        breadcrumb={breadcrumb}
        title={title}
        description={description}
      />

      <InputField
        label="VARIETIES TITLE"
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
      <TextArea
        label="VARIETIES DETAILS"
        value={state.details}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "details", value })
        }
        placeholder="Enter detailed description"
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
      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <InputField
            label="For Global Marketing"
            value={state.licenseFeeGlobal}
            onChange={(value) =>
              dispatch({ type: "SET_FIELD", field: "licenseFeeGlobal", value })
            }
            placeholder="Example: Rs.25,00,000 Applicable Taxes"
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
            placeholder="25% Rebate On The License Fee For MSME Firms"
          />
        </div>
      </div>
      <div className="flex flex-row gap-4">
        <div className="w-1/2">
          <InputField
            label="For Domestic Marketing"
            value={state.licenseFeeDomestic}
            onChange={(value) =>
              dispatch({
                type: "SET_FIELD",
                field: "licenseFeeDomestic",
                value,
              })
            }
            placeholder="Example: Rs.25,00,000 Applicable Taxes"
          />
        </div>
        <div className="w-1/2">
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
            placeholder="25% Rebate On The License Fee For MSME Firms"
          />
        </div>
      </div>
      <RoyaltyDropdown
        fieldLabel="Royalty"
        label="On Net-Invoice Value"
        value={state.royaltyType}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "royaltyType", value })
        }
        options={[
          { label: "Net-Invoice Value", value: "net-invoice" },
          { label: "Gross Revenue", value: "gross-revenue" },
          { label: "Net Revenue", value: "net-revenue" },
          { label: "Fixed Amount", value: "fixed-amount" },
        ]}
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
        label="TARGET CUSTOMERS"
        value={state.targetCustomers}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "targetCustomers", value })
        }
        options={[
          { label: "Startups", value: "startups" },
          { label: "Farms", value: "farms" },
        ]}
      />
      <div className="flex justify-end">
        <Button onClick={handlePublish} className="mt-4">
          Publish
        </Button>
      </div>
    </div>
  );
};

export default VariatiesForm;
