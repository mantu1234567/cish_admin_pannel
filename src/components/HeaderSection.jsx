import React from "react";

const HeaderSection = ({ breadcrumb, title, description }) => {
  return (
    <div className=" bg-white rounded-md">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        {breadcrumb.map((item, index) => (
          <span key={index}>
            {item.link ? (
              <a href={item.link} className="text-[#777070] hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="text-[#1B5E20] font-semibold">{item.label}</span>
            )}
            {index < breadcrumb.length - 1 && <span className="mx-1">/</span>}
          </span>
        ))}
      </div>

      {/* Buttons */}
      {/* <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded hover:bg-gray-100">
          Cancel
        </button>

        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Publish
        </button>
      </div> */}

      {/* Dynamic Title & Description */}
      <div className="mt-10 text-center">
        <h1 className="text-[#1B5E20] font-noto text-[25px] leading-[156.5%] font-bold">
          {title}
        </h1>
        <p className="text-[#626262] font-noto text-[18px] leading-[156.5%]">
          {description}
        </p>
        <hr className="mt-4 mb-8 border-gray-300" />
      </div>
    </div>
  );
};

export default HeaderSection;
