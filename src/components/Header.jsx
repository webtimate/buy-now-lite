import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import Input from "./Input";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";
import CustomModal from "./Modal";
import {
  EXTERNAL_USER_MANAGEMENT_SCREEN,
  externalUserManagementData,
  options,
  userManagementData,
} from "../constant";
import UserManagementModal from "./UserManagementModal";
import SearchInput from "./SearchInput";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";


const Header = () => {
  const navigate = useNavigate();
  const [navAutoFillText, setNavAutoFillText] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [userManageModalShow, setUserManageModalShow] = useState(false);
  const [text, setText] = useState("");
  const [notificationCount, setNotificationCount] = useState(1);

  return (
    <>
      <Navbar bg="#FFFFFF" expand="lg" className="navbar" sticky="top">
        <Container>
          <div className="navbar-wrapper">
            <div>
              <Navbar.Brand onClick={() => navigate("/")}>
                <img
                  src={require("../assets/images/logo.png")}
                  width="131"
                  height="40"
                  alt="brand logo"
                />
              </Navbar.Brand>
            </div>

            <div>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav>
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
                        className="mt-2"
                        onClick={() => setModalShow(true)}
                      >
                        External User Management
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="mt-2"
                        onClick={() => setUserManageModalShow(true)}
                      >
                        User Management
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="mt-2"
                        onClick={() => navigate("/global-retailer-management")}
                      >
                        Global Retailer Management
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="mt-2"
                        onClick={() => navigate("/website-management")}
                      >
                        Website Management
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        className="mt-2"
                        onClick={() => navigate("/not-found")}
                      >
                        Page Not Found
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                  <div className="d-flex align-items-center custom-search-input">
                    <SearchInput
                      options={options}
                      placeholder={"Pampers Arial Gill"}
                      width={181}
                    />
                  </div>
                  <Nav.Link className="gap-2">
                    <div className="d-flex align-items-center notification-container">
                      <DropdownButton
                        variant="outline-secondary"
                        title={
                          <span style={{ fontSize: 23, position: "relative" }}>
                            <i class="bi bi-bell" />
                            {notificationCount > 0 && (
                              <span
                                className="notification-count"
                                id="input-group-dropdown-2"
                              >
                                {notificationCount}
                              </span>
                            )}
                          </span>
                        }
                        id="input-group-dropdown-2"
                        align="end"
                      >
                        {[1, 2, 3].map((item) => (
                          <Dropdown.Item href="#" key={item} className="mt-1">
                            Notification data {item}{" "}
                          </Dropdown.Item>
                        ))}
                      </DropdownButton>
                    </div>
                  </Nav.Link>
                  <div className="d-flex align-items-center user-drop-menu">
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
                      <NavDropdown.Item href="#action/3.4">
                        Logout
                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
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
