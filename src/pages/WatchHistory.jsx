import React from 'react'
import {Link} from 'react-router-dom'
import { Table } from 'react-bootstrap'

function WatchHistory() {
  return (
    <>
      <div className='container mt-5 mb-5 d-flex justify-content-between'>
        <h3 style={{height:'95px'}}>Watch History</h3>
        <Link to={'/home'} ><i style={{height:'17px'}} class="fa-solid fa-left-long me-2"></i>Back to Home</Link>

      </div>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Video Caption</th>
          <th>URL</th>
          <th>TimeStamp</th>
          <th><i style={{height:'20px'}} class="fa-solid fa-ellipsis"></i></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Leo Trailer </td>
          <td>13/12/2024</td>
          <td><a href='https://www.youtube.com/watch?v=IqwIOlhfCak' target='_blank'>https://www.youtube.com/watch?v=IqwIOlhfCak</a></td>
          <td><button className='btn'><i  style={{height:'20px'}} class="fa-solid fa-trash"></i></button></td>
        </tr>
        
        
      </tbody>
    </Table>


    </>
  )
}

export default WatchHistory