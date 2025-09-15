const TextArea = ({ label, value, onChange, placeholder }) => (
  <div className="mb-4">
    <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] mb-1">{label}</label>
    <textarea
      className="w-full border p-2 rounded h-[250px]"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  </div>
);

export default TextArea;
