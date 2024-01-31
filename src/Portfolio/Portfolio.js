import React,{useState,useEffect} from 'react'
import "./Portfolio.css"

import CarouselPortfolio from './Test-Portfolio/CarouselPortfolio';

function Portfolio() {
  const [mbdevice,setMbDevice]=useState(false);
  const windowSize = window.innerWidth;
  useEffect(()=>{
  if(windowSize <700){
setMbDevice(true)
  }else{
setMbDevice(false);
  }
  },[windowSize]);

  
  return (
   <section id="Portfolio">
      <div className='Portfolio-wrap'>
      <div className={mbdevice ?"Portfolio-title-mb":"Portfolio-title"}>
         <h1>Portfolio</h1>
        </div>
        <div className={mbdevice ?'Portfolio-item-mb':"Portfolio-item"}>
          
            <CarouselPortfolio mbdevice={mbdevice}/>
        </div>
      </div>
   </section>
  )
}

export default Portfolio