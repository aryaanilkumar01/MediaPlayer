import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function LandingPage() {
  return (
    <div className='Container'>
      <div className="row align-items-center m-5">
         <div className="col-lg-5">
            <h3 style={{height:'105px'}}>Welcome to<span className='text-warning'>Media Player</span></h3>
              <p style={{textAlign:'justify'}}>Media Player App. Will allow you to add and remove their uploaded
                 videos , also helps to arrange them in different categories by providing drag and drop functionalities.
               </p>
                  <Link to={'/home'} className='btn btn-info mt-5 fw-bolder'>Get Started</Link>

          </div>
       <div className="col"></div>
                      <div className="col-lg-6">
                         <img className='img-fluid'src="https://media1.tenor.com/m/lhlDEs5fNNEAAAAC/music-beat.gif" alt="no image" />

                      </div>

    </div>
    <div className='features mb-5'>
      <h3 className='text-center' style={{fontSize:'200%'}}>Features</h3>
      <div className="cards mt-5 d-flex justify-content-between">
        {/* card 1 */}
        <Card style={{ width: '18rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://clipart-library.com/images/pc7reEGKi.gif" />
          <Card.Body>
            <Card.Title style={{fontSize:'12px'}}>Managing Videos</Card.Title>
            <Card.Text>
              User can upload, view and remove the videoes
            </Card.Text>
          </Card.Body>
        </Card>
        {/* card 2 */}
        <Card style={{ width: '18rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://i.pinimg.com/originals/18/a0/a3/18a0a33c874e26a55fe2456347567ae9.gif" />
          <Card.Body>
            <Card.Title style={{fontSize:'12px'}}>Categorize Videos</Card.Title>
            <Card.Text>
              User can categories the videos according to their performances using drag and drop features
            </Card.Text>
          </Card.Body>
        </Card>
        {/* card 3 */}
        <Card style={{ width: '18rem' }}>
          <Card.Img width={'300px'} height={'300px'} variant="top" src="https://cdn.dribbble.com/users/497438/screenshots/2084032/xtyf_1.gif" />
          <Card.Body>
            <Card.Title style={{fontSize:'12px'}}>Watch History</Card.Title>
            <Card.Text>
             User are able to see the history of watched videos
            </Card.Text>
          </Card.Body>
        </Card>

      </div>

    </div>
    <div className="row mt-5 border rounded align-items-center p-5">
      <div className="col-lg-5">
        <h3 className='text-warning mb-5' style={{height:'100px'}}>Simple, Fast and powerful</h3>
        <p style={{textAlign:'justify'}}>
        <span className='fs-5'>Play Everything</span>: Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero,
         sint temporibus ab reiciendis corporis architecto illo sed </p>
        <p style={{textAlign:'justify'}}>
        <span className='fs-5'>Catogorize Videos</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus sed nobis quasi vel aspernatur,
         ut quidem necessitatibus atque ab veniam, soluta unde inventore 
       </p>
       <p style={{textAlign:'justify'}}>
        <span className='fs-5'>Watch HIstory</span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Temporibus sed nobis quasi vel aspernatur,
         ut quidem necessitatibus atque ab veniam, soluta unde inventore 
       </p>
       
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6">
      <iframe width="779" height="438" src="https://www.youtube.com/embed/IqwIOlhfCak" title="LEO - Badass Lyric | Thalapathy Vijay | Lokesh Kanagaraj | Anirudh Ravichander"
       frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>
       
    </div>
    
    </div>
  )
}

export default LandingPage