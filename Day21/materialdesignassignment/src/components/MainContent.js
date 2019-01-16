import React from "react";
import ImageCarousel from "./ImageCarousel";
import CardSection from "./CardSection";
import Banner from "./Banner";
import Map from './Map';
import ContactForm from "./ContactForm";
import Footer from "./Footer";
const MainContent = () => {
  return (
    <div id="home">
      <ImageCarousel />
      <br />
      <div id="features" className="row">
        <div className="col-md-4">
          <CardSection icon="LocalFlorist"
            title="Beautiful"
            content="The surroundings are very beautiful and you'll love being here."
          />
        </div>
        <div className="col-md-4">
          <CardSection icon="NatureIcon"
            title="Natural"
            content="The surroundings are very natural and you'll love being here."
          />
        </div>
        <div className="col-md-4">
          <CardSection icon="FastFood"
            title="Hygienic"
            content="The food is very hygienic and you'll love being here."
          />
        </div>
      </div><br/>
      <Banner/>
      <br/>
      <div id="location">
      <Map/></div><br/>
      <div id="contact"><ContactForm/></div><br/>
      <Footer/>
    </div>
  );
};

export default MainContent;
