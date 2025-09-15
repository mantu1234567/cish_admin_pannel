const SelectDropdown = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="block font-semibold mb-1">{label}</label>
    <select
      className="w-full border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      {options.map((opt) => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </select>
  </div>
);

export default SelectDropdown;
