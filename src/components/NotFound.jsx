import React from "react";
import withLayout from "../pages/Layout";
import OutlineButton from "./OutlineButton";

const NotFound = () => {
  return (
    <div className="main-container not-found-container">
      <div>
        <div className="not-found-title">404</div>
        <div className="not-found-subtitle">Page not found</div>
        <div className="not-found-description my-4">
          It is a long established fact that a reader will be distracted by the{" "}
          <br />
          readable content of a page when looking at its layout
        </div>
        <div className="d-flex justify-content-center">
          <OutlineButton
            text={"Go Back"}
            className="page-not-found-btn"
            onClick={() => {}}
          />
        </div>
      </div>
    </div>
  );
};

export default withLayout(NotFound);
