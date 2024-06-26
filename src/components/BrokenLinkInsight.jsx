import React, { useRef, useState } from "react";
import Table from "react-bootstrap/Table";
import OutlineButton from "./OutlineButton";
import ProgressBar from "react-bootstrap/ProgressBar";

const tableData = [
  {
    id: 1,
    title: "Pampers",
    noOfRetailers: 22,
    noOfLinks: 14,
    noOfUniqueLinks: 44,
    noOfPrimaryLinks: 40,
    noOfSecondaryLinks: 40,
  },
  {
    id: 2,
    title: "Pampers",
    noOfRetailers: 24,
    noOfLinks: 16,
    noOfUniqueLinks: 47,
    noOfPrimaryLinks: 43,
    noOfSecondaryLinks: 43,
  },
  {
    id: 3,
    title: "Pampers",
    noOfRetailers: 27,
    noOfLinks: 18,
    noOfUniqueLinks: 48,
    noOfPrimaryLinks: 46,
    noOfSecondaryLinks: 46,
  },
  {
    id: 4,
    title: "Pampers",
    noOfRetailers: 18,
    noOfLinks: 11,
    noOfUniqueLinks: 24,
    noOfPrimaryLinks: 32,
    noOfSecondaryLinks: 32,
  },
  {
    id: 5,
    title: "Pampers",
    noOfRetailers: 32,
    noOfLinks: 22,
    noOfUniqueLinks: 49,
    noOfPrimaryLinks: 48,
    noOfSecondaryLinks: 48,
  },
];

const BrokenLinkInsight = () => {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(null);
  const [scrollLeft, setScrollLeft] = useState(0);
 
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
    <div className="retailer-insight-container">
      {/* product  table section  */}
      <div
        className="horizontal-scroll-container"
        ref={containerRef}
        style={{ overflowX: "auto", cursor: "grab" }}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div>
          <div className="mt-5 px-4">
            <p className="product-insight-title px-3">Broken Link Insights</p>
          </div>
          <div className="retailer-insight-table">
            <Table>
              <thead>
                <tr>
                  <th className="px-4">
                    <div className="d-flex justify-content-center">
                      <OutlineButton
                        text={"Websites"}
                        iconName={"bi-plus-lg"}
                      />
                    </div>
                  </th>

                  <th className="px-4">
                    <div className="table-head-title">
                      Number of Broken links
                    </div>
                  </th>
                  <th className="px-4">
                    <div className="table-head-title">
                      Number of unique broken links
                    </div>
                  </th>
                  <th className="px-4">
                    <div className="table-head-title">% of broken links</div>
                  </th>
                  <th className="px-4">
                    <div className="table-head-title">
                      % of unique broken links (primary retailer)
                    </div>
                  </th>
                  <th className="px-4">
                    <div className="table-head-title">
                      Number of secondary retailer links
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
                    <td className="text-center first-cell ">
                      <div className="insight-title py-2">{item.title}</div>
                      <div className="first-cell-border"></div>
                    </td>
                    <td className="px-4 ">
                      <div className="insight-title py-2">
                        {item.noOfRetailers}
                      </div>
                    </td>
                    <td className="px-4  ">
                      <div className="d-flex align-items-center gap-3 py-2">
                        <div>
                          <div className="insight-title">{item.noOfLinks}</div>
                        </div>
                        <div className="d-flex progress-bar">
                          <ProgressBar now={item.noOfLinks} w />
                        </div>
                      </div>
                    </td>
                    <td className="px-4">
                      <div className="d-flex align-items-center gap-3 py-2">
                        <div>
                          <div className="insight-title">
                            {item.noOfUniqueLinks}
                          </div>
                        </div>
                        <div className="d-flex progress-bar">
                          <ProgressBar now={40} />
                        </div>
                      </div>
                    </td>
                    <td className="px-4">
                      <div className="d-flex align-items-center gap-3 py-2">
                        <div>
                          <div className="insight-title">
                            {item.noOfPrimaryLinks}
                          </div>
                        </div>
                        <div className="d-flex progress-bar">
                          <ProgressBar now={item.noOfPrimaryLinks} />
                        </div>
                      </div>
                    </td>
                    <td className="px-4">
                      <div className="d-flex align-items-center gap-3 py-2">
                        <div>
                          <div className="insight-title">
                            {item.noOfSecondaryLinks}
                          </div>
                        </div>
                        <div className="d-flex progress-bar">
                          <ProgressBar now={item.noOfSecondaryLinks} />
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
    </div>
  );
};

export default BrokenLinkInsight;
