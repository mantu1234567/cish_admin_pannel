import Button from "./Button";
import { useState, useEffect } from "react";
import { Eye, X, RefreshCcw } from "lucide-react";

const FileUpload = ({ files, onChange }) => {
  const [previews, setPreviews] = useState([]);
  const [uploadProgress, setUploadProgress] = useState(0);
  const [showPreview, setShowPreview] = useState(false);
  const [uploadDone, setUploadDone] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    if (files && files.length > 0) {
      const newPreviews = files.map((file) => ({
        name: file.name,
        type: file.type,
        url: URL.createObjectURL(file),
      }));
      setPreviews(newPreviews);

      setUploadProgress(0);
      setUploadDone(false);
      const interval = setInterval(() => {
        setUploadProgress((prev) => {
          if (prev >= 100) {
            clearInterval(interval);
            setUploadDone(true);
            return 100;
          }
          return prev + 10;
        });
      }, 150);

      return () => {
        clearInterval(interval);
        newPreviews.forEach((p) => URL.revokeObjectURL(p.url));
      };
    } else {
      setPreviews([]);
      setUploadProgress(0);
      setUploadDone(false);
    }
  }, [files]);

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    onChange(selectedFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    onChange(droppedFiles);
  };

  const handleDragOver = (e) => e.preventDefault();

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    onChange(newFiles);
  };

  const handleReupload = () => {
    onChange([]); // reset files
    document.getElementById("file-input").click();
  };

  return (
    <div className="mb-6">
      <label className="font-noto font-semibold text-[18px] text-[#000000] mb-2 block">
        Upload Image
      </label>

      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50 relative transition-all duration-300"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        {/* Upload Section */}
        {!uploadDone ? (
          <>
            <img src="public/upload 1.svg" alt="Upload Icon" className="mx-auto mb-2" />
            <h1 className="text-[#000000] text-[24px] font-bold">Drop File Here</h1>
            <h1 className="mb-2 text-[#BAB9B9] text-[18px]">Or</h1>
            <Button
              variant="primary"
              onClick={() => document.getElementById("file-input").click()}
              className="bg-[#1B5E20] hover:bg-[#145018] mb-3"
            >
              Upload File
            </Button>
            <p className="text-sm text-gray-500">
              Only PNG, JPG, and PDF files are supported
            </p>
            <input
              id="file-input"
              type="file"
              multiple
              onChange={handleFileSelect}
              className="hidden"
              accept="image/*,video/*"
            />
          </>
        ) : (
          // After upload done
          <div className="flex flex-col items-center justify-center gap-3">
            <Eye
              size={48}
              className="text-green-700 hover:text-green-900 cursor-pointer transition-transform duration-200 hover:scale-110"
              onClick={() => setShowPreview(true)}
            />
            <p className="text-sm text-gray-600 font-medium">
              View Uploaded File{files.length > 1 ? "s" : ""}
            </p>
            {/* 🆕 Re-upload button */}
            <Button
              variant="outline"
              onClick={handleReupload}
              className="flex items-center gap-2 border-green-700 text-green-700 hover:bg-green-100 transition"
            >
              <RefreshCcw size={16} /> Re-upload
            </Button>
          </div>
        )}

        {files?.length > 0 && (
          <span className="absolute top-3 right-3 bg-green-600 text-white text-xs font-medium px-2 py-1 rounded-full">
            {files.length} {files.length === 1 ? "File" : "Files"} Selected
          </span>
        )}
      </div>

      {uploadProgress > 0 && uploadProgress < 100 && (
        <div className="mt-3 w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
          <div
            className="bg-green-600 h-2.5 rounded-full transition-all duration-150"
            style={{ width: `${uploadProgress}%` }}
          ></div>
        </div>
      )}

      {/* File Preview Modal */}
      {showPreview && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="relative bg-white rounded-xl shadow-xl p-4 max-w-4xl w-full overflow-y-auto max-h-[90vh]">
            <button
              onClick={() => setShowPreview(false)}
              className="absolute top-3 right-3 bg-red-500 text-white rounded-full p-1"
            >
              <X size={18} />
            </button>
            <h2 className="text-lg font-semibold mb-4 text-center text-gray-800">
              Uploaded File Preview
            </h2>

            <div className="">
              {previews.map((file, index) => (
                <div key={index} className="rounded-md overflow-hidden relative group">
                  {file.type.startsWith("image/") ? (
                    <img
                      src={file.url}
                      alt={file.name}
                      className="w-full h-48 object-cover rounded-md cursor-pointer transition-transform duration-200 group-hover:scale-105"
                      onClick={() => setSelectedImage(file.url)}
                    />
                  ) : file.type.startsWith("video/") ? (
                    <video
                      src={file.url}
                      controls
                      className="w-full h-48 object-cover rounded-md"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-48 bg-gray-100 text-gray-600 text-sm">
                      {file.name}
                    </div>
                  )}

                  <button
                    onClick={() => removeFile(index)}
                    className="absolute top-2 right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition"
                    title="Remove file"
                  >
                    <X size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Full Image View */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-[60]"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Full Preview"
            className="max-w-[95%] max-h-[95%] rounded-lg shadow-2xl object-contain"
          />
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 text-white text-3xl font-bold hover:text-gray-300"
          >
            ✕
          </button>
        </div>
      )}
    </div>
  );
};

export default FileUpload;
