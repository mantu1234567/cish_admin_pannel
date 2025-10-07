const InputField = ({ label, value, onChange, placeholder, type = "text" }) => (
  <div className="mb-4">
    <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1 block">
      {label}
    </label>

    <input
      type={type}
      className="w-full border border-gray-300 p-2 rounded outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default InputField;
