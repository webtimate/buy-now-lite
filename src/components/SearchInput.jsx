import React, { useState } from "react";
import Select from "react-dropdown-select"; // Assuming 'react-dropdown-select'

const SearchInput = ({ options, placeholder, width }) => {
  const [selectedValues, setSelectedValues] = useState([]); // State for selected options

  const handleChange = (values) => {
    setSelectedValues(values); // Update state on selection change
  };

  return (
    <Select
      placeholder={placeholder}
      labelField="name"
      searchBy="name"
      valueField="id"
      options={options}
      values={selectedValues}
      onChange={handleChange}
      style={{ width: width }}
    />
  );
};

export default SearchInput;
