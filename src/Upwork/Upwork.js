import React ,{useState,useEffect} from 'react'
import "./Upwork.css"
import {Button,Typography} from "@mui/material";
import {useInView} from "react-intersection-observer"


function Upwork() {
const [ref,inView]=useInView();
const [mbdevice,setMbDevice]=useState(false);
const windowSize= window.innerWidth;
useEffect(()=>{
if(windowSize <700){
    setMbDevice(true);
}else{
    setMbDevice(false);
}


},[windowSize])

  return (
   <section id="Upwork" ref={ref} style={{transition:"all 2s ease-out",opacity:`${inView ? 1 :0}`,transform:`skewX(${inView?"0deg":"20deg"})`}} >
      <div className='Upwork-wrap'>
      <div className={mbdevice ? "Upwork-title-mb":'Upwork-title'}>
            <h1>Upwork</h1>
        </div>
        <div className='Upwork-item'>
           <Typography variant='h4' sx={{fontFamily:"montserrat",fontWeight:700,marginBottom:3}}>
           Hire me at upwork
           </Typography>
           <Typography sx={{marginBottom:2,textAlign:"justify"}}>
           As a freelancer on Upwork, I offer expertise in web development and SEO consulting services. With a strong portfolio and experience, I'm well-equipped to handle various web projects and optimize online visibility for clients. Upwork provides a platform that allows me to connect with clients worldwide and showcase my skills, ensuring successful collaborations and project delivery. I'm committed to delivering high-quality work and helping businesses achieve their online goals.
           </Typography>
           <Button href="https://www.upwork.com/workwith/mdsoliman64" variant='contained'sx={{backgroundColor:"#2E9F00",width:"180px",textAlign:"right",float:"right",fontSize:"0.5rem",color:"#fff"}} >
            Hire me 
           </Button>
        </div>
      </div>
   </section>
  )
}

export default Upwork;