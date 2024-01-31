import React,{useState,useEffect} from 'react';
import './App.css';
import Home from './Home/Home';
import {Grid} from "@mui/material"
import Navbar from './compnents/Navbar';
import MobileMenue from './compnents/MobileMenue';
import Hobby from './Hobby/Hobby';
import Service from './Service/Service';
import Portfolio from './Portfolio/Portfolio';
import Upwork from './Upwork/Upwork';
import Contact from './contact/Contact';
import Features from './Feaures/Features';
import Certificates from './Certificates/Certificates';
import About from "./About-us/About"
import {BrowserRouter  ,Route, Routes} from "react-router-dom";
import NewCertificates from './Certificates/NewCertificates';


function App() {


  const [smdevice,setSmdevice]=useState(false);
  const [windowSize,setWindowSize]=useState();
 
  const ref = React.forwardRef();
  useEffect(()=>{
    
 setWindowSize(window.innerWidth);   
    
    if(windowSize < 700){
      setSmdevice(true);
    }else{
      setSmdevice(false)
    }

    let callback=(entries,observer)=>{
      entries.forEach((entry)=>{
       console.log(entry)
      })
     }
let observer =new IntersectionObserver(callback);

if(ref.current){
  observer.observe(ref.current);
}



return()=>{
  observer.disconnect();
}
  },[windowSize,ref])
  return (
    <Grid container spacing={0} sx={{position:"relative",overflow:"hidden"}}>
      <Grid item xs={smdevice ? 12:10} sx={{position:"relative",padding:5}}>

    <BrowserRouter>
        <Routes>
           <Route   path="/" exact  element={<><Home smdevice={smdevice}/>   <About smdevice={smdevice}/>  <Hobby smdevice={smdevice}/> <NewCertificates/></>}></Route>
           <Route   path="*"   element={<><Home smdevice={smdevice}/> <About smdevice={smdevice}/> <Hobby smdevice={smdevice}/></>}></Route>
           <Route   path="/services" element={<Service smdevice={smdevice} />}></Route>
           {/* <Route   path='/myportfolio/portfolio' component={<Portfolio />}></Route> */}
           <Route   path="/portfolio" element={<Portfolio/>}></Route>
           {/* <Route   path='/certificates' element={<Certificates smdevice={smdevice} />}></Route> */}
           <Route   path='/certificates' element={<NewCertificates smdevice={smdevice} />}></Route>
        </Routes>
      </BrowserRouter>
      
       
     
        
      
      
       
        <Features/>
        <Upwork />
        <Contact/>
       
      </Grid>
      <Grid item xs={smdevice ?0 :2} sx={{position:"fixed",textAlign:"right",marginLeft:`${smdevice?"75%":"82%"}`,zIndex:10}} >
       {smdevice ? (<MobileMenue />) :(<Navbar/>)}
        
      </Grid>
    </Grid>
  );
}

export default App;
