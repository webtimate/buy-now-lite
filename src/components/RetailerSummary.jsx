import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Container } from "react-bootstrap";
import SearchInputWithIcon from "./SearchInputWithIcon";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import OutlineButton from "./OutlineButton";
import CustomModal from "./Modal";
import { RETAILER_SUMMARY_SCREEN, retailSummaryData } from "../constant";
import withLayout from "../pages/Layout";
import { useLocation } from "react-router-dom";
import DeleteModal from "./DeleteModal";
import Pagination from "./Pagination";

const buttons = [
  { id: 1, text: "Add Retailer", iconText: "bi-plus-lg" },
  { id: 2, text: "Excel", iconText: "bi-upload" },
];

function RetailerSummary(props) {
  const [tableData, setTableData] = useState([
    {
      id: 1,
      isActive: true,
      retailerName: "Amazon",
      url: "https://www.amazon.b.co.in/en-in",
      imageUrl: require("../assets/images/amazon.jpg"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
    {
      id: 2,
      isActive: false,
      retailerName: "walmart",
      url: "https://www.walmart.b.co.in/en-in",
      imageUrl: require("../assets/images/wallamart.png"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
    {
      id: 3,
      isActive: true,
      retailerName: "walgreens",
      url: "https://www.walgreens.b.co.in/en-in",
      imageUrl: require("../assets/images/walgreen.png"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
    {
      id: 4,
      isActive: false,
      retailerName: "Big Basket",
      url: "https://www.bigbasket.b.co.in/en-in",
      imageUrl: require("../assets/images/bigbasket.png"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
    {
      id: 5,
      isActive: true,
      retailerName: "Big Basket",
      url: "https://www.bigbasket.b.co.in/en-in",
      imageUrl: require("../assets/images/bigbasket.png"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
    {
      id: 6,
      isActive: false,
      retailerName: "Big Basket",
      url: "https://www.bigbasket.b.co.in/en-in",
      imageUrl: require("../assets/images/bigbasket.png"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
    {
      id: 7,
      isActive: true,
      retailerName: "Big Basket",
      url: "https://www.bigbasket.b.co.in/en-in",
      imageUrl: require("../assets/images/bigbasket.png"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
    {
      id: 8,
      isActive: false,
      retailerName: "Big Basket",
      url: "https://www.bigbasket.b.co.in/en-in",
      imageUrl: require("../assets/images/bigbasket.png"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
    {
      id: 9,
      isActive: true,
      retailerName: "Big Basket",
      url: "https://www.bigbasket.b.co.in/en-in",
      imageUrl: require("../assets/images/bigbasket.png"),
      createdDate: "11 April 2024",
      lastUpdateDate: "11 April 2024",
    },
  ]);
  const [modalShow, setModalShow] = useState(false);
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const [isChevronDown, setIsChevronDown] = useState(true);
  const [text, setText] = useState("");
  const [isGrabbing, setIsGrabbing] = useState(false);

  const handleModal = (args) => {
    if (args.id === 1) {
      setModalShow(true);
    }
  };

  const onDragStart = (event, id) => {
    setIsGrabbing(true);
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    console.log(`Drag Start: ${id}`);
    event.dataTransfer.setData("text/plain", id);
  };

  const onDrop = (event, dropId) => {
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
    event.preventDefault();
    const dragId = event.dataTransfer.getData("text");
    console.log(`Dropped: dragId ${dragId}, dropId ${dropId}`);

    if (!dragId || dragId === dropId) return;

    const dragIndex = tableData.findIndex((item) => {
      console.log("item", item.id, dragId);

      return item.id == dragId;
    });
    const dropIndex = tableData.findIndex((item) => item.id == dropId);

    console.log(`dragIndex ${dragIndex}, dropIndex ${dropIndex}`);

    if (dragIndex === -1 || dropIndex === -1) return;

    console.log("setting data");

    const updatedData = [...tableData];
    [updatedData[dragIndex], updatedData[dropIndex]] = [
      updatedData[dropIndex],
      updatedData[dragIndex],
    ];
    setTableData(updatedData);
  };

  const onDragOver = (event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
    event.dataTransfer.effectAllowed = "move";
  };
  const handleDragEnd = () => {
    setIsGrabbing(false);
  };

  return (
    <div className="main-container">
      <Container className="mt-4 mb-4">
        <div className="d-flex justify-content-between  align-items-center">
          {/* profile summary upper button section  */}
          <div className="table-title ">RETAILER SUMMARY</div>
          <div className="d-flex ">
            <SearchInputWithIcon placeholderText={"Search by Retailer Name"} />

            <>
              {buttons.map((item) => (
                <ButtonWithIcon
                  text={item.text}
                  iconName={item.iconText}
                  key={item.id}
                  onClick={() => handleModal(item)}
                />
              ))}
              <OutlineButton
                text={"Download as Excel"}
                iconName={"bi-download"}
              />
              <OutlineButton
                text={"Download a Template"}
                iconName={"bi-download"}
              />
            </>
          </div>
        </div>
      </Container>
      {/* profile summary bottom table section  */}
      <Table className="custom-table mt-4">
        <thead>
          <tr>
            <th>
              <div className="initial-padding-left">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  id={`default-checkbox`}
                  label={""}
                  className="initial-spacing-table"
                />
              </div>
            </th>
            <th className="table-head-spacing">Select all</th>

            <th>Status</th>
            <th onClick={() => setIsChevronDown(!isChevronDown)}>
              <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                Retailer Name
              </span>
            </th>
            <th>Retailer Url</th>
            <th onClick={() => setIsChevronDown(!isChevronDown)}>
              <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                Retailer logo
              </span>
            </th>
            <th>Last Created date</th>
            <th>Updated by</th>
            <th>Comments</th>
            <th>
              <div className="initial-padding-right">Priority</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <tr
              key={item.id}
              draggable
              onDragStart={(event) => onDragStart(event, item.id)} // user starts dragging this fn triggers
              onDrop={(event) => onDrop(event, item.id)} // selected row is dropped handled by this method
              onDragOver={(event) => onDragOver(event)} // user has done with dragging
              onDragEnd={handleDragEnd}
              className={`custom-tr ${isGrabbing ? "grabbing" : "grab"}`}
              effectAllowed="move"
            >
              <td>
                <div className="initial-padding-left">
                  <Form.Check // prettier-ignore
                    type="checkbox"
                    id={`default-checkbox`}
                    label={""}
                    className={"initial-spacing-table"}
                  />
                </div>
              </td>
              <td>
                <div className="d-flex table-head-spacing">
                  <div className="pointer-cursor">
                    <i
                      class="bi bi-pencil-fill"
                      onClick={() => setModalShow(true)}
                    ></i>
                  </div>
                  <div
                    className="pointer-cursor"
                    onClick={() => setConfirmModalShow(true)}
                  >
                    <i class="bi bi-trash3"></i>
                  </div>
                </div>
              </td>
              <td>
                <div className="d-flex justify-content-center pt-2">
                  <div
                    className={
                      item.isActive ? "active-circle" : "inActive-circle"
                    }
                  ></div>
                </div>
              </td>
              <td>
                <b>Amazon</b>{" "}
              </td>
              <td>https://www.amazon.b.co.in/en-in</td>
              <td className="text-center">
                <div className="d-flex align-items-center">
                  <img
                    src={item.imageUrl}
                    width="60px"
                    height="15px"
                    className="image-spacing"
                    alt="warning logo"
                  />
                </div>
              </td>
              <td className="text-center">
                <div className="d-flex align-items-center">
                  {item.createdDate}
                </div>
              </td>
              <td className="text-center">{item.lastUpdateDate}</td>
              <td>
                <div>...</div>
              </td>
              <td className="text-center">
                <div className="iconContainer">
                  <div className="iconWrapper">
                    <i class="bi bi-chevron-up"></i>
                  </div>

                  <div className="iconWrapper">
                    <i class="bi bi-chevron-down"></i>
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Container>
        <Pagination />
      </Container>
      {/* modal  */}
      <CustomModal
        modalTitle="ADD RETAILER"
        show={modalShow}
        onHide={() => setModalShow(false)}
        modalData={retailSummaryData}
        screen={RETAILER_SUMMARY_SCREEN}
        text={text}
        setText={setText}
      />
      <DeleteModal
        modalTitle="DELETE CONFIRMATION"
        show={confirmModalShow}
        onHide={() => setConfirmModalShow(false)}
      />
    </div>
  );
}

export default withLayout(RetailerSummary);
