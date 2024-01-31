import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import "../compnents/Navbar.css";


function Navbar() {
  return (
    <section  className='Navbar'>
        <div className='Navbar-Menu'>
        <a href="/">
          <div className="icon">
            <HomeRoundedIcon sx={{fontSize:35,textAlign:"center"}}/>
          </div>
         </a>

         <a href="/#About">
          <div className="icon">
            <PersonIcon sx={{fontSize:35,textAlign:"center"}}/>
          </div>
         </a>


         <a href="/certificates">
          <div className="icon">
            <SettingsIcon  sx={{fontSize:35,textAlign:"center"}}/>
          </div>
         </a>


         <a href="/services">
          <div className="icon">
            <RocketLaunchIcon className="rocket-icon" sx={{fontSize:35}}/>
          </div>
         </a>

         <a href="/portfolio">
          <div className="icon">
            <BusinessCenterIcon sx={{fontSize:35,textAlign:"center"}}/>
          </div>
         </a>

         <a href="/#contact">
          <div className="icon">
            <PermContactCalendarIcon  sx={{fontSize:35,textAlign:"center"}}/>
          </div>
         </a>







        </div>
    </section>
  )
}

export default Navbar