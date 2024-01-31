import React from 'react'
import { Typography,Paper,Box } from '@mui/material'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

function Contact() {
  return (
    <section id="contact">
        <Paper sx={{display:"flex",flexWrap:"wrap",flexDirection:"row",padding:2,justifyContent:"space-around",backgroundColor:"#211125",color:"#f0f8ff",borderTop:"1px solid var(--Border)"}}>
            <Typography variant='h5'> Md Soliman</Typography>
            <a href="tel:+8801855831309">
            <Box sx={{display:"flex",flexWrap:"wrap"}}>
                <FontAwesomeIcon icon={faWhatsapp} style={{fontSize:"2rem",marginRight:5}} />
                <Typography variant='h6' sx={{color:"#f0f8ff"}}>
                    +880 1855 831 309
                </Typography>
            </Box>
            </a>
            <a href="mailto:seo.mdsoliman@gmail.com">
            <Box sx={{display:"flex",flexWrap:"wrap"}}>
            
                <FontAwesomeIcon icon={faEnvelope} style={{fontSize:"1.7rem",marginRight:5}} />
                <Typography variant='h6' sx={{color:"#f0f8ff"}}>
                seo.mdsoliman@gmail.com   
                </Typography>
            
            </Box>
            </a>
        </Paper>

    </section>
  )
}

export default Contact