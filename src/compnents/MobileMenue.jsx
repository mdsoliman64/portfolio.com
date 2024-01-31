import React,{useState} from 'react'
import ListIcon from '@mui/icons-material/List';
import CancelIcon from '@mui/icons-material/Cancel';
import {Box} from "@mui/material"
import "./MobileMenu.css"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';

function MobileMenue() {
const [isClick, setClick]=useState(false);
function clickHandle(){

    setClick(!isClick);
}
  return (
    <section className='MobileMenu' style={{width:"100%"}}>
    <Box className="MobileMenu-Item" sx={{width:"100%"}}>
        {isClick ? (<CancelIcon onClick={clickHandle} className='MobileMenu-icon' sx={{fontSize:40}}/>):(<ListIcon onClick={clickHandle} className='MobileMenu-icon' sx={{fontSize:40}}/>)}
        <Box className={isClick ? "active" : "inactive"}>
            <a href='/'>
                <HomeRoundedIcon sx={{fontSize:30}}/>
            </a>

            <a href='/#About'>
                <PersonIcon sx={{fontSize:30}}/>
            </a>

            <a href='#Home'>
                <SettingsIcon sx={{fontSize:30}}/>
            </a>


            <a href='/services'>
                <RocketLaunchIcon sx={{fontSize:30}}/>
            </a>


            <a href='/portfolio'>
                <BusinessCenterIcon sx={{fontSize:30}}/>
            </a>

            <a href='/#contact'>
                <PermContactCalendarIcon sx={{fontSize:30}}/>
            </a>
        </Box>
       
    </Box>

   
    </section>
  )
}

export default MobileMenue