import React, { useState } from "react";
import Select from "react-dropdown-select";

const SearchInput = ({ options, placeholder }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const handleChange = (values) => {
    setSelectedValues(values);
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
      className="custom-auto-search"
    />
  );
};

export default SearchInput;
