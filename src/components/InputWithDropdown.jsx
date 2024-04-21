import React, { useRef } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import ButtonWithIcon from "./ButtonWithIcon";

const InputWithDropdown = ({ text, placeholderText, setTextValue }) => {
  return (
    <InputGroup className="">
      <Form.Control
        aria-label="Text input with dropdown button"
        placeholder={placeholderText}
        value={text}
        onChange={(e) => setTextValue(e.target.value)}
      />

      <DropdownButton
        variant="outline-secondary"
        title={
          <img
            src={require("../assets/images/downChevron.png")}
            width="10"
            height="5"
            className="d-flex align-items-center"
            alt="down chevron icon"
          />
        }
        id="input-group-dropdown-2"
        align="end"
      >
        <Dropdown.Item href="#">Action</Dropdown.Item>
        <Dropdown.Item href="#">Another action</Dropdown.Item>
        <Dropdown.Item href="#">Something else here</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Separated link</Dropdown.Item>
      </DropdownButton>
    </InputGroup>
  );
};

export default InputWithDropdown;
