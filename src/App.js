import { Fragment, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Tables from "./components/Tables";
import Footer from "./components/Footer";

function App() {
  // to disable zooming in browser
  // useEffect(() => {
  //   const handleWheel = (event) => {
  //     if (event.ctrlKey || event.metaKey) {
  //       event.preventDefault();
  //     }
  //   };

  //   const handleKeyDown = (event) => {
  //     if (
  //       (event.ctrlKey || event.metaKey) &&
  //       (event.key === "+" || event.key === "-")
  //     ) {
  //       event.preventDefault();
  //     }
  //   };

  //   window.addEventListener("wheel", handleWheel);
  //   window.addEventListener("keydown", handleKeyDown);

  //   return () => {
  //     window.removeEventListener("wheel", handleWheel);
  //     window.removeEventListener("keydown", handleKeyDown);
  //   };
  // }, []);

  return (
    <Fragment>
      <Header />
      <Tables />
      <Footer />
    </Fragment>
  );
}

export default App;
