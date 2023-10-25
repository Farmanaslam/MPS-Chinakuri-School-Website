import React from 'react'
import { Container } from 'react-bootstrap';
export default function Rules() {
  return (
    <>
    <div >
    <h2 className='h3 py-2 pt-4 text-center '>Rules and Regulations</h2>
    <Container className='container rules'>
        <ol className='mx-2'>
          <li>Assembly prayer is must for all the students of this school.</li>
          <li>Only English should be spoken in school premises.</li>
          <li>Irregular attendance, misbehavior may lead to dismissal of a student.</li>
          <li>To prevent loss of articles, name of student should be marked on it.</li>
          <li>Changes can be made at any time if the management thinks it necessary.</li>
          <li>Each student must possess a school diary which should be brought to school daily.</li>
          <li>In case of absence leave, the school authority must be notified in advance.</li>
          <li>Without a letter from parents/guardians no student is allowed to leave the school premises.</li>
          <li>The school fees should be paid within 28th of every month, otherwise a late fine of rs.25/- will be charged.</li>
        </ol>
    </Container>
    </div>
    </>
  )
}
