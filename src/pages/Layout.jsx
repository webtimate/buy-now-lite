import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const withLayout = (WrappedComponent) => {
  // Return a functional component that renders the layout
  return function WithLayout(props) {
    return (
      <div>
        <Header />
        <WrappedComponent {...props} />
        <Footer />
      </div>
    );
  };
};

export default withLayout;
