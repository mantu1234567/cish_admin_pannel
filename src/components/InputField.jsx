const InputField = ({ label, value, onChange, placeholder,type="text" }) => (
  <div className="mb-4 ">
    <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1">
      {label}
    </label>

    <input
      type={type}
      className="w-full border p-2 rounded"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
