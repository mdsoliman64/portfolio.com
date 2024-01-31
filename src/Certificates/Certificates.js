import React,{useState} from 'react'
import {Grid,Typography,Paper,Box} from "@mui/material"
import CollegePicture from "../Assets/Images/college-picture.jpg"
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CertificatePost from './CertificatesPost';


function Certificates() {

    const [isClick, setClick]=useState(false);
    const [isLike,setLike]=useState(20);

    function handleClick(){
        setClick(!isClick);
        if(!isClick){
            setLike((prev)=>{return prev+1});
        }
    }

  return (
    <section id="certificates">
        <Grid container spacing={4}>
            <Grid item sm={12} xs={12} md={6}>
                <Paper elevation={4} sx={{width:"100%",height:"auto"}}>
                    <Typography component="h2" variant='h3' sx={{marginLeft:"10px",fontWeight:"400px",marginTop:"10px"}}>
                        Md Soliman
                    </Typography>
                    <hr/>
                    <Typography component="p" variant='body' sx={{marginLeft:"10px",fontFamily:"Ubuntu",marginTop:"10px",marginBottom:"10px"}}>
                       I have completed my Preli To Masters degree in Accounting from Govt. Commerce College, Chittagong under National  University.
                       
                     </Typography>
                   <Box >
                        <img src={CollegePicture} alt="govt commerce college" style={{width:"100%",height:"auto"}}/>
                   </Box>
                   <Box sx={{display:"flex",alignContent:"space-around",alignItems:"center",textAlign:"center",margin:"auto",width:"100%"}}>

                        {isClick ? <FavoriteIcon  sx={{fontSize:"3rem",textAlign:"center"}}/> : <FavoriteBorderIcon onClick={handleClick} sx={{fontSize:"3rem",textAlign:"center"}}/>} 
                        <Typography component="h2" variant="h4" sx={{textAlign:"center"}}>
                            {isClick? "Liked":"Like"}: {isLike}
                        </Typography>
                   </Box>
                </Paper>
            </Grid>

            <Grid item sm={12} xs={12} md={6}>
            <Paper elevation={4} sx={{padding:3,overflow:"hidden"}}>
                <Typography component="h4" variant='h4'>
                    My Certificates shortlist
                </Typography>
                <hr/>
                <Box sx={{overflowY:"scroll",maxHeight:"690px"}}>
                <Typography component="p" variant="subtitle1" sx={{color:"#000"}}>
                 
                     {CertificatePost.map((item)=>{
                        return(
                            <>
                            <ul>
                            <li><b> {item.name}</b></li>
                            </ul>
                            <p><b>Verrification URL:</b> <a href={item.Link} style={{color:"#000"}}>{item.Link}</a></p>
                            <p><b>ID :</b> {item.ID}</p>
                            <p><b>Description: </b> {item.description}</p>
                            </>
                        )
                     })}
                   
                </Typography>
                </Box>
            </Paper>
            </Grid>
        </Grid>

    </section>
  )
}

export default Certificates