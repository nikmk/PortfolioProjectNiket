
import React from "react";
// import {NotificationContainer, NotificationManager} from 'react-notifications';


import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardImg,
  CardTitle,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col,
  
} from "reactstrap";

function Notify ({currentState,currentStatus}){
  if (currentState){
    if (currentStatus){
    return(
      <h2 style={{color: "white", margin:"0 10%", backgroundColor: '#00ffff', textAlign: "center"}}>Message Sent</h2>
    )}else{
      <h2 style={{color: "white", margin:"0 10%", backgroundColor: '#ff0000', textAlign: "center"}}>Error Sending Message</h2>
    }
  }else {
    return(
      <div></div>
    )
  }
   
}




class Signup extends React.Component {
  constructor(props){
    super(props)
    this.state={
      name:'',
      email:'',
      phone:'',
      company:'',
      message:'',
      notify: false,
      status: false

    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)

  }



  onChange(event){
    const target = event.target
      const name = target.name
      const value = target.value
      this.setState({
        [name]: value
      })
  }
  onSubmit(event) {
    event.preventDefault()
    fetch('https://portfolionikmk.azurewebsites.net/api/ContactTrigger1', {
      method: 'POST',
      // mode:'no-cors',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(this.state)
    })
      .then(async (response) => {
        this.setState({
          name:'',
          email:'',
          phone:'',
          company:'',
          message:'',
          notify:true,
          status:true
        })
        console.log(response)

      })

      .catch(async (error)  => {
        // this.setState({
        //   notify:true,
        //   status:false
        //  })
        console.error(error)
      })
  
   }





  render() {
    return (
      <div className="section section-signup">
        <Container>

          <Row className="row-grid justify-content-between align-items-center">
            <Card className="card-plain">
            <Col lg="6">
                    <CardHeader>
                      <h1 className="profile-title text-left">Contact</h1>
                      <h5 className="text-on-back">03</h5>
                    </CardHeader>
                    
              <h3 className="display-3 text-white">
                A devloper who likes all fields{" "}
                <span className="text-white">and tries to learn everything he can</span>
              </h3>
              <p className="text-white mb-3">
                I try to read from every branch of science and non-science in my 
                free time. Whether its humanities or commerce or something related to art 
                and history. I read about philosophy and the state of mind in various 
                situations. I believe all fields are multi-disciplinary and 
                any change in one field can cause rippling effects in others.
              </p>
            </Col>
            <div className="squares square-2" />
          {/* <div className="squares square-" /> */}
            <CardBody>
            <Col className="mb-lg-auto" lg="6">
              <Card className="card-register">
              <Form onSubmit={this.onSubmit}>
                <CardHeader>
                  <CardImg
                    alt="..."
                    src={require("../../assets/img/square-purple-1.png")}
                  />
                  <CardTitle tag="h4" style={{backgroundColor:'orange'}}>Contact me</CardTitle>
                  <Notify currentState={this.state.notify} currentStatus={this.state.status}/>
                  
                </CardHeader>
                
                
                <CardBody>
                
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label htmlFor="name">Your Name</label>
                              <Input placeholder="Tony Stark" type="text" name="name" value={this.state.name} onChange={this.onChange} required={true}/>
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label htmlFor="email">Email address</label>
                              <Input
                                placeholder="ironman@email.com"
                                type="email"
                                name="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                required={true}
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="6">
                            <FormGroup>
                              <label htmlFor="phone">Phone</label>
                              <Input placeholder="+00-1234567890" type="tel" name="phone" pattern="[+]{1}[0-9]{2}-[0-9]{10}"
                                value={this.state.phone}
                                onChange={this.onChange}
                                required={true}
                                />
                            </FormGroup>
                          </Col>
                          <Col md="6">
                            <FormGroup>
                              <label htmlFor="company">Company</label>
                              <Input placeholder="Stark Industries" type="text" name="company" value={this.state.company}
                                onChange={this.onChange}required={true}/>
                            </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                          <Col md="12">
                            <FormGroup>
                              <label>Message</label>
                              <Input placeholder="I'm Batman" type="text" name="message" value={this.state.message} onChange={this.onChange} required={true}/>
                            </FormGroup>
                          </Col>
                        </Row>

                </CardBody>
                <CardFooter>
                  <Button className="btn-round" color="primary" size="lg" type="submit">
                   <i className="fas fa-paper-plane"/>{"  "} Send Message
                   
                  </Button>
                </CardFooter>
                
                      </Form>
              </Card>
            </Col>
            
          </CardBody>
          <div className="squares square-3" />
          <div className="squares square-4" />
          </Card>
          </Row>
        </Container>
        
      </div>
    );
  }
}

export default Signup;
