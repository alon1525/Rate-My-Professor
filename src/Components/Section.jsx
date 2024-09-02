import React, { useState } from "react";
import img from "../Assets/professor-image.jpg";
import "../App.css";
import SignInButton from "./SignInButton";
import SearchBar from "./SearchBar";

const Section = ({ height = "200px" }) => {
  const [query, setQuery] = useState(""); // Lifted state

  // Inline style for the section
  const sectionStyle = {
    height: height,
    width: "100%",
    position: "relative",
    overflow: "hidden",
    display: "flex",
    flexDirection: "row",
  };

  // Inline style for the color background
  const colorBackgroundStyle = {
    backgroundColor: "#F7E7DC", // Replace with your desired color
    flex: 1,
    height: "100%",
    display: "flex",
    alignItems: "center", // Center content vertically
    justifyContent: "center", // Center content horizontally
    position: "relative", // Make it a positioned container for absolute positioning
  };

  // Inline style for the image background
  const imageBackgroundStyle = {
    backgroundImage: `url(${img})`,
    backgroundSize: "cover", // Ensure the image covers the container
    backgroundPosition: "center", // Center the image
    flex: 1,
    height: "100%",
    backgroundRepeat: "no-repeat", // Prevent repeating the image
    position: "relative",
    // Add animation class here
  };

  // Inline style for content
  const contentStyle = {
    color: "#405D72",
    gap: "20px",
    left: "0%",
    bottom: "25%",
    boxSizing: "border-box",
    textAlign: "right",
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end", // Align content to the right
    justifyContent: "center", // Center content vertically
    maxWidth: "90%",
    zIndex: 2,
  };

  // List items data
  const listItems = [
    "חפש את המרצה שלך",
    "דרג את המרצים",
  ];

  return (
    <div style={sectionStyle}>
      <div className="image-background-animate" style={imageBackgroundStyle}></div>
      <div style={colorBackgroundStyle}>
        <div style={contentStyle}>
          <h1 className="headHeader">
            מצא ודרג את המרצים שלך באוניברסיטת בן-גוריון
          </h1>
          <ul className="listContainer">
            {listItems.map((item, index) => (
              <li key={index} className="listItem">
                <span className="listText">{item}</span>
                <span className="circleWithCheckmark"></span>
              </li>
            ))}
          </ul>
          <div className="paddingButton">
            <SignInButton 
              isSquare={true} 
              text="חיפוש" 
              where={`/searchPage/${encodeURIComponent(query)}`} // Pass query to SignInButton
              paddingRight={"20px"} 
              buttonPadding="18px 30px" 
            />
            <SearchBar onChange={setQuery} />{console.log(query)}
          </div>
        </div>
      </div>
      <div className="waveyTop" style={{ zIndex: -2 }}>
        {/* SVG or other decorative elements can go here */}
      </div>
    </div>
  );
};

export default Section;
