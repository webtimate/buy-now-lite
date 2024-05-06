import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import OutlineButton from "./OutlineButton";
import ProgressBar from "react-bootstrap/ProgressBar";
import CustomModal from "./Modal";
import {
  EXTERNAL_USER_MANAGEMENT_SCREEN,
  externalUserManagementData,
} from "../constant";

const tableData = [
  {
    id: 1,
    title: "Pampers",
    noOfProducts: 28,
    noOfProductLinks: 18,

    noOfUniqueProductLinks: 54,
  },
];

const ProductInsight = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [text, setText] = useState("");

  return (
    <div className="retailer-insight-container">
      {/* product  table section  */}
      <div>
        <div className="mt-5 px-4">
          <p className="product-insight-title px-3">Product Insights</p>
        </div>
        <div className="retailer-insight-table">
          <Table>
            <thead>
              <tr>
                <th className="px-4">
                  <OutlineButton text={"Websites"} iconName={"bi-plus-lg"} />
                </th>

                <th className="px-4">
                  <div className="table-head-title">Number of products</div>
                </th>
                <th className="px-4">
                  <div className="table-head-title">
                    Number of products links
                  </div>
                </th>
                <th className="px-4">
                  <div className="table-head-title">
                    Number of unique products links
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {tableData.map((item, index) => (
                <tr className="retailer-insight-table-body px-4" key={item.id}>
                  <td className="text-center  ">
                    <div className="insight-title py-2">{item.title}</div>
                  </td>
                  <td className="px-4 ">
                    <div className="insight-title py-2">
                      {item.noOfProducts}
                    </div>
                  </td>
                  <td className="px-4  ">
                    <div className="insight-title py-2">
                      {item.noOfProductLinks}
                    </div>
                  </td>
                  <td className="px-4">
                    <div className="d-flex align-items-center gap-3 py-2">
                      <div>
                        <div className="insight-title">
                          {item.noOfUniqueProductLinks}
                        </div>
                      </div>
                      <div className="d-flex progress-bar">
                        <ProgressBar now={40} />
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
      <CustomModal
        modalTitle="External User Management"
        show={modalShow}
        onHide={() => setModalShow(false)}
        text={text}
        setText={setText}
        modalData={externalUserManagementData}
        screen={EXTERNAL_USER_MANAGEMENT_SCREEN}
      />
    </div>
  );
};

export default ProductInsight;
