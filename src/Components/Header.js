import React from 'react'
import {Container, Button, Row, Col} from 'react-bootstrap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {faEnvelope,  faPhone } from '@fortawesome/free-solid-svg-icons';
export default function Header() {
  return (
    <div className='header'>
    <Container>
        <Row>
       <Col >
       <a href='http://aestree.mpschinakuri.org/'>  <Button className="mx-1 my-1 ">Aestree Web Portal</Button></a>
   <a href='http://aestree.mpschinakuri.org/login/employee'> <button type="button" className="btn btn-secondary mx-1 ">Admin/Teacher Login</button></a>
   <a href='http://aestree.mpschinakuri.org/login/student'><button type="button" className="btn btn-success mx-1 my-1">Parent Login</button>
   </a>
       </Col>
      <Col>
      </Col>
        <Col className='icons'>
          
            <FontAwesomeIcon icon={faPhone} className='icon'></FontAwesomeIcon>
            <span className='mx-2' >+91 7001089116</span>
           
            <FontAwesomeIcon icon={faEnvelope} className='icon'> </FontAwesomeIcon>
            <span > <a href="mailto:mpschinakuri@gmail.com">mpschinakuri@gmail.com</a></span>
         
        </Col>
        </Row>
        </Container>
    </div>
   
  )
}
