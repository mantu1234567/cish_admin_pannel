import InputField from "./InputField";
import TextArea from "./TextArea";
import SelectDropdown from "./SelectDropdown";
import Button from "./Button";
import FileUpload from "./FileUpload";

import { useVarieties } from "../context/ApiContext";
import { publishVariety } from "../api/varietiesApi";
import HeaderSection from "./HeaderSection";
import { useState } from "react";
import LabeledSelect from "./LabeledSelect";
import { useApiManager } from "../hooks/useApiManager";
const TechnologiesForm = () => {
  const { state, dispatch } = useVarieties();
  const [formData, setFormData] = useState([]);
  const { createVarietiesItem } = useApiManager();
const handlePublish = () => {
    const payload = { Technologies: state };
  createVarietiesItem.mutate(payload, {
    onSuccess: () => {
      dispatch({ type: 'RESET_FIELDS' });
      alert('Published successfully');
    },
    onError: (error) => {
      console.error('Publish error:', error);
      dispatch({ type: 'RESET_FIELDS' });
      alert('Publish failed');
    },
  });
};

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Technologies", link: "/technologies" },
    { label: "Add Technologies" },
  ];

  const title = "WHAT IS YOUR NEW TECHNOLOGIES POST";
  const description =
    "Upload Your Media. The First Image Will Be Used As The Thumbnail In Feeds. Drug And Drop Up To 3 Image/Video 10 Create A Mutabos";
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
      <TextArea
        label="TECHNOLOGIE DETAILS"
        value={state.details}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "details", value })
        }
        placeholder="Enter detailed description"
      />
      {/* <LabeledSelect
        label="Royalty"
        value={state.royalty}
        onChange={(value) =>
          dispatch({ type: "SET_FIELD", field: "royalty", value })
        }
        options={[
          { label: "Option 1", value: "option1" },
          { label: "Option 2", value: "option2" },
        ]}
      /> */}

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
      <div className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1" >LICENSSING TERM</div>
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

export default TechnologiesForm;
