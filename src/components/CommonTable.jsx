import React from "react";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import { tableModalData } from "../constant";



const CommonTable = () => {
  return (
    <Table className="custom-table mt-4">
      <thead>
        <tr>
          <th>
            <div>
              <Form.Check // prettier-ignore
                type="checkbox"
                id={`default-checkbox`}
                label={""}
                className="initial-spacing-table"
              />
            </div>
          </th>
          <th className="table-head-spacing"></th>

          <th>Retailer Name</th>
          <th>Buy Now Url</th>
          <th>Secondary Url</th>
        </tr>
      </thead>
      <tbody>
        {tableModalData.map((item, index) => (
          <tr key={item.id}>
            <td>
              <div>
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
                  <i class="bi bi-trash h5"></i>
                </div>
              </div>
            </td>

            <td>
              <b>{item.productName}</b>{" "}
            </td>
            <td>https://www.amazon.b.co.in/en-in</td>
            <td>https://www.amazon.b.co.in/en-in</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default CommonTable;
