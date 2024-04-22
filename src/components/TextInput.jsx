import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";

const TextInput = ({ text, placeholder, setText }) => {
  return (
    <div className="custom-text-input">
      <InputGroup>
        <Form.Control
          placeholder={placeholder}
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={text}
          className="modal-body-url"
          onChange={(e) => setText(e.target.value)}
        />
      </InputGroup>
    </div>
  );
};

export default TextInput;
