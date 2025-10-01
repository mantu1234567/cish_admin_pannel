import React from "react";

const RoyaltyField = ({ fieldLabel, value, onChange }) => {
  const handleChange = (val) => {
    if (val === "") {
      onChange("");
    } else {
      onChange(val + "%");
    }
  };

  return (
    <div className="mb-4">
      {/* Field Label */}
      {fieldLabel && (
        <label className="font-noto font-semibold text-[18px] text-[#000000] leading-[156.5%] block">
          {fieldLabel}
        </label>
      )}

      <div className="flex items-center gap-4">
        {/* Numeric Input */}
        <div className="flex items-center border border-gray-300 rounded px-3 py-2 w-1/4">
          <input
            type="number"
            min="0"
            max="50"
            step="0.5"
            value={value.replace("%", "")}
            onChange={(e) => handleChange(e.target.value)}
            className="w-full outline-none text-center"
          />
          <span className="ml-1">%</span>
        </div>

        {/* Info Text */}
        <span className="text-gray-600 text-sm">On Net Sales Invoice</span>
      </div>
    </div>
  );
};

export default RoyaltyField;
