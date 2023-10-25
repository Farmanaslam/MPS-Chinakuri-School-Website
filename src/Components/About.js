import React from 'react'
import {     Container, Image, Row } from 'react-bootstrap';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css';
import {faCheck} from '@fortawesome/free-solid-svg-icons';
export default function About() {
  return (
    <>
    <h2 className='h3 py-2 pt-4 text-center'>About Us</h2>
    <Container>
    
    <Row className='about-school align-items-center'>
      <div className='col-md-6'>
      <h4 className='h4'>Welcome to Modern Public School</h4>
        <p className='md-mx-4'>Modern Public School, Asansol established has been imparting education to the students of this industrial township without any gender discrimination. Is managed by School Managing Committee and Managing Society Nestled in Chinakuri, in a sprawling land, the school has set for itself very high standards which aims at the all-round intellectual, emotional, physical, spiritual and aesthetic development of every student. The School offers innumerable facilities and opportunities for the students to explore and enjoy. The School provides a congenial atmosphere to nurture the young minds to dream big, aspire, explore and achieve the impossible.</p>
        <div>
        <FontAwesomeIcon icon={faCheck} className='icon'></FontAwesomeIcon>
        <span className='mx-2'>To enable all Students' access learning through online classes.</span>
        </div>
        <div>
         <FontAwesomeIcon icon={faCheck} className='icon'></FontAwesomeIcon>
        <span className='mx-2'> To ensure personal attention and care to every student through the trained and experienced faculty.</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faCheck} className='icon'></FontAwesomeIcon>
        <span className='mx-2'> To inculcate Moral Values in the young lies through Value Education.</span>
        </div>
        <div>
        <FontAwesomeIcon icon={faCheck} className='icon'></FontAwesomeIcon>
        <span className='mx-2'> To make provision for the all round development of a child.</span>
        </div>
      </div>
      <div className='col-md-6'>
      <Image src='/images/g1.jpg' />
      </div>
    </Row>
   </Container>
   </>
  )
}
