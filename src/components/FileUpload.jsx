import Button from "./Button";

const FileUpload = ({ files, onChange }) => {
  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    onChange(selectedFiles);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const droppedFiles = Array.from(e.dataTransfer.files);
    onChange(droppedFiles);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const removeFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    onChange(newFiles);
  };

  return (
    <div className="mb-4">
      <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1">
        Upload Image
      </label>
      <div
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <img src="public/upload 1.svg" alt="Local Image" className="mx-auto" />{" "}
        <h1 className="text-[#000000] font-noto text-[27px] leading-[156.5%] font-bold">
          Drop File Here
        </h1>
        <h1 className="mb-2 text-[#BAB9B9] font-noto text-[19px] leading-[156.6%]">
          Or
        </h1>
        <Button
          variant="primary"
          onClick={() => document.getElementById("file-input").click()}
          className="bg-[#1B5E20] hover:bg-[#145018] mb-4"
        >
          Upload File
        </Button>
        <p className="text-sm text-gray-500 mb-4">
          Only PNG, JPG and PDF files
          <br />
          Are Supported
        </p>
        <input
          id="file-input"
          type="file"
          multiple
          onChange={handleFileSelect}
          className="hidden"
          accept="image/*,video/*"
        />
      </div>

      {files && files.length > 0 && (
        <div className="mt-4">
          <h4 className="text-sm font-medium text-gray-700 mb-2">
            Selected Files:
          </h4>
          {files.map((file, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2"
            >
              <span className="text-sm text-gray-600">{file.name}</span>
              <button
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700"
              ></button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FileUpload;
