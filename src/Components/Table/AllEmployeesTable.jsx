
import { useEffect } from "react";
import "./AllEmployeesTable.scss";
import React, { useState } from "react";
import 'font-awesome/css/font-awesome.min.css';
const AllEmployeesTable = ({data}) => {
//SEARCH BY COLUMN 
  const [filterValues, setFilterValues] = useState({}); //filtered values for each column
  const [filteredData, setFilteredData] = useState(data); //filtered data based on filtered values 
  

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
  
return (
  <div className="employees-table-container">

      <table className="employees-table">
        <thead>
          <tr>
            {tableKeys.map((tableKey) => (
              <th className="employee-cell" key={tableKey}>
                   
                 <div className="table-header">
               
                {/** <i className="fa fa-search search-icon "> </i>*/} 
                  <input
                        className="table-filter"
                        type="text"
                         placeholder={tableKey.toUpperCase()}
                        value={filterValues[tableKey] || ""}
                        onChange={(e) => handleFilterChange(tableKey, e.target.value)}
                   />
  

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
);
};
export default AllEmployeesTable;
