import React from 'react';

const HeaderSection = ({ breadcrumb, title, description }) => {
  return (
    <div className="p-6 bg-white rounded-md">

      {/* Breadcrumb */}
      <div className="text-sm text-gray-600 mb-6">
        {breadcrumb.map((item, index) => (
          <span key={index}>
            {item.link ? (
              <a href={item.link} className="text-green-600 hover:underline">
                {item.label}
              </a>
            ) : (
              <span className="text-gray-900 font-semibold">{item.label}</span>
            )}
            {index < breadcrumb.length - 1 && <span className="mx-1">/</span>}
          </span>
        ))}
      </div>

      {/* Buttons */}
      <div className="flex justify-end space-x-4">
        <button className="px-4 py-2 border border-gray-300 text-gray-800 rounded hover:bg-gray-100">
          Cancel
        </button>

        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Publish
        </button>
      </div>

      {/* Dynamic Title & Description */}
      <div className="mt-10 text-center">
        <h1 className="text-2xl font-bold text-green-700">{title}</h1>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>

    </div>
  );
};

export default HeaderSection;
