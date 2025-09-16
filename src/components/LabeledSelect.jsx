import { ChevronsUpDown } from "lucide-react";

const LabeledSelect = ({ label, value, onChange, options }) => (
  <div className="flex items-center space-x-4">
    <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%]">
      {label}
    </label>

    <div className="relative">
      <select
        className="appearance-none border w-24 p-2 rounded"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-2 flex items-center">
        <ChevronsUpDown size={20} />
      </div>
    </div>

    <span className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%]">
      On Net-Invoice Value
    </span>
  </div>
);

export default LabeledSelect;
