
import React from "react";
import PageHeader from "../components/PageHeader/PageHeader.js";
import Footer from "../components/Footer/Footer.js";
import ProfilePage from "./Profile.js";
import Signup from "./Sections/Signup.js";
import ExamplesNavbar from "../components/Navbars/ExamplesNavbar.js";

class LandingPage extends React.Component {
  componentDidMount() {
    document.body.classList.toggle("index-page");
  }
  componentWillUnmount() {
    document.body.classList.toggle("index-page");
  }
  render() {
    return (
      <>
        <ExamplesNavbar />
        <div className="wrapper">
          <PageHeader />
          <div className="main">
            <ProfilePage />
            <Signup />
          </div>
          <Footer />
          
        </div>
      </>
    );
  }
}

export default LandingPage;
