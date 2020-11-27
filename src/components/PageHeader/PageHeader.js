
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

class PageHeader extends React.Component {
  render() {
    return (
      <div className="page-header header-filter">
        <div className="squares square1" />
        <div className="squares square2" />
        <div className="squares square3" />
        <div className="squares square4" />
        <div className="squares square5" />
        <div className="squares square6" />
        <div className="squares square7" />
        <Container>
          <div className="content-center brand">
            <h1 className="h1-seo">Hello there</h1>
            <h4 className=" d-none d-block">
              Welcome to my portfolio website. Well I try to encompass the best 
              of the projects I've done till now in this website. The live preview of all 
              my projects is available on my github repository. This Portfolio consists only 
              some snapshots of my previous projects.
            </h4>
          </div>
        </Container>
      </div>
    );
  }
}

export default PageHeader;
