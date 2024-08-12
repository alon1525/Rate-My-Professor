import React from "react";
import img from "../Assets/professor-image.jpg";
import "../App.css";
import SignInButton from "./SignInButton";

const Section = ({ height = "200px" }) => {
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
    marginTop: "20px",
    marginLeft: "6px",
  };

  // Inline style for content
  const contentStyle = {
    color: "#405D72",
    paddingRight: "70px",
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

  return (
    <div style={sectionStyle}>
      <div style={colorBackgroundStyle}>
        <div style={imageBackgroundStyle}></div>
      </div>
      <div style={colorBackgroundStyle}>
        <div style={contentStyle}>
          <h1 className="headHeader">
            מצא ודרג את המרצים שלך באוניברסיטת בן-גוריון
          </h1>
          <p className="bguText">
            גלה פרופילים מפורטים של המרצים שלך באוניברסיטת בן-גוריון ושתף את
            התובנות שלך! הפלטפורמה שלנו מאפשרת לך לחפש את המרצים שלך, לקרוא
            ביקורות מתלמידים אחרים ולתרום את הדירוגים שלך. אם אתה מחפש משוב על
            איכות ההוראה, מועילות או חוויות כלליות, תוכל למצוא את הכל כאן. דרג
            את המרצים שלך ועזור לאחרים לקבל החלטות מושכלות לגבי השכלתם
            באוניברסיטת בן-גוריון
          </p>
          <div className="paddingButton">
            <SignInButton text="Get Started" where="" />
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
