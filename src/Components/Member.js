import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Container } from 'react-bootstrap';

export default function Member() {
  return (
    <>
    <h2 className='h3 py-2 pt-4 text-center'>Our Members</h2>
<Container>
    
<div className=' members-area row my-4 '>
  <Col>
    <Card style={{ width: '20rem', margin:" 0 10px 10px 10px"}}>
      <Card.Img variant="top" src="/images/t1.jpg" />
      <Card.Body>
        <Card.Title>Mohammad Azad</Card.Title>
        <div className='underline my-2 mx-2'></div>
        <Card.Text>
        President
        </Card.Text>
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '20rem' , margin:"0 10px 10px 10px"}}>
      <Card.Img variant="top" src="/images/t2.jpg" />
      <Card.Body>
        <Card.Title>Arbind Nag</Card.Title>
        <div className='underline my-2 mx-2'></div>
        <Card.Text>
        Principal
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>

    <Col>
    <Card style={{ width: '20rem' , margin:"0 10px 10px 10px"}}>
      <Card.Img variant="top" src="/images/t3.jpg" />
      <Card.Body>
        <Card.Title>Srikant Singh</Card.Title>
        <div className='underline my-2 mx-2'></div>
        <Card.Text>
        Vice-President
        </Card.Text>
      
      </Card.Body>
    </Card>
    </Col>
    </div>
    </Container>
    </>
  )
}
