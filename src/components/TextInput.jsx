import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Container from "react-bootstrap/Container";

const TextInput = ({ text }) => {
  return (
    <div className="custom-text-input">
      <InputGroup>
        <Form.Control
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={text}
          className="modal-body-url"
        />
      </InputGroup>
    </div>
  );
};

export default TextInput;
