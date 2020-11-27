import React from "react";
import classnames from "classnames";
// javascript plugin used to create scrollbars on windows
import PerfectScrollbar from "perfect-scrollbar";
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  NavItem,
  NavLink,
  Nav,
  Table,
  TabContent,
  TabPane,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  UncontrolledCarousel
} from "reactstrap";

// core components


import slide1 from '../assets/img/reactchatapp.png'
import slide2 from '../assets/img/chatvortexRe.png'
import slide3 from '../assets/img/chatvortexml1.png'
import image from '../assets/img/niketprofile.jpg'

import shape1 from '../assets/img/path2.png'
import dots1 from  '../assets/img/dots.png'

const carouselItems = [
  {
    src: slide1,
    altText: "Image 1",
    caption: "A Whatsapp Clone"
  },
  {
    src: slide2,
    altText: "Image 2",
    caption: "Register page in chat app"
  },
  {
    src: slide3, 
    altText: "Image 3",
    caption: "Web chat messaging app"
  }
];

let ps = null;
class ProfilePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tabs: 1
    };
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      document.documentElement.className += " perfect-scrollbar-on";
      document.documentElement.classList.remove("perfect-scrollbar-off");
      let tables = document.querySelectorAll(".table-responsive");
      for (let i = 0; i < tables.length; i++) {
        ps = new PerfectScrollbar(tables[i]);
      }
    }
    document.body.classList.toggle("profile-page");
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
      document.documentElement.className += " perfect-scrollbar-off";
      document.documentElement.classList.remove("perfect-scrollbar-on");
    }
    document.body.classList.toggle("profile-page");
  }
  toggleTabs = (e, stateName, index) => {
    e.preventDefault();
    this.setState({
      [stateName]: index
    });
  };
  render() {
    return (
      <>
        
        <div className="wrapper">
          
            <img
              alt="..."
              className="dots"
              src={dots1}
            />
            <img
              alt="..."
              className="path"
              src={shape1}
            />
            <Container className="align-items-center">
              <Row>
                <Col lg="6" md="6">
                  <h1 className="profile-title text-left">Niket Kulkarni</h1>
                  <h5 className="text-on-back">01</h5>
                  <p className="profile-description">
                   A born foodie and an extrovert at talking are few of my 
                   points that define me as a person. Apart from that I take part 
                   in college activities and network with people of all backgrounds.
                   A bit of laziness does exists in me but I'm the goto guy for every
                   problem that comes in the way of work.
                  </p>
                  <div className="btn-wrapper profile pt-3">
                    <Button
                      className="btn-icon btn-round"
                      color="twitter"
                      href="https://twitter.com/NiketKulkarni"
                      rel="noopener noreferrer"
                      id="tooltip639225725"
                      target="_blank"
                    >
                      <i className="fab fa-twitter" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip639225725">
                      Follow me
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="facebook"
                      href="https://www.facebook.com/niket.kulkarni.94"
                      id="tooltip982846143"
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip982846143">
                      Send me Friend Request !
                    </UncontrolledTooltip>
                    <Button
                      className="btn-icon btn-round"
                      color="black"
                      id="tooltip951161185"
                      href="https://github.com/nikmk"
                      
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" />
                    </Button>
                    <UncontrolledTooltip delay={0} target="tooltip951161185">
                      Follow me on Github
                    </UncontrolledTooltip>
                  </div>
                </Col>
                <Col className="ml-auto mr-auto" lg="4" md="6">
                  <Card className="card-coin card-plain">
                    <CardHeader>
                      <img
                        alt="..."
                        className="img-center img-fluid rounded-circle"
                        src= {image}
                      />
                      <h4 className="title">Bio</h4>
                    </CardHeader>
                    <CardBody>
                      <Nav
                        className="nav-tabs-primary justify-content-center"
                        tabs
                      >
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 1
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 1)}
                            href="#pablo"
                          >
                            Education
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 2
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 2)}
                            href="#pablo"
                          >
                            Skills
                          </NavLink>
                        </NavItem>
                        <NavItem>
                          <NavLink
                            className={classnames({
                              active: this.state.tabs === 3
                            })}
                            onClick={e => this.toggleTabs(e, "tabs", 3)}
                            href="#pablo"
                          >
                            Interests
                          </NavLink>
                        </NavItem>
                      </Nav>
                      <TabContent
                        className="tab-subcategories"
                        activeTab={"tab" + this.state.tabs}
                      >
                        <TabPane tabId="tab1">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">School/College</th>
                                <th className="header">Study</th>
                                <th className="header">Year</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Lilavatibai Podar , Mumbai</td>
                                <td>10th</td>
                                <td>Batch 2016</td>
                              </tr>
                              <tr>
                                <td>RN Podar, Mumbai</td>
                                <td>12th</td>
                                <td>Batch 2018</td>
                              </tr>
                              <tr>
                                <td>MIT, Manipal</td>
                                <td>Electrical and Electronics Engineering</td>
                                <td>Batch 2022</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab2">
                        <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">Software Devlopment</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>Languages: Javascript, Python and C</td>
                              </tr>
                              <tr>
                                <td>Frontend: Reatjs , Material- UI and Bootstrap</td>
                              </tr>
                              <tr>
                                <td>Backend: Nodejs(Express) and Python(Flask)</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                        <TabPane tabId="tab3">
                          <Table className="tablesorter" responsive>
                            <thead className="text-primary">
                              <tr>
                                <th className="header">General Interests</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td>End to End encryption via JWT token </td>
                              </tr>
                              <tr>
                                <td>Decentralised networks and their respective protocols</td>
                              </tr>
                              <tr>
                                <td>Understanding how various data architectures are created and scaled in startups.</td>
                              </tr>
                            </tbody>
                          </Table>
                        </TabPane>
                      </TabContent>
                    </CardBody>
                  </Card>
                </Col>
              </Row>
            </Container>
          {/* </div> */}
          <div className="section">
            <Container>
              <Row className="justify-content-between">
                <Col md="6">
                  <Row className="justify-content-between align-items-center ">
                    <UncontrolledCarousel items={carouselItems} controls={false} slide={true}/>
                  </Row>
                </Col>
                <Col md="5">
                  <h1 className="profile-title text-left">Projects</h1>
                  <h5 className="text-on-back">02</h5>
                  <p className="profile-description text-left">
                   A multi subject enthusiast does have multiple projects
                   under his hood. I myself have developed small scale apps
                   ranging from Chatting applications on Web to UI designing 
                   on Mobile applications. Head over to my Github Repository 
                   for a full muenu of exciting projects. 
                  </p>
                  <div className="btn-wrapper pt-3">
                    <Button
                      className="btn-simple"
                      color="info"
                      href="https://github.com/nikmk"
                      // onClick={e => e.preventDefault()}
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      <i className="fab fa-github" /> Github 
                    </Button>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </div>

      </>
    );
  }
}

export default ProfilePage;
