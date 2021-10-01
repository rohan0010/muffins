import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
// import LocationMap from "../../components/contact/LocationMap";

const Contact = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>MuffinShield | Contact</title>
        <meta
          name="description"
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne >
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            {/* <div className="contact-map mb-10"> */}
              {/* <LocationMap latitude="28.4744" longitude="77.5040" /> */}
            {/* </div> */}
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>9716022280</p>
                      <p>9818880818</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href="mailto:muffins370@gmail.com">muffins370@gmail.com</a>
                      </p>
                      <p>
                        <a href="//themuffins.in/">https://themuffins.in/</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                    
                      <p> Muffin Shield LLP
                        <br/>
                      Registered Office A 401,                        <br/>
                      4TH FLOOR TOWER A                         <br/>
                      PRISTINE AVENUE GC II GAUR 
         CITY

, 
GREATER NOIDA ,                        <br/>
Uttar Pradesh,201306,                        <br/>


PAN - ABQFM0866R
<br/>

MAIN OBJECT  –                          <br/>
BUSINESS OF HOTELS , RESTAURANT, HOLIDAY CAMPS, GUEST HOUSE, EVENT MANAGEMENT  -----OWNED AND LEASE OUT PROPERTIES FOR THE SUPPORT OF MAIN OBJECT 
<br/>

Director details : 
<br/>

PIYUS ARORA                       <br/>
– DIN- 09054059                       <br/>
PAN – AGMPA7492E,                         <br/>
 ADHAAR – 3255-7987-6540                        <br/>

Email Id- piyush.sqft@gmail.com  ,                        <br/>
 Ph No. 9716022280
 <br/>

 PAKHEE TYAGI                         <br/>
- DIN-  06776043  ,                        <br/>
 PAN- ARPRT3735K, 
Ph. No. 9818880818,                        <br/>
 Email Id - pakheetyagi@gmail.com                        <br/>


 </p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>Get In Touch</h2>
                  </div>
                  <form className="contact-form-style">
                    <div className="row">
                      <div className="col-lg-6">
                        <input name="name" placeholder="Name*" type="text" />
                      </div>
                      <div className="col-lg-6">
                        <input name="email" placeholder="Email*" type="email" />
                      </div>
                      <div className="col-lg-12">
                        <input
                          name="subject"
                          placeholder="Subject*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          name="message"
                          placeholder="Your Message*"
                          defaultValue={""}
                        />
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
};

export default Contact;
