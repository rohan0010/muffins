import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
// import BannerOne from "../../wrappers/banner/BannerOne";
// import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
// import TabProductFive from "../../wrappers/product/TabProductFive";

const HomeFashionTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>MuffinShield </title>
        <meta
          name="description"
          // content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
               <div className="container mt-5 mb-5">
        <div className="welcome-content text-center">
          <h5>Welcome To MuffinShield</h5>
          <h1>Old Age Home</h1>
          </div>
          </div>
        {/* hero slider */}
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        <div className="container mt-5 mb-5">
        <div className="welcome-content text-center">
          <p>Loneliness acts as a fertilizer for other diseases, “The biology of loneliness can accelerate the build up of plaque in arteries, help cancer cells grow and spread, and promote inflammation in the brain leading to Alzheimer’s disease. Loneliness promotes several different types of wear and tear on the body.” </p>
          </div>
          </div>
        {/* banner */}
        {/* <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" /> */}
        {/* tab product */}
        {/* <TabProductFive spaceBottomClass="pb-60" category="accessories" /> */}
        {/* blog featured */}
        {/* <BlogFeatured spaceBottomClass="pb-55" /> */}
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
