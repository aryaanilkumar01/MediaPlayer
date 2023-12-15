import React,{ useState } from 'react'
import { Card,Modal } from 'react-bootstrap'

function VideoCard() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Card>
      <Card.Img onClick={handleShow} height={'200px'} variant="top" src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/leo-et00351731-1675663884.jpg" />
      <Card.Body>
        <Card.Title className='d-flex justify-content-between align-items-center'>
          <h6 style={{height:'22px'}}>Video Title</h6>
          <button className="btn"><i style={{height:'18px'}} className="fa-solid fa-trash text-danger"></i></button>
        </Card.Title>
        
       
      </Card.Body>
    </Card>

    <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Video Caption</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe className='w-100' height='387' src="https://www.youtube.com/embed/IqwIOlhfCak?autoplay=1" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        </Modal.Body>
        
      </Modal>
    </>
  )
}

export default VideoCard