import React,{useState} from 'react'
import "../Feaures/Features.css"
import {Typography,Grid} from "@mui/material";
import FeaturesSlider from './FeaturesSlider';
export default function Features() {
const [count,setCount]=useState(0)
const timer =setTimeout(()=>{
if(count < FeaturesSlider.length){
    setCount((prev)=>{return prev+=1});
}else{
    setCount(0);
};
return(()=>{
    clearTimeout(timer);
})
},3000)
 
  
  
    return (
    <section id="Features">
        <Grid container spacing={0}>
            <Grid item sm={12}>
                <Typography variant='h1'>
                    {/* 100% CUSTOMER SATISFACTION   */}
                    {FeaturesSlider[count]}
               
                </Typography>
            </Grid>
        </Grid>
    </section>
  )
}
