import React, { useState } from "react";
import Chips from "react-chips"; // Assuming the path to your Chips component

const theme = {
  chipsContainer: {
    display: "flex",
    position: "relative",
    border: "none",
    backgroundColor: "#fff",
    font: "16px Lato",
    minHeight: 26,
    alignItems: "center",
    flexWrap: "wrap",
    padding: "5px",
    borderRadius: 5,
    ":focus": {
      border: "none",
    },
  },
  container: {
    flex: 1,
  },
  containerOpen: {},
  input: {
    border: "none",
    outline: "none",
    boxSizing: "border-box",
    width: "100%",
    padding: 5,
    margin: 2.5,
  },
  suggestionsContainer: {},
  suggestionsList: {
    borderRadius: 20,
    position: "absolute",
    border: "none",
    zIndex: 10,
    left: 0,
    top: "100%",
    width: "100%",
    backgroundColor: "#fff",
    listStyle: "none",
    padding: 0,
    margin: 0,
    boxShadow: "0px 5px 10px rgba(0, 0, 0, 0.1)",
    textTransform: "capitalize",
  },
  suggestion: {
    padding: "10px 15px",
  },
  suggestionHighlighted: {
    background: "#fff",
    borderRadius: 20,
    cursor: "pointer",
  },
  sectionContainer: {},
  sectionTitle: {},
};

export const chipTheme = {
  chip: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 3,
    paddingBottom: 3,
    background: "#efefef",
    margin: "2.5px",
    borderRadius: 15,
    cursor: "default",
    textTransform: "capitalize",
  },
  chipSelected: {
    background: "#efefef",
  },
  chipRemove: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 12,
    paddingTop: 3,
    paddingBottom: 3,
    fontSize: 20,
    fontWeight: "300",
    cursor: "pointer",
    ":hover": {
      color: "black",
    },
  },
};
const ChipInput = ({ chips, handleChange, suggestions }) => {
  return (
    <div>
      <Chips
        value={chips} // Pass the current chip state
        onChange={handleChange} // Function to update chip state
        suggestions={suggestions} // Provide suggestions
        placeholder="Enter here"
        theme={theme}
        chipTheme={chipTheme}
      />
    </div>
  );
};

export default ChipInput;
