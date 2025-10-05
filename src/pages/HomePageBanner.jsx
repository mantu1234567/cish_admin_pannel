import HeaderSection from "../components/HeaderSection";
import FileUpload from "../components/FileUpload";
import { useVarieties } from "../context/ApiContext";
import Button from "../components/Button";
import { useApiManager } from "../hooks/useApiManager";
import Toast from "../components/Toast";
import { useState } from "react";

const HomePageBanner = () => {
  const { state, dispatch } = useVarieties();
  const { createStaffItem } = useApiManager();
    const [showToast, setShowToast] = useState(false);
  
  const handlePublish = () => {
    setShowToast(true)
    const payload = { staff: state };
    createStaffItem.mutate(payload, {
      onSuccess: () => {
        dispatch({ type: "RESET_FIELDS" });
        alert("Staff data published successfully!");
      },
    //   onError: (error) => {
    //     console.error(error);
    //     dispatch({ type: "RESET_FIELDS" });
    //     alert("Staff data publish failed!");
    //   },
    });
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Banner", link: "/HomePageBanner" },
    { label: "Add Banner" },
  ];

  const title = "HOME PAGE BANNER";
  const description =
    "";

  return (
    <div className="mx-auto pl-12 pr-12 pb-24 bg-white">
      <HeaderSection
        breadcrumb={breadcrumb}
        title={title}
        description={description}
      />
      {/* Staff Image */}
      <FileUpload
        files={state.image}
        onChange={(files) =>
          dispatch({ type: "SET_FIELD", field: "image", value: files })
        }
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

export default HomePageBanner;
