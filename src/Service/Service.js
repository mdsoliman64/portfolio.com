import React from 'react'
import "./Service.css"
import { useInView } from 'react-intersection-observer';
import {Grid,Paper,Typography,Box} from "@mui/material";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFigma } from '@fortawesome/free-brands-svg-icons';
import { faHtml5 } from '@fortawesome/free-brands-svg-icons';
import { faMobileScreen } from '@fortawesome/free-solid-svg-icons';
import { faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faLaptopCode } from '@fortawesome/free-solid-svg-icons';
import { faSearchengin } from '@fortawesome/free-brands-svg-icons';
function Service(props) {
        const [ref, inView] = useInView();
  return (
   <section id="service" ref={ref}>
   <Grid container spacing={1} className="service-item">
    <Grid item sm={12} sx={{marginBottom:5}}>
    <Paper sx={props.smdevice ?{width:"100%",padding:2,border:"2px solid var(--Button)",borderRadius:"25px"}:{width:"50%",padding:2,border:"2px solid var(--Button)",borderRadius:"25px"}}>     
                <Typography variant='h5'>
                    What I do for my client
                </Typography>
        </Paper>
    </Grid>
    <Grid item sm={12} md={4} sx={{transition:"all 1s ease-out",opacity:`${inView ? 1 :0}`}} >
            <Paper elevation={4} sx={{padding:4,backgroundColor:"#FCF0FF",width:"75%",textAlign:"justify"}}>
            <Box sx={{margin:"auto",textAlign:"center",marginBottom:2}}  >
                     <FontAwesomeIcon icon={faFigma} size="2xl" style={{border:"2px solid #000",borderRadius:"15px",padding:4,fontSize:"5rem",textAlign:"center",margin:"auto",color:"var(--Button)"}}/> 
            </Box>
          
                <Typography variant='h5' sx={{color:"var(--Button)",marginBottom:2,fontFamily:"Montserrat",fontWeight:"700",textAlign:"center"}}>
             
                         Figma To HTML
                </Typography>
                <Typography variant='p' sx={{textAlign:"justify"}}>
             "Transforming your creative vision into stunning reality, I possess the remarkable ability to seamlessly convert your Figma designs into captivating HTML masterpieces with pixel-perfect precision and a keen eye for detail. "
             </Typography>
            </Paper>

    </Grid>



    <Grid item sm={12} md={4} sx={{transition:"all 2s ease-out",opacity:`${inView ? 1 :0}`}} ref={ref}>
            <Paper elevation={4} sx={{padding:4,backgroundColor:"#FCF0FF",width:"75%",textAlign:"justify"}}>
            <Box sx={{margin:"auto",textAlign:"center",marginBottom:2}}>
                     <FontAwesomeIcon icon={ faHtml5} size="2xl" style={{border:"2px solid #000",borderRadius:"15px",padding:4,fontSize:"5rem",textAlign:"center",margin:"auto",color:"var(--Button)"}}/> 
            </Box>
                
                <Typography variant='h5' sx={{color:"var(--Button)",marginBottom:2,fontFamily:"Montserrat",fontWeight:"700",textAlign:"center"}}>
                PSD To HTML
                </Typography>
                <Typography variant='p'>
                "Unlock the enchanting power of transformation as I weave magic into your PSD designs, seamlessly converting them into mesmerizing HTML masterpieces. With meticulous attention to detail and an artistic touch, I breathe life into your designs. "
             </Typography>
            </Paper>

    </Grid>


    <Grid item sm={12} md={4} sx={{transition:"all 3s ease-out",opacity:`${inView ? 1 :0}`}} ref={ref}>
            <Paper elevation={4} sx={{padding:4,backgroundColor:"#FCF0FF",width:"75%",textAlign:"justify"}}>
            <Box sx={{margin:"auto",textAlign:"center",marginBottom:2}}>
                     <FontAwesomeIcon icon={faMobileScreen} size="2xl" style={{border:"2px solid #000",borderRadius:"15px",padding:4,fontSize:"5rem",textAlign:"center",margin:"auto",color:"var(--Button)"}}/> 
            </Box>
                <Typography variant='h5' sx={{color:"var(--Button)",marginBottom:2,fontFamily:"Montserrat",fontWeight:"700",textAlign:"center"}}>
                Fully Responsive Design
                </Typography>
                <Typography variant='p'>
                "Embark on a seamless journey across all devices with my expertise in crafting fully responsive websites. Witness your vision come to life as I skillfully design websites that adapt flawlessly to every screen size and device. From the smallest smartphones to large desktop displays, your website will radiate brilliance and maintain optimal functionality. "
             </Typography>
            </Paper>

    </Grid>



    <Grid item sm={12} md={4} sx={{transition:"all 1.5s ease-out",opacity:`${inView ? 1 :0}`}} ref={ref}>
            <Paper elevation={4} sx={{padding:4,backgroundColor:"#FCF0FF",width:"75%",textAlign:"justify"}}>
            <Box sx={{margin:"auto",textAlign:"center",marginBottom:2}}>
                     <FontAwesomeIcon icon={faWordpress} size="2xl" style={{border:"2px solid #000",borderRadius:"15px",padding:4,fontSize:"5rem",textAlign:"center",margin:"auto",color:"var(--Button)"}}/> 
            </Box>
                <Typography variant='h5' sx={{color:"var(--Button)",marginBottom:2,fontFamily:"Montserrat",fontWeight:"700",textAlign:"center"}}>
                Wordpress Theme Customization
                </Typography>
                <Typography variant='p'>
                Step into a world of limitless possibilities with my expert WordPress theme customization services. We believe that your website should reflect your unique brand identity and captivate your audience with its distinct personality.
             </Typography>
            </Paper>

    </Grid>



    <Grid item sm={12} md={4} sx={{transition:"all 2.5s ease-out",opacity:`${inView ? 1 :0}`}} ref={ref}>
            <Paper elevation={4} sx={{padding:4,backgroundColor:"#FCF0FF",width:"75%",textAlign:"justify"}}>
               
            <Box sx={{margin:"auto",textAlign:"center",marginBottom:2}}>
                     <FontAwesomeIcon icon={faLaptopCode} size="2xl" style={{border:"2px solid #000",borderRadius:"15px",padding:4,fontSize:"5rem",textAlign:"center",margin:"auto",color:"var(--Button)"}}/> 
            </Box>
                <Typography variant='h5' sx={{color:"var(--Button)",marginBottom:2,fontFamily:"Montserrat",fontWeight:"700",textAlign:"center"}}>
                Website Customization
                </Typography>
                <Typography variant='p'>
                Elevate your pre-designed website to new heights with our professional customization services. Our skilled team will fine-tune your website to perfectly align with your vision and requirements. "
             </Typography>
            </Paper>

    </Grid>



    <Grid item sm={12} md={4} sx={{transition:"all 2.8s ease-out",opacity:`${inView ? 1 :0}`}} ref={ref}>
            <Paper elevation={4} sx={{padding:4,backgroundColor:"#FCF0FF",width:"75%",textAlign:"justify"}}>
              
            <Box sx={{margin:"auto",textAlign:"center",marginBottom:2}}>
                     <FontAwesomeIcon icon={faSearchengin} size="2xl" style={{border:"2px solid #000",borderRadius:"15px",padding:4,fontSize:"5rem",textAlign:"center",margin:"auto",color:"var(--Button)"}}/> 
            </Box>
                <Typography variant='h5' sx={{color:"var(--Button)",marginBottom:2,fontFamily:"Montserrat",fontWeight:"700",textAlign:"center"}}>
                Search Engine optimization
                </Typography>
                <Typography variant='p'>
                By following industry-leading SEO principles, I ensure your website is optimized for maximum visibility and top-ranking positions. From strategic keyword placement to optimized meta tags and clean code structure, every element is meticulously designed to propel your website to the forefront of search engine results.
             </Typography>
            </Paper>

    </Grid>
   </Grid>

   </section>
  )
}

export default Service