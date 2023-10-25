import React from 'react'
import { Container } from 'react-bootstrap';
export default function Hours() {
  return (
   <>
    <h2 className='h3 py-2 pt-4 text-center'>School Hours</h2>
    <Container>
    <div
    className="table-responsive ws-table-all"
    style={{ marginTop: 30, marginBottom: 20, overflowX: "auto" }}
  >
    <table className="table table-bordered table-hover">
      <tbody>
        <tr>
          <th colSpan={2} style={{ textAlign: "center", fontSize: "x-large" }}>
            Morning Sessions
          </th>
        </tr>
        <tr>
          <td style={{ fontSize: "x-large" }}>Junior Sections </td>
          <td style={{ fontSize: "x-large" }}> 7:15 A.M - 10:30 A.M.</td>
        </tr>
        <tr>
          <td style={{ fontSize: "x-large" }}>Senior Sections </td>
          <td style={{ fontSize: "x-large" }}> 7:15 A.M - 11:00 A.M.</td>
        </tr>
        <tr>
          <th colSpan={2} style={{ textAlign: "center", fontSize: "x-large" }}>
            Day Sessions
          </th>
        </tr>
        <tr>
          <td style={{ fontSize: "x-large" }}>Junior Sections </td>
          <td style={{ fontSize: "x-large" }}> 7:40 A.M - 11:00 A.M.</td>
        </tr>
        <tr>
          <td style={{ fontSize: "x-large" }}>Senior Sections </td>
          <td style={{ fontSize: "x-large" }}> 7:40 A.M - 01:10 A.M.</td>
        </tr>
      </tbody>
    </table>
  </div>
  </Container>
  </>
  )
}
