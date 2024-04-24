import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CustomModal from "./Modal";
import {
  EXTERNAL_USER_MANAGEMENT_SCREEN,
  GLOBAL_RETAILER_MANAGEMENT,
  externalUserManagementData,
  userManagementData,
} from "../constant";
import UserManagementModal from "./UserManagementModal";

const Header = () => {
  const navigate = useNavigate();
  const [navAutoFillText, setNavAutoFillText] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [userManageModalShow, setUserManageModalShow] = useState(false);
  const [text, setText] = useState("");
  const [notificationCount, setNotificationCount] = useState(1);

  const handleClick = () => {
    navigate("/retailer-summary", {
      state: { navigatedFrom: GLOBAL_RETAILER_MANAGEMENT },
    });
  };
  return (
    <>
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
              <NavLink
                className="custom-nav-link nav-link nav-link-highlighter"
                activeClassName="active"
                to={"/"}
              >
                Dashboard
              </NavLink>
              <NavLink
                className="nav-link nav-link-highlighter"
                activeClassName="active"
                to={"/broken-links"}
              >
                Broken Links
              </NavLink>
              <NavLink
                className="nav-link nav-link-highlighter"
                activeClassName="active"
                to={"/retailer-summary"}
              >
                Retailer Summary
              </NavLink>
              <NavLink
                className="nav-link nav-link-highlighter"
                activeClassName="active"
                to={"/product-summary"}
              >
                Product Summary
              </NavLink>
              <div className="reset-default-chevron">
                <NavDropdown
                  title="Admin"
                  id="basic-nav-dropdown"
                  className="navbar-chevron-down  nav-link-highlighter"
                >
                  <NavDropdown.Item
                    href="#action/3.1"
                    className="mt-1"
                    onClick={() => setModalShow(true)}
                  >
                    External User Management
                  </NavDropdown.Item>
                  <NavDropdown.Item
                    href="#action/3.2"
                    className="mt-1"
                    onClick={() => setUserManageModalShow(true)}
                  >
                    User Management
                  </NavDropdown.Item>
                  <NavDropdown.Item className="mt-1" onClick={handleClick}>
                    Global Retailer Management
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" className="mt-1">
                    Website Management
                  </NavDropdown.Item>
                </NavDropdown>
              </div>

              <Input
                text={navAutoFillText}
                placeholderText={"Pampers Arial Gill..."}
                setTextValue={setNavAutoFillText}
              />
              <Nav.Link>
                <div className="d-flex align-items-center">
                  <span style={{ fontSize: 23, position: "relative" }}>
                    <i class="bi bi-bell" />
                    {notificationCount > 0 && (
                      <span className="notification-count">
                        {notificationCount}
                      </span>
                    )}
                  </span>

                  {/* <Badge bg="danger">{1}</Badge> */}
                </div>
              </Nav.Link>
            </Nav>
            <NavDropdown
              title={
                <>
                  <img
                    src="https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"
                    width="30"
                    height="30"
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
      <CustomModal
        modalTitle="External User Management"
        show={modalShow}
        onHide={() => setModalShow(false)}
        text={text}
        setText={setText}
        modalData={externalUserManagementData}
        screen={EXTERNAL_USER_MANAGEMENT_SCREEN}
      />
      <UserManagementModal
        modalTitle="User Management"
        show={userManageModalShow}
        onHide={() => setUserManageModalShow(false)}
        text={text}
        setText={setText}
        modalData={userManagementData}
      />
    </>
  );
};

export default Header;
