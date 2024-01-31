import React from 'react'
import {Paper, Typography,Box,Button} from "@mui/material"
import "./Certificates.css"
import CertificatePost from './CertificatesPost'
import ProgrammingImage from "../Assets/Images/3.gif"
function NewCertificates() {

 function handleClick(e){
const value= e.target.value;
navigator.clipboard.writeText(value)
 }   
  return (
    <div id="NewCerticate">
<Typography component="h2" variant='h2'> My Certificates</Typography>
<Paper className="certFluid" elevation={4} sx={{backgroundColor:"#210029",padding:"20px",marginBottom:"50px",width:"100%",}}>
   
    <img src={ProgrammingImage} alt="programmer"/>

        <Paper className="CertContainer"  sx={{backgroundColor:"#210029",padding:"20px", height:"300px",overflowY:"scroll",marginBottom:"50px",width:"450px"}}>
               <div id="cert">
               {CertificatePost.map((item,index)=>{
                return (
              
               
               
               
               
                <Box id="container">
                    <div className='counter'>
                    {index+1}
                    </div>
                    <div className="card">
                        <Typography component="h4" variant='h4'>
                           {item.name}
                        </Typography>
                        <Typography component="p" variant='p'>
                                {item.description} 
                              
                        </Typography>
                        <Button value={item.ID} onClick={handleClick} >{item.ID}</Button> <br/>
                        <Button variant="outlined" href={item.Link} sx={{marginTop:5}}>Verify</Button>
                    </div>
                </Box>
                )
            })}

            </div>
        </Paper>

</Paper>
    </div>
  )
}

export default NewCertificates