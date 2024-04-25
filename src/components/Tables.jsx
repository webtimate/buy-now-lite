import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";
import CustomModal from "./Modal";
import { tableData, TEXT_INPUT } from "../constant";
import withLayout from "../pages/Layout";

const brokenLinkData = [
  {
    id: 1,
    title: "Buy Now Url",
    link: "https://www.oral-b.co.in/en-in",
    type: TEXT_INPUT,
  },
  {
    id: 1,
    title: "Secondary Buy Now Url",
    link: "https://www.oral-b.co.in/en-in",
    type: TEXT_INPUT,
  },
  {
    id: 3,
    title: "",
    link: "Update successfully and changes will reflect after next run",
    type: "INFO",
  },
];

const Tables = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [isChevronDown, setIsChevronDown] = useState(true);
    const [text, setText] = useState("");

  return (
    <div className="main-container">
      <Container className="mt-4">
        <div className="d-flex justify-content-between">
          <p className="table-title">Broken Link Summary</p>
          <div className="d-flex ">
            <p className="table-subTitle table-subTitle-spacing">
              Primary Broken Links{" "}
              <span style={{ marginLeft: 10 }}>
                <b>12</b>
              </span>{" "}
            </p>
            <p className="table-subTitle">
              Secondary Broken Links{" "}
              <span style={{ marginLeft: 10 }}>
                <b>8</b>
              </span>{" "}
            </p>
          </div>
        </div>
        <div className="mt-3"></div>
        {/* table section */}
        <Table className="custom-table">
          <thead>
            <tr>
              <th className="text-center">
                <div className="initial-spacing-table ">Actions</div>{" "}
              </th>
              <th>SKU GTINS</th>
              <th
                className="d-flex align-items-center"
                onClick={() => setIsChevronDown(!isChevronDown)}
              >
                <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                  Product Names
                </span>
              </th>
              <th
                className="text-center"
                onClick={() => setIsChevronDown(!isChevronDown)}
              >
                <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                  Primary Broken Links
                </span>
              </th>
              <th
                className="text-center"
                onClick={() => setIsChevronDown(!isChevronDown)}
              >
                <span class={isChevronDown ? "chevron-down" : "chevron-up"}>
                  Secondary Broken Links
                </span>
              </th>
            </tr>
          </thead>
          <tbody className="custom-tr">
            {tableData.map((item, index) => (
              <tr className="custom-tr">
                <td className="text-center pointer-cursor ">
                  <i
                    class="bi bi-pencil-fill"
                    onClick={() => setModalShow(true)}
                  ></i>
                </td>
                <td>{item.gtins}</td>
                <td>
                  <b>{item.productName}</b>
                </td>
                <td className="text-center">
                  <img
                    src={item.primaryBrokenLink}
                    width="60"
                    height="15"
                    className="d-inline-block align-top"
                    alt="amazon logo"
                  />
                </td>
                <td className="text-center">
                  {(index === 0 && (
                    <img
                      src={item.primaryBrokenLink}
                      width="60"
                      height="15"
                      className="d-inline-block align-top"
                      alt="amazon logo"
                    />
                  )) ||
                    (index === 2 && (
                      <img
                        src={item.primaryBrokenLink}
                        width="60"
                        height="15"
                        className="d-inline-block align-top"
                        alt="amazon logo"
                      />
                    )) ||
                    (index === 3 && (
                      <img
                        src={item.primaryBrokenLink}
                        width="60"
                        height="15"
                        className="d-inline-block align-top"
                        alt="amazon logo"
                      />
                    ))}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>

        {/* modal  */}
        <CustomModal
          modalTitle="UPDATE PRODUCTS"
          show={modalShow}
          onHide={() => setModalShow(false)}
          modalData={brokenLinkData}
          setText={setText}
        />
      </Container>
    </div>
  );
};

export default withLayout(Tables);
