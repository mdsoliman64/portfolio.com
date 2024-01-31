import React,{useState} from "react";
import "../Test-Portfolio/CarouselPortfolio.css";
import Products from "./Products";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';

export default function CarouselPortfolio(props){
const [imageIndex,setImageIndex]=useState(0);
const {mbdevice}=props;
function nextHandle(){
    setImageIndex((prev)=>{
        return prev=== Products.length -1 ? 0 : prev+=1;
    });
}
function prevHandle(){
    setImageIndex((prev)=>{
        return prev===0 ? 0 : prev-=1;
    })
}
    return(
        <>
            <section id="CarouselPortfolio" style={{transform:`translateX(-${mbdevice ? imageIndex * 0 : imageIndex * 50}%)`,}}>
                    {Products.map((item,index)=>{
                        return(
                            <div className="CP-card" key={index}>
                                <img src={item.path} alt={item.title}/>
                            <div className="CP-head">
                                <h1> {item.title} </h1>
                               <span>Tech:
                                {item.tech.map((techItem,index)=>{
                                    return(
                                        <button>{techItem}</button>
                                    )
                                })}
                                </span>
                            </div>
                            <div className="CP-body">
                                <p> {item.des}</p>
                            </div>
                            <button><a href={item.link}>Visit</a></button>
                            </div>
                        )
                    })}

                   
            </section>
            <div className="CP-button-container" style={{opacity:`${props.mbdevice ? 0:1 }`}}>
                      
                        <button onClick={prevHandle}><ArrowLeftIcon sx={{fontSize:"2rem"}}/>  </button>
                        <button onClick={nextHandle}><ArrowRightIcon sx={{fontSize:"2rem"}} /></button>
            </div>
            </>
    )
}