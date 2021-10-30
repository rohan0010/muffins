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
          <h1>challenges</h1>
          <br/>
    
         </div>

        <ul>
          <li>1.	People who live alone are more likely to be poor, and poverty is increasingly more likely the longer they live alone.</li>
          <li>2.  Many older people who live alone say they feel lonely and isolated.</li>
          <li>3.  Because eating is a social activity for most people, some older people who live alone do not prepare full, balanced meals. Thus, undernutrition becomes a concern.</li>
          <li>4.  Among people with health problems or difficulty seeing or hearing, it is all too easy for new or worsening symptoms of disease to go unnoticed.</li>
          <li>5.  Many older people who live alone have problems following directions for prescribed treatments.</li>
          </ul> 
  <br/>       
<p>
Today an old age home is a place of care and compassion, a place for sharing smiles and tears, a place for fun and frolic, a place of learning, a place called home in aging years.The quality of an old age home is defined not only by the accommodation it provides but also by the opportunities it offers to be active, to be mentally and physically stimulated and engaged.Changing socio-economic patterns, such as women becoming economically active and participating in the workforce, and increasing mobility are all leading to more nuclear households, altering social norms of elder care in the family. Despite the dire need, elder care in India is still largely neglected and the development of the ecosystem is primitive. 
</p>


      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
