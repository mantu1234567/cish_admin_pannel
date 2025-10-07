import { useState, useMemo } from "react";
import { Trash2, Search } from "lucide-react";

const DataTable = ({ columns, data, onDelete, itemsPerPage = 5 }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // ✅ Filter data by search term
  const filteredData = useMemo(() => {
    if (!searchTerm.trim()) return data;
    return data.filter((row) =>
      Object.values(row).some((val) =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [data, searchTerm]);

  // ✅ Pagination logic
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentData = filteredData.slice(startIdx, startIdx + itemsPerPage);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  // ✅ Delete confirmation
  const handleDelete = (index) => {
    const confirmed = window.confirm("Are you sure you want to delete this record?");
    if (confirmed) {
      onDelete(index);
    }
  };

  return (
    <div className="mt-8 border border-gray-300 rounded-lg p-4 bg-white shadow-sm">
      {/* 🔍 Search Bar */}
      <div className="flex justify-between items-center mb-4">
        <div className="relative w-1/3">
          <Search
            className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              setCurrentPage(1);
            }}
            className="w-full border border-gray-300 rounded pl-10 pr-3 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-200 focus:border-blue-500 transition-all"
          />
        </div>
        <p className="text-sm text-gray-600">
          Showing {startIdx + 1}–
          {Math.min(startIdx + itemsPerPage, filteredData.length)} of{" "}
          {filteredData.length} entries
        </p>
      </div>

      {/* 📋 Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-200 rounded">
          <thead className="bg-gray-100">
            <tr>
              {columns.map((col, i) => (
                <th
                  key={i}
                  className="px-4 py-2 text-left text-sm font-semibold text-gray-700 border-b"
                >
                  {col.header}
                </th>
              ))}
              {onDelete && (
                <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700 border-b">
                  Actions
                </th>
              )}
            </tr>
          </thead>

          <tbody>
            {currentData.length > 0 ? (
              currentData.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="hover:bg-gray-50 transition-colors duration-200"
                >
                  {columns.map((col, colIndex) => (
                    <td
                      key={colIndex}
                      className="px-4 py-2 text-sm text-gray-800 border-b"
                    >
                      {col.render
                        ? col.render(row[col.accessor], row)
                        : row[col.accessor]}
                    </td>
                  ))}

                  {onDelete && (
                    <td className="px-4 py-2 border-b text-center">
                      <button
                        onClick={() =>
                          handleDelete((currentPage - 1) * itemsPerPage + rowIndex)
                        }
                        className="inline-flex items-center gap-2 text-sm font-medium text-white bg-red-500 hover:bg-red-600 px-3 py-1.5 rounded-lg transition-all duration-200 shadow-sm hover:shadow-md"
                        title="Delete"
                      >
                        <Trash2 size={16} />
                        Delete
                      </button>
                    </td>
                  )}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length + (onDelete ? 1 : 0)}
                  className="text-center py-4 text-gray-500"
                >
                  No matching data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* 🔢 Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-end items-center gap-3 mt-4">
          <button
            onClick={handlePrevPage}
            disabled={currentPage === 1}
            className={`px-3 py-1 rounded text-sm ${
              currentPage === 1
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            } transition-all`}
          >
            Prev
          </button>

          <span className="text-sm text-gray-700">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
            className={`px-3 py-1 rounded text-sm ${
              currentPage === totalPages
                ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                : "bg-blue-500 text-white hover:bg-blue-600"
            } transition-all`}
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default DataTable;
