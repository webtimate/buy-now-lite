import React, { useState, useRef } from "react";
import { Dropdown, Form } from "react-bootstrap";
import OutlineButton from "./OutlineButton";

const CheckboxDropdown = ({ title, items }) => {
  const dropdownRef = useRef(null);

  const [selectedItems, setSelectedItems] = useState([]);

  const handleItemClick = (item) => {
    if (selectedItems.includes(item)) {
      setSelectedItems(selectedItems.filter((i) => i !== item));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const handleCloseDropdown = () => {
    if (dropdownRef.current) {
      dropdownRef.current.click();
    }
  };

  return (
    <Dropdown>
      <Dropdown.Toggle variant="success" id="dropdown-basic">
        <OutlineButton
          text={title}
          iconName={"bi-plus-lg"}
          id="dropdown-basic"
        />
      </Dropdown.Toggle>
      <Dropdown.Menu ref={dropdownRef}>
        <Dropdown.Item onClick={handleCloseDropdown}>
          <div className="drop-menu-close">
            <div className="fs-6 d-flex justify-content-center">
              <i class="bi bi-chevron-up" />
            </div>
          </div>
        </Dropdown.Item>

        {items.map((item) => (
          <div className="d-flex gap-4 align-items-center my-1">
            <Form.Check
              key={item}
              type="checkbox"
              // label={item}
              checked={selectedItems.includes(item)}
              onChange={() => handleItemClick(item)}
              style={{ marginTop: "5px", marginBottom: "5px" }}
            />
            <div>{item}</div>
          </div>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default CheckboxDropdown;
