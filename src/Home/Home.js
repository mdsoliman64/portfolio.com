import React, { useEffect, useState } from 'react'
import "./Home.css"
import {Grid ,Typography,Box,Button} from "@mui/material";
import MyImage from "../Assets/Images/2.png"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import title_slider from '../compnents/Slider';


function Home(props) {
    const [count,setCount]=useState(0);
    useEffect(()=>{
      const counter= setInterval(()=>{
            if(count < title_slider.length){
            setCount((prev)=> {return prev+=1});
            }else{
                setCount(0)
            }
            },3000);
    
            return(()=>{
                clearInterval(counter)
            });


    },[count]);
   

  return (
    <>
   <section className='Home' id="Home">
        <Grid container spacing={0}>
            <Grid item xs={12} md={6} sx={{margin:"auto",textAlign:"center"}}>
                    <img src={MyImage} alt="freelancer md soliman"/>
            </Grid>

            <Grid item xs={12} md={6}>
            <Box sx={{marginTop:"13%"}}>
                <Typography variant='subtitle1' sx={{fontFamily:"montserrat",color:"#fff",fontSize:"2rem",textAlign:"center"}}>
                    I'm Md Soliman 
                </Typography>

                <Typography variant={props.smdevice ?"h5" :"h3"} sx={{fontFamily:"montserrat",color:"#C8C8C8",textAlign:"center",fontWeight:"900",marginTop:4,textShadow:"8px 8px 14px var(--Button)"}} className='title'>
                   A &nbsp;  {title_slider[count]}
                    
                </Typography>
                <Box sx={{display:"flex",fontSize:"1.2rem",flexWrap:"wrap",textAlign:"center",marginTop:4,justifyContent:"center"}}>
                    <a href="https://github.com/mdsoliman64" >
                        <GitHubIcon sx={{ fontSize: 40 }}/>
                    </a>
                    <a href="https://linkedin.com/in/md-soliman" >
                        <LinkedInIcon sx={{ fontSize: 40 }}/>
                    </a>
                    <a href="https://www.instagram.com/mdsoliman64/" >
                        <InstagramIcon sx={{ fontSize: 40 }}/>
                    </a>

                    <Button href="https://calendly.com/seo-mdsoliman/talk-with-me" target="_blank" variant='contained' className="btn" sx={{backgroundColor:"var(--Button)","&:hover":{backgroundColor:"#fff",color:"var(--Button)"}}}>
                        Book a meeting
                    </Button>
                </Box>
            </Box>
                
            </Grid>
        </Grid>




    </section>
  
    </>
  )
}

export default Home