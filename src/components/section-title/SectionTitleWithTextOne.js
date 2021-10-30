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
          <h1>How does we propose to solve –</h1>
          <br/>
    
         </div>
  <p>          With advancing age, people often lose motor functions. Performing day to day activities becomes a daunting task.  Our old age home provides help with daily activities by dedicated caregiver who can help with the everyday chores around the house. Doctors are always at hand and emergency services are available 24×7 and also the elderly can have someone with them who can schedule appointments with doctors and go with them to the chamber. In case of a medical emergency, it’s good to have a person who can take care of hospitalisation. Safety is definitely an issue for senior citizens. We provide steady security in our old age home by giving them protection from intruders and help them live a safe and secure life.
</p>
<div className="welcome-content text-center">
          <h1>IDEA – EARN AND LIVE  –</h1>
          <br/>
    
         </div>

         <p>Services cost money. Consequently, old age homes can be expensive; the higher the cost the better the services. Mostly, elderly people are pensioners or they get money from their children. They don’t have a lot of money to spend and there are medical bills to pay. This is one of the primary challenges. Here comes our role by providing jobs to old age people in whichever field they are specialized in through our app. Our app will make them independent enough to pay their own bills without depending much on their children. As whatever be the age it is necessary to be as active as one is able to be.We have dedicated caregivers on our payroll who will provide all these services and more. We not only help the elderly with support services but also with recreation like taking them for an outing or simply staying at home and playing a word game and hosting daily satsang. We allow school students to play and engage with elderly residents to facilitate community interaction of elder residents takes care of their emotional and recreational needs effectively. We organize various activities like crochet, knitting, cooking, gardening Painting, arts and crafts, origami to help them remain flexible and retain some element of agility.Our Old age home also organizes other activities such as Bird watching, trekking, short two-day vacations to a nearby place which will bring excitement, laughter, social bonding and exploration.</p>
      </div>
    </div>
  );
};

SectionTitleWithText.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default SectionTitleWithText;
