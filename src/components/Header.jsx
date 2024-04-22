import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown, Image } from "react-bootstrap";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const [navAutoFillText, setNavAutoFillText] = useState("");
  return (
    <Navbar bg="#FFFFFF" expand="lg" className="navbar" sticky="top">
      <Container>
        <Navbar.Brand onClick={() => navigate("/")}>
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
          <Nav className="m-auto ml-3">
            <NavLink className="custom-nav-link nav-link" activeClassName="active" to={"/"}>
              Dashboard
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={"/broken-links"}
            >
              Broken Links
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={"/retailer-summary"}
            >
              Retailer Summary
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="active"
              to={"/product-summary"}
            >
              Product Summary
            </NavLink>
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
