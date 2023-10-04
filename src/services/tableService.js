 export const tableService = {
     searchInTable
  }

    const searchInTable = (tableData,values) => {
      // Implement your search logic here
      const filteredData = tableData.filter((item) =>
      Object.keys(item).some((key) =>
      item[key].toLowerCase().includes(values.searchQuery.toLowerCase())
    )
      );
      return filteredData;
     
    };
     // Function to handle column sorting
  /*const handleSort = (column) => {
    const sortedData = [...data];

    sortedData.sort((a, b) => {
      if (sortOrder === "asc") {
        console.log(column);
        return a[column] - b[column];
      } else {
        return b[column] - a[column];
      }
    });*/