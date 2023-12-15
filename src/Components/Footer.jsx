import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{height:'300px'}} className='text-center w-100 mt-5'>
    <div className="footer-content d-flex justify-content-between">
      <div className='title w-25' style={{textAlign:'justify'}}>
        <h3 className='d-flex 'style={{fontSize:'200%',height:'55px'}} ><i class="fa-solid fa-cloud-arrow-up fa-beat me-2" style={{height:'45px'}}></i>
        Media Player</h3>
        <span >Designed and built with all the love in the world by the bootstrap team with help of our contributors
        </span><br/>
        <span>Code licensed MIT,does CC By 3.0</span><br/>
        <span>Currently v5.3.2.</span>

      </div>
      <div className="links d-flex flex-column" style={{textAlign:'justify'}}>
        <h3 style={{fontSize:'200%'}} className='fw-bolder'>Links</h3>
        <Link to={'/'} style={{color:'white'}} className='text-decoration-none'
        >Landing Page</Link>
        <Link  to={'/home'} style={{color:'white'}}  className='text-decoration-none' 
         >Home</Link>
        <Link  to={'/history'} style={{color:'white'}}  className='text-decoration-none'
          >Watch History</Link>
      </div>
      <div className="guides d-flex flex-column" style={{textAlign:'justify'}}>
      <h3 style={{fontSize:'200%'}} className='fw-bolder'>Guides</h3>
        <a style={{color:'white'}} className='text-decoration-none'
         href="https://react.dev/" target='_blank'> React</a>
        <a style={{color:'white'}}  className='text-decoration-none'
          href="https://react-bootstrap.github.io/"  target='_blank' >React Bootstrap</a>
        <a style={{color:'white'}}  className='text-decoration-none' 
         href="https://www.w3schools.com/react/react_router.asp" target='_blank'>React Routing</a>
      </div>
      <div className="contact" style={{textAlign:'justify'}}>
        <h3 style={{fontSize:'200%'}} className='fw-bolder' >Contact Us</h3>
        <div className="d-flex">
          <input placeholder='Enter Your mail' type="text" className="form-control"/>
          <button className='btn btn-info ms-2' style={{height:'50px'}}><i style={{height:'18px'}} class="fa-solid fa-arrow-right"></i></button>
        </div>
        <div style={{color:'white'}} className="icons mt-3 d-flex justify-content-between">
        <i style={{height:'50px'}} class="fa-solid fa-envelope fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-twitter fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-github fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-facebook fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-instagram fa-2x"></i>
        <i style={{height:'50px'}} class="fa-brands fa-linkedin fa-2x"></i>

        </div>
      </div>
      
    </div>
    
    <p className='text-center mt-4'>copyright &copy; 2023 Media Player. Build with React</p>
    </div>
  )
}

export default Footer