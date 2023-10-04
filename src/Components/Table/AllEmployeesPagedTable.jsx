import React, { useState } from "react";
import "./AllEmployeesTable.scss";

const AllEmployeesTable = ({ data }) => {
  const tableKeys = [
    "firstName",
    "lastName",
    "birthDate",
    "startDate",
    "street",
    "city",
    "zipCode",
    "state",
    "departement",
  ];

  const itemsPerPage = 3; // Number of items to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;

  // Get the data to display on the current page
  const currentPageData = data.slice(startIndex, endIndex);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Function to handle page navigation
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div>
      <table className="employees-table">
        <thead>
          <tr>
            {tableKeys.map((tableKey) => (
              <th className="employee-cell" key={tableKey}>
                {tableKey.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {currentPageData.map((entry, index) => (
            <tr key={index}>
              {tableKeys.map((tKey) => (
                <td key={tKey} className="employee-cell">
                  {entry[tKey]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="page-selector">
        <span>Go to Page:</span>
        <select
        className="pagination-select"
          value={currentPage}
          onChange={(e) => handlePageChange(parseInt(e.target.value))}
        >
          {Array.from({ length: totalPages }, (_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default AllEmployeesTable;