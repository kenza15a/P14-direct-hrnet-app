
import { useEffect } from "react";
import "./AllEmployeesTable.scss";
import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
const AllEmployeesTable = ({data}) => {
//SEARCH BY COLUMN 
  const [filterValues, setFilterValues] = useState({}); //filtered values for each column
  const [filteredData, setFilteredData] = useState(data); //filtered data based on filtered values 
  //display or not the search input
const [activeSearch,setActiveSearch]=useState(false);
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
      
//THE FUNCTION WE WILL CALL TO FILTER THE DATA BY THE SEARCHED FIELD

      const handleFilterChange = (key, value) => {
        //concatenate old filtered values with the new entry 
        const newFilterValues = { ...filterValues, [key]: value };
        setFilterValues(newFilterValues);
    //update the data to filtered data 
        const filtered = data.filter((entry) => {
          return tableKeys.every((tKey) => {//returns a boolean if any of the table elemnts contain the entered value
            const filterValue = newFilterValues[tKey];
            if (!filterValue) return true; // No filter applied
            return String(entry[tKey]).toLowerCase().includes(filterValue.toLowerCase());
          });
        });
    
        setFilteredData(filtered);
      };

      const toggleActiveSearch = () => {
        setActiveSearch(!activeSearch);
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
            return <i class="fa fa-sort-up sort"></i>;
          } else {
            return <i class="fa fa-sort-down sort"></i>;
          }
        }
        return null;
      };
  
return (
  <>
  <div className="employees-table-container">

      <table className="employees-table">
        <thead>
          <tr>
            {tableKeys.map((tableKey) => (
              <th className="employee-cell" key={tableKey}  onClick={() => handleSort(tableKey)}>
                   
                 <div className="table-header">
               
                {/** <i className="fa fa-search search-icon "> </i>*/} 
                <i className="fa fa-search search-icon" onClick={toggleActiveSearch}></i>
                {activeSearch ?
                ( <input
                        className="table-filter"
                        type="text"
                        placeholder={`Search by ${tableKey}`}
                        value={filterValues[tableKey] || ""}
                        onChange={(e) => handleFilterChange(tableKey, e.target.value)}
                   />)
                   :(tableKey.toUpperCase())}{getSortIcon(tableKey)}
                
                 </div>
                {/*tableKey.toUpperCase()*/}
            
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
        
          {filteredData.map((entry, index) => (
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
 
  </div>
  </>
);
};
export default AllEmployeesTable;
