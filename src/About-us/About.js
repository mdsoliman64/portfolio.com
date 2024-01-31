import React from 'react'
import "../About-us/About.css"
import {Paper,Typography,Box} from "@mui/material"
import { useInView } from 'react-intersection-observer';
function About(props) {
  const [ref,inView]=useInView();
  return (
    <section className='About' id="About" ref={ref} style={{transition:"all 1s ease-out",transform:`skewX(${inView?"0deg":"20deg"})`}}>
    <Paper elevation={4} className='About-item' sx={{backgroundColor:"var(--Button)",color:"#fff",marginTop:10,border:"2px solid var(--Border)",boxShadow:"inset 4px 4px 4px #000"}}>
            <Typography variant={`${props.smdevice?"h5":"h2"}`} sx={{fontFamily:"Montserrat",fontWeight:`${props.smdevice?"600":"300"}`}}>
                   About
            </Typography>
            <Box sx={{marginTop:2,textAlign:"justify"}}>
            <Typography variant='p' sx={props.smdevice ?{fontFamily:"syne",textAlign:"justify",marginTop:3,lineHeight:1.5,wordSpacing:5,fontSize:"0.8rem"}:{fontFamily:"syne",textAlign:"justify",marginTop:5,lineHeight:1.5,wordSpacing:5,fontSize:"1.2rem"}}>
            As a skilled and passionate full stack web developer with expertise in the MERN (MongoDB, Express.js, React.js, Node.js) stack, combined with my proficiency in search engine optimization (SEO), I bring a comprehensive approach to creating exceptional web experiences. With a solid foundation in both front-end and back-end development, I have successfully delivered numerous projects, leveraging the power of modern web technologies
            </Typography>
            <br/>
            <Typography variant='p' sx={props.smdevice ?{fontFamily:"syne",textAlign:"justify",marginTop:3,lineHeight:1.5,wordSpacing:5,fontSize:"0.8rem"}:{fontFamily:"syne",textAlign:"justify",marginTop:5,lineHeight:1.5,wordSpacing:5,fontSize:"1.5rem"}}>
                <a href="/certificates"> Check my all certificate </a>
            </Typography>
            </Box>

            

    </Paper>

    </section>
  )
}

export default About