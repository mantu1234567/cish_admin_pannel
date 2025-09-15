const TextArea = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="block font-semibold mb-1">{label}</label>
    <textarea
      className="w-full border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextArea;
