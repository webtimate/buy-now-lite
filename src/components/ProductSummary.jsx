import React, { useState } from "react";
import ButtonWithIcon from "./ButtonWithIcon";
import { Container } from "react-bootstrap";
import SearchInputWithIcon from "./SearchInputWithIcon";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";

function ProductSummary() {
  const [modalShow, setModalShow] = React.useState(false);
  const [isChevronDown, setIsChevronDown] = useState(true);
  return (
    <Container className="mt-4 mb-4">
      <div className="d-flex justify-content-between  align-items-center">
        {/* profile summary upper button section  */}
        <p className="table-title ">Product Summary</p>
        <div className="d-flex ">
          <SearchInputWithIcon />
          <ButtonWithIcon text={"Add"} iconName={"bi-plus"} />
          <ButtonWithIcon text={"Excel"} iconName={"bi-upload"} />
          <ButtonWithIcon text={"Feed"} iconName={"bi-upload"} />
          <ButtonWithIcon text={"Template"} iconName={"bi-download"} />
          <ButtonWithIcon text={"Export"} iconName={"bi-download"} />
        </div>
      </div>
      {/* profile summary bottom table section  */}
      <div className="horizontal-scroll-container">
        <Table className="custom-table mt-4">
          <thead>
            <tr>
              <th className="text-center">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  id={`default-checkbox`}
                  label={""}
                />
              </th>
              <th>Select all</th>
              <th>Status</th>
              <th>SKU GTINS</th>
              <th>Product Names</th>
              <th>Retailer Name</th>
              <th>Primary Links</th>
              <th>Secondary Links</th>
              <th>Created date</th>
              <th>Last updated date</th>
              <th>Updated by</th>
            </tr>
          </thead>
          <tbody>
            <tr className="custom-tr">
              <td className="text-center ">
                <Form.Check // prettier-ignore
                  type="checkbox"
                  id={`default-checkbox`}
                  label={""}
                />
              </td>
              <td className="d-flex">
                <div className="pr-4">
                  <i
                    class="bi bi-pencil-fill"
                    onClick={() => setModalShow(true)}
                  ></i>
                </div>
                <div>
                  <i class="bi bi-trash3"></i>
                </div>
              </td>
              <td>
                <div className="active-circle"></div>
              </td>
              <td className="text-center">4902430725675</td>
              <td className="text-center">
                <b>Pamper - Baby Dry Dispers N..</b>
              </td>
              <td className="text-center">Amazon</td>
              <td className="text-center">Amazon</td>
              <td className="text-center">Amazon</td>
              <td className="text-center">11 April 2024</td>
              <td className="text-center">11 April 2024</td>
              <td className="text-center"></td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default ProductSummary;
