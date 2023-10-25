import React from "react";
import { Container, Button,Image } from "react-bootstrap";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';

export default function Footer() {
  return (
    <>
    <div className="footer bg-dark">
      
      <Container >
        <div className="row" >
        <div className="col1 col-md-4 my-4">
          <h3 className="h3-foot my-1">About Us</h3>
          <p>
            Modern Public School, Asansol established has been imparting
            education to the students of this industrial township without any
            gender discrimination. Is managed by School Managing Committee and
            Managing Society.
          </p>
        </div>

        <div className="col2 col-md-4 my-4">
        <h3 className="h3-foot my-1">Contact Us</h3>
        <div>
        <FontAwesomeIcon icon={faLocationDot} className="icon" />
        <span>Chinakuri Bazar,
Opp.Shilpi Sangha.</span>
</div>
        <div className="my-2" >
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <span>+91 7001089116</span>
        </div>
       
<div>
            <FontAwesomeIcon icon={faEnvelope} className="icon" />
            <span> <a href="mailto:mpschinakuri@gmail.com">mpschinakuri@gmail.com</a></span>
            </div>
        </div>

        <div className=" col3 col-md-4 my-4">
        <h3 className="h3-foot my-1">Aestree Web Portal</h3>
        <a href='http://aestree.mpschinakuri.org/login/employee'><Button className=" my-2">
            Admin/Teacher Login
        </Button></a>
        <a href='http://aestree.mpschinakuri.org/login/student'><Button  className=" mx-1 my-2">
            Parent Login
        </Button></a>
        <p>Visitors
        <Image src="https://hitwebcounter.com/counter/counter.php?page=7534278&style=0006&nbdigits=9&type=page&initCount=0" title="Web Counter" alt="counter free" style={{textAlign: "center"}}/>
        </p>
        </div>
        </div>
      </Container>
    </div>
    <div className="copyright">
   
    <p className="my-1">© Modern Public School. All Rights Reserved</p>

    </div>
    </>
 );
}
