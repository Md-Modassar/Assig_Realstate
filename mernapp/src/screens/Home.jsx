import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Card from '../components/Card'


export default function Home() {


 const [properties,setProperties]=useState([])
 
 const lowdata=async()=>{
  let respose=await fetch("http://localhost:3001/api/foodData",{
    method:"POST",
    headers:{
      'Content-Type':'application/json'
    }
  })
  
  respose=await respose.json()
  
  setProperties(respose[0])
  

 }

 useEffect(()=>{
  lowdata()
 },[])
  return (
    <div>
        <div>
            <Navbar/></div>
            <div>
            <div id="carouselExampleCaptions" className="carousel slide carousel-fade" data-bs-ride="carsousel" >
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
   
  <div className="carousel-inner" id="carosual">
     <div className='carousel-caption' style={{zIndex:"5"}}>

     </div>
    <div className="carousel-item active">
      <img src="bg.jpg" className="d-block w-100" style={{filter:"brightness(80%" ,"width":"100%","maxHeight":"400px"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block" >
     
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="bg1.jpg" className="d-block w-100" style={{filter:"brightness(80%","width":"100%","maxHeight":"400px" }} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="bg2.jpg" className="d-block w-100" style={{filter:"brightness(80%" ,"width":"100%","maxHeight":"400px"}} alt="..."/>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </div>
         <div className='container'>
         
         {
          <Card properties={properties}/>          
         }
         </div>
         <div>

         </div>
            <div><Footer/></div>

    </div>
  )

}
