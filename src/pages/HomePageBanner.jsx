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

  // ✅ Extract image URLs from File objects
  const getImageUrls = (files) => {
    if (!files || files.length === 0) return [];
    return files.map((file) => URL.createObjectURL(file));
  };

  const handlePublish = () => {
    const imageUrls = getImageUrls(state.image);

    const payload = {
      images: imageUrls, // ✅ Only URLs in payload
    };

    console.log("📦 Final Payload:", payload);

    setShowToast(true);

    createStaffItem.mutate(payload, {
      onSuccess: () => {
        dispatch({ type: "RESET_FIELDS" });
        alert("Banner published successfully!");
      },
      onError: (error) => {
        console.error(error);
        alert("Banner publish failed!");
      },
    });
  };

  const breadcrumb = [
    { label: "Home", link: "/" },
    { label: "Banner", link: "/HomePageBanner" },
    { label: "Add Banner" },
  ];

  const title = "HOME PAGE BANNER";

  return (
    <div className="mx-auto pl-12 pr-12 pb-24 bg-white">
      <HeaderSection breadcrumb={breadcrumb} title={title} description="" />

      {/* Banner Image Upload */}
      <FileUpload
        files={state.image}
        onChange={(files) =>
          dispatch({ type: "SET_FIELD", field: "image", value: files })
        }
      />

      {/* Publish Button */}
      <div className="flex justify-end">
        <Button onClick={handlePublish} className="mt-4">
          Publish
        </Button>
      </div>

      {/* Toast */}
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
