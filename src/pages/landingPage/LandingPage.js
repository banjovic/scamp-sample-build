import React from "react";
import BaseContainer from "../../components/baseContainer/BaseContainer";
import Blog from "../../components/blog/Blog";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";
import NavBar from "../../components/navBar/NavBar";
import Newsletter from "../../components/newsletter/Newsletter";
import SimpleContainer from "../../components/simpleContainer/SimpleContainer";

const LandingPage = () => {
  return (
    <React.Fragment>
      <SimpleContainer>
        <NavBar />
        <Hero />
        <Blog />
      </SimpleContainer>
      <BaseContainer>
        <Newsletter />
        <Footer />
      </BaseContainer>
    </React.Fragment>
  );
};

export default LandingPage;
