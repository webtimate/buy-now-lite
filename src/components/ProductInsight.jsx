import React, { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import OutlineButton from "./OutlineButton";
import ProgressBar from "react-bootstrap/ProgressBar";
import Form from "react-bootstrap/Form";

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
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [modalShow, setModalShow] = React.useState(false);
  const [isChevronDown, setIsChevronDown] = useState(true);
  const [text, setText] = useState("");
  const [confirmModalShow, setConfirmModalShow] = useState(false);
  const handleModal = (args) => {
    if (args.id === 1) {
      setModalShow(true);
    }
  };
  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const x = e.clientX - containerRef.current.offsetLeft;
    const scrollOffset = x - startX;
    containerRef.current.scrollLeft = scrollLeft - scrollOffset;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };
  return (
    <div className="m-3 bg-white retailer-insight-container">
      {/* product  table section  */}
   
        <div style={{ padding: 20 }}>
          <div className="px-3 py-2">
            <p className="product-insight-title">Product Insights</p>
          </div>
          <div className="retailer-insight-table">
            <Table>
              <thead>
                <tr>
                  <th className="px-2">
                    <div className="d-flex justify-content-center">
                      <OutlineButton
                        text={"Websites"}
                        iconName={"bi-plus-lg"}
                      />
                    </div>
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
                  <tr
                    className="retailer-insight-table-body px-4"
                    key={item.id}
                  >
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
      </div>

  );
};

export default ProductInsight;
