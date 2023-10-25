import React from 'react'
// import Carousel from 'react-bootstrap/Carousel';
import Carousel from 'react-bootstrap/Carousel';
import { Col, Container, Image, Row } from 'react-bootstrap';
export default function Home() {
  return (
    <>    
  {/* //   <Carousel>
  //   <Carousel.Item>
  //     <Image src="https://user-images.githubusercontent.com/39626451/192898250-711e2281-ab03-433a-afeb-4ad542b68a5b.png"/>
  //     <Carousel.Caption>
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //   <Image src="https://user-images.githubusercontent.com/39626451/192898250-711e2281-ab03-433a-afeb-4ad542b68a5b.png"/>
  //     <Carousel.Caption>
      
  //     </Carousel.Caption>
  //   </Carousel.Item>
  //   <Carousel.Item>
  //   <Image src="https://user-images.githubusercontent.com/39626451/192898250-711e2281-ab03-433a-afeb-4ad542b68a5b.png"/>
  //     <Carousel.Caption>
       
  //     </Carousel.Caption>
  //   </Carousel.Item>
  // </Carousel> */}


  <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/bann3.jpg"
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/bann1.jpg"
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="/images/bann2.jpg"
          alt="Third slide"
        />
       
      </Carousel.Item>
    </Carousel>

    <h2 className='h3  py-2 pt-4 text-center'>Welcome to Modern Public School</h2>
  <Container>
    
    <Row className='about-school align-items-center'>
      <div className="col-md-6">
        <p className='md-mx-4'>Modern Public School, Asansol established has been imparting education to the students of this industrial township without any gender discrimination. Is managed by School Managing Committee and Managing Society Nestled in Chinakuri, in a sprawling land, the school has set for itself very high standards which aims at the all-round intellectual, emotional, physical, spiritual and aesthetic development of every student. The School offers innumerable facilities and opportunities for the students to explore and enjoy. The School provides a congenial atmosphere to nurture the young minds to dream big, aspire, explore and achieve the impossible.</p>
      </div>
      <div className='col-md-6'>
      <Image src='/images/g1.jpg' />
      </div>
    </Row>
   </Container>
   </>

  )
}
