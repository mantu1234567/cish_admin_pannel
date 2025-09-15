import { Upload } from "lucide-react";
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
      <label className="block text-sm font-medium text-gray-700 mb-1">Upload Files</label>
      <div 
        className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center bg-gray-50"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <Upload size={48} className="mx-auto text-blue-400 mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">Drop File Here</h3>
        <p className="text-sm text-gray-500 mb-4">
          Only Files Are Add Per Files<br />
          Are Supported
        </p>
        <Button 
          variant="primary" 
          onClick={() => document.getElementById('file-input').click()}
          className="bg-green-600 hover:bg-green-700"
        >
          Upload File
        </Button>
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
          <h4 className="text-sm font-medium text-gray-700 mb-2">Selected Files:</h4>
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between bg-gray-100 p-2 rounded mb-2">
              <span className="text-sm text-gray-600">{file.name}</span>
              <button
                onClick={() => removeFile(index)}
                className="text-red-500 hover:text-red-700"
              >
                <X size={16} />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default FileUpload;