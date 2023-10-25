import React from 'react'
import { useState } from "react";
import { Col, Container,  Row ,Button} from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {faEnvelope, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
export default function Contact() {
  const [formFields, setFormFields] = useState({
    name: "",
    number: "",
    email: "",
    message: ""
})
const handleChange = (event) => {
  const { name, value } = event.target;
  setFormFields(() => {
      return {
      ...formFields,
      [name]: value
      };
  });
};


const handleSubmit = (event) => {
  
  event.preventDefault();
  const hostPath = `${window.location.protocol}//${window.location.hostname}`

  let xhr = new XMLHttpRequest();
  let url = `${hostPath}/sendemail.php`;
  xhr.open("POST", url, true);
  //xhr.setRequestHeader("Content-Type", "application/json");
  //xhr.setRequestHeader("Access-Control-Allow-Origin", "*")
  xhr.onreadystatechange = function () {
      if (xhr.readyState === 4 && xhr.status === 200) {
          console.log(xhr.responseText);
          if (xhr.responseText.toLowerCase().includes("successfully")) {
              const successMsg=document.querySelector(".sent-msg")
              successMsg.innerHTML += "<p>Message sent successfully!</p>"
          }
      }
  };
  let data = JSON.stringify({...formFields});
  xhr.send(data);
}

  return (
    <>
    <div className='contact-us'>
       <h3 className='h3 py-2 pt-4 text-center'>Contact Us</h3>
       <Container>
      <Row className='py-4 ' >
        <Col className='contact-form p-4 my-1'>
        <h3 className='h3 p-2 pb-4'>Get In Touch</h3>
        <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3 form-group" controlId="formGroupEmail">
       
        <Form.Control className='input-area'type="text" placeholder="Full Name"onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3  form-group" controlId="Your Mail">
       
        <Form.Control type="number" className='input-area' placeholder="Mobile Number" onChange={handleChange} />
      </Form.Group>
      <Form.Group className="mb-3  form-group" controlId="Your Mail">
      <Form.Control type="email" className='input-area' placeholder="Your Mail" onChange={handleChange}/>
      </Form.Group>
      <Form.Group className='form-group'>
        <textarea type="text" className='msg-text-area' placeholder="Message" onChange={handleChange}/>
      </Form.Group>
      <Form.Group type='submit'className="mb-1  form-group" >
      <Button  className=" px-4 my-2" type='submit'>
           Send
        </Button>
        </Form.Group>
        <div className='fs-5 sent-msg'></div>
    </Form>
        </Col>
        <Col>
        <iframe className="mapframe my-1"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.810119155317!2d86.85248607446881!3d23.682747491371813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f6e10266be8715%3A0x7659330114e67e71!2sModern%20Public%20School!5e0!3m2!1sen!2sin!4v1697441447110!5m2!1sen!2sin" width="700" height="450" loading="lazy"></iframe>
    
    <Row className='mt-2 contact-icons'>
        <Col className='mx-2'>
        <FontAwesomeIcon icon={faLocationDot} className="icon" />
        <div className='my-1'> <h4 className='fs-4 '>Address</h4>Chinakuri Bazar,
Opp.Shilpi Sangha.</div>
        </Col>
       
        <Col className='mx-2'>
        <FontAwesomeIcon icon={faPhone} className="icon" />
        <div className='my-1'> <h4 className='fs-4 '>Phone</h4>+91 7001089116</div>
        </Col>

        <Col className='mx-2'> 
        <FontAwesomeIcon icon={faEnvelope} className="icon" />
        <div className='my-1'> <h4 className='fs-4 '>Email</h4><a href="mailto:mpschinakuri@gmail.com">mpschinakuri@gmail.com</a></div>        
        </Col>
    </Row>

        </Col>
      </Row>
       </Container>
       </div>
    </>
  )
}
