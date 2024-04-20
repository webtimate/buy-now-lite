import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const Input = ({ text, placeholderText }) => {
  return (
    <div className="custom-input ">
      <InputGroup>
        <Form.Control
          aria-label="Text input with dropdown button"
          placeholder={placeholderText}
          value={text}
        />
        <DropdownButton
          variant="outline-secondary"
          title=""
          id="input-group-dropdown-2"
          align="end"
          className="navbar-input-chevron-down"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
    </div>
  );
};

export default Input;
