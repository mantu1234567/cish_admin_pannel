const SelectDropdown = ({ label, value, onChange, options }) => (
  <div className="mb-4">
    <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1">{label}</label>
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
