
import { useEffect } from "react";
import "./AllEmployeesTable.scss";
import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
const AllEmployeesTablePaged = ({data}) => {
//SEARCH BY COLUMN 
  const [filterValues, setFilterValues] = useState({}); //filtered values for each column
  const [filteredData, setFilteredData] = useState(data); //filtered data based on filtered values 
  //display or not the search input
//const [activeSearch,setActiveSearch]=useState(false);
const [columnSearchActive, setColumnSearchActive] = useState({});
//pagination 
const itemsPerPageOptions = [3, 7, 10, 20]; // Options for items per page
const [itemsPerPage, setItemsPerPage] = useState(itemsPerPageOptions[0]);
const [currentPage, setCurrentPage] = useState(1);

// Calculate the total number of pages based on the number of items and items per page
const totalPages = Math.ceil(filteredData.length / itemsPerPage);
const startIndex = (currentPage - 1) * itemsPerPage;
const endIndex = startIndex + itemsPerPage;
//the data we will show according to the index found using the number of items per page 
const visibleData = filteredData.slice(startIndex, endIndex);
const handlePageChange = (page) => {
  setCurrentPage(page);
};

const handleItemsPerPageChange = (newItemsPerPage) => {
  setItemsPerPage(newItemsPerPage);
  setCurrentPage(1); // Reset to the first page when changing items per page
};

const [sorting, setSorting] = useState({
  key: null,
  order: "asc", // Default sorting order
});


  useEffect(() => {
    // Update the filteredData state when the data prop changes
    setFilteredData(data);
  }, [data]);
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
      //search 
      //THE FUNCTION WE WILL CALL TO FILTER THE DATA BY THE SEARCHED FIELD

      const handleFilterChange = (key, value) => {
        //concatenate old filtered values with the new entry 
        const newFilterValues = { ...filterValues, [key]: value };
        setFilterValues(newFilterValues);
    //update the data to filtered data 
        const filtered = data.filter((entry) => {
          return tableKeys.every((tKey) => {//returns a boolean if any of the table elements contain the entered value
            const filterValue = newFilterValues[tKey];
            if (!filterValue) return true; // No filter applied
            return String(entry[tKey]).toLowerCase().includes(filterValue.toLowerCase());
          });
        });
    
        setFilteredData(filtered);
      };
    //set the active search by column 
   //maintaining the active search state for each key 
      const toggleActiveSearch = (column) => {
        setColumnSearchActive((prevState) => ({
          ...prevState,
          [column]: !prevState[column],
        }));
      };
      const handleSort = (key) => {
        // Toggle sorting order if the same column is clicked again
        const newOrder = sorting.key === key && sorting.order === "asc" ? "desc" : "asc";
        setSorting({ key, order: newOrder });
    
        // Sort the data based on the selected column and order
        const sortedData = [...filteredData].sort((a, b) => {
          const aValue = a[key];
          const bValue = b[key];
    
          if (aValue < bValue) return newOrder === "asc" ? -1 : 1;
          if (aValue > bValue) return newOrder === "asc" ? 1 : -1;
          return 0;
        });
    
        setFilteredData(sortedData);
      };
    

  //CHange the icon by sorting order
  const getSortIcon = (key) => {
    if (sorting.key === key) {
      if (sorting.order === "asc") {
        return <i className="fa fa-sort-up sort"></i>;
      } else {
        return <i className="fa fa-sort-down sort"></i>;
      }
    }
    return null;
  };


  //pagination 
  const generatePageNumbers = () => {
    const pageNumbers = [];
    
    // Display the first page button
    if (currentPage > 1) {
      pageNumbers.push(1);
    }
    
    // Display the current page button
    pageNumbers.push(currentPage);
    
    // Display the last page button
    if (currentPage < totalPages) {
      pageNumbers.push(totalPages);
    }
    
    return pageNumbers;
  };

  return (
    <>
      <div className="employees-table-container">
      <div className="pagination">
          <div className="items-per-page">
            {" "}
            <span>Items per page:</span>
            <select
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              value={itemsPerPage}
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="pagination-pages">   
          <span >
            Page {currentPage} of {totalPages}
          </span>
          </div>
        
          
   
      
          <div className="page-navigation">
           <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
           >
            <i className="fa fa-chevron-left"></i>
          </button>
            {generatePageNumbers().map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={pageNumber === currentPage ? "active" : ""}
              >
               
                {pageNumber} 
              </button>
            ))}
             <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
         
          <i className="fa fa-chevron-right"></i>
          </button>
          </div>
          
         
        </div>
        <table className="employees-table">
          <thead>
            <tr>
              {tableKeys.map((tableKey) => (
                <th
                  className="employee-cell"
                  key={tableKey}
                  onClick={() => handleSort(tableKey)}
                >
                  <div className="table-header">
                    {/** <i className="fa fa-search search-icon "> </i>*/}
                    <i
                      className="fa fa-search search-icon"
                      onClick={() => toggleActiveSearch(tableKey)}
                    ></i>

                    {
                      //if the search on the actual tkey is active
                      columnSearchActive[tableKey] ? (
                        <input
                          className="table-filter"
                          type="text"
                          placeholder={`Search by ${tableKey}`}
                          value={filterValues[tableKey] || ""}
                          onChange={(e) =>
                            handleFilterChange(tableKey, e.target.value)
                          }
                        />
                      ) : (
                        tableKey.toUpperCase()
                      )
                    }
                    {getSortIcon(tableKey)}
                  </div>
                  {/*tableKey.toUpperCase()*/}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {visibleData.map((entry, index) => (
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
          <div className="items-per-page">
            {" "}
            <span>Items per page:</span>
            <select
              onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
              value={itemsPerPage}
            >
              {itemsPerPageOptions.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
          <div className="pagination-pages">   
          <span >
            Page {currentPage} of {totalPages}
          </span>
          </div>
        
          
   
      
          <div className="page-navigation">
           <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
           >
            <i className="fa fa-chevron-left"></i>
          </button>
            {generatePageNumbers().map((pageNumber) => (
              <button
                key={pageNumber}
                onClick={() => handlePageChange(pageNumber)}
                className={pageNumber === currentPage ? "active" : ""}
              >
               
                {pageNumber} 
              </button>
            ))}
             <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
         
          <i className="fa fa-chevron-right"></i>
          </button>
          </div>
          
         
        </div>
      </div>
    </>
  );
};
export default AllEmployeesTablePaged;
