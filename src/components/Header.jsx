import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Input from "./Input";

const Header = () => {
  const [navAutoFillText, setNavAutoFillText] = useState("");
  return (
    <Navbar bg="#FFFFFF" expand="lg" className="navbar" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={require("../assets/images/logo.png")}
            width="131"
            height="40"
            className="d-inline-block align-top"
            alt="brand logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="m-auto ml-3" defaultActiveKey={"#link1"}>
            <Nav.Link href="#link1" className="nav-link">
              Dashboard
            </Nav.Link>
            <Nav.Link href="#link2">Broken Links</Nav.Link>
            <Nav.Link href="#link3">Retailer Summary</Nav.Link>
            <Nav.Link href="#link4">Product Summary</Nav.Link>
            <div className="reset-default-chevron">
              <NavDropdown
                title="Admin"
                id="basic-nav-dropdown"
                className="navbar-chevron-down "
              >
                <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
              </NavDropdown>
            </div>

            <Input
              text={navAutoFillText}
              placeholderText={"Pampers Arial Gill..."}
              setTextValue={setNavAutoFillText}
            />
          </Nav>
          <NavDropdown
            title={
              <>
                <img
                  src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                  alt="brand logo"
                />
                <Navbar.Text className="p-2">Hello Jha</Navbar.Text>
              </>
            }
            id="basic-nav-dropdown"
            className="navbar-chevron-down reset-default-chevron"
          >
            <NavDropdown.Item href="#action/3.1">Profile</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Settings</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Logout</NavDropdown.Item>
          </NavDropdown>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
