import PropTypes from "prop-types";
import React from "react";

const SectionTitleWithText = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`welcome-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="welcome-content text-center">
          <h5>Who Are We</h5>
          <h1>Welcome To Muffin Shield</h1>
          <br/>
    
         
       <p>
         
         

       <b>MAIN OBJECT </b>
       <br/>
        BUSINESS OF HOTELS , RESTAURANT, HOLIDAY CAMPS, GUEST HOUSE, EVENT MANAGEMENT OWNED AND LEASE OUT PROPERTIES FOR THE SUPPORT OF MAIN OBJECT
</p>

        </div>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
