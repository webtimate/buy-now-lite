import React from "react";
import Table from "react-bootstrap/Table";
import OutlineButton from "./OutlineButton";
import ProgressBar from "react-bootstrap/ProgressBar";

const tableData = [
  {
    id: 1,
    title: "Pampers",
    noOfProducts: 28,
    noOfProductLinks: 18,
    noOfUniqueProductsLinks: 54,
  },
];

const ProductInsight = () => {
  return (
    <div className="mt-3 bg-white product-insight-container">
      <div className="insight-title-container">
        <p className="product-insight-title">Product Insight</p>
      </div>
      {/* product  table section  */}
      <div>
        <Table>
          <thead>
            <tr>
              <th>
                <div className="d-flex justify-content-center">
                  <OutlineButton text={"Websites"} iconName={"bi-plus-lg"} />
                </div>
              </th>

              <th>
                <div className="table-head-title">Number of products</div>
              </th>
              <th>
                <div className="table-head-title">Number of products Links</div>
              </th>
              <th>
                <div className="table-head-title">
                  Number of unique products links
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((item, index) => (
              <tr className="custom-tr" key={item.id}>
                <td className="text-center">
                  <div className="insight-title">{item.title}</div>
                </td>
                <td>
                  <div className="insight-title">{item.noOfProducts}</div>
                </td>
                <td>
                  <div className="insight-title">{item.noOfProductLinks}</div>
                </td>
                <td>
                  <div className="d-flex align-items-center gap-3">
                    <div>
                      <div className="insight-title">
                        {item.noOfUniqueProductsLinks}
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
  );
};

export default ProductInsight;
