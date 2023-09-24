import "./AllEmployeesTable.scss";

const AllEmployeesTable = ({data}) => {
  //  const { addFormData,formDataArray } = useFormData();
    
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
      
  /*const [data, setData] = useState(employeesData);
  const [sortOrder, setSortOrder] = useState("asc"); // Initial sort order

  // Function to handle column sorting
  const handleSort = (column) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        console.log(column);
        return a[column] - b[column];
      } else {
        return b[column] - a[column];
      }
    });

    setData(sortedData);
    // Toggle sort order for the next click
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };
*/
  return (
    <table className="employees-table">
      <thead>
        <tr>
          {tableKeys.map((tableKey) => (
            <th
              className="employee-cell"
              key={tableKey}
              //onClick={() => handleSort(tableKey)}
            >
              {tableKey.toUpperCase()}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((entry, index) => (
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
  );
}

export default AllEmployeesTable;
