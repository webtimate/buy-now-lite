import React, { useState } from "react";
import Pagination from "react-bootstrap/Pagination";

export default function AppPagination() {
  const [activePage, setActivePage] = useState(1);

  const handlePageClick = (pageNumber) => {
    setActivePage(pageNumber);
  };
  return (
    <Pagination>
      <Pagination.First className="style-pagination">First</Pagination.First>{" "}
      {/* Disabled First button with text */}
      <Pagination.Prev>Previous</Pagination.Prev>{" "}
      {/* Disabled Previous button with text */}
      {Array.from({ length: 5 }, (_, i) => (
        <Pagination.Item
          key={i + 1}
          active={activePage === i + 1}
          onClick={() => handlePageClick(i + 1)}
        >
          {i + 1}
        </Pagination.Item>
      ))}
      {/* Inactive item for omitted pages with text */}
      <Pagination.Next className="style-pagination">Next</Pagination.Next>{" "}
      {/* Enabled Next button with text */}
      <Pagination.Last className="style-pagination">Last</Pagination.Last>{" "}
      {/* Enabled Last button with text */}
    </Pagination>
  );
}
