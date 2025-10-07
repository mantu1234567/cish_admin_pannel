const TextArea = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1 block">
      {label}
    </label>

    <textarea
      className="w-full border border-gray-300 p-2 rounded h-[250px] outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 resize-none"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextArea;
