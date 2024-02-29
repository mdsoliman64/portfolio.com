import React from 'react'
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import PersonIcon from '@mui/icons-material/Person';
import SettingsIcon from '@mui/icons-material/Settings';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import "../compnents/Navbar.css";
import { driver } from "driver.js";
import "driver.js/dist/driver.css";
import { useParams } from 'react-router-dom';


function Navbar(props) {
  let {id} = useParams();
  console.log({id});
  const driverObj = driver({
    showProgress: false,
    popoverClass: 'driverjs-theme',
    showButtons: ['next', 'previous', 'close'],
    steps: [
      { element: '.HomeIcon', popover: { title: 'Home', description: 'This icon is for visiting Home ' } },
      { element: '#AboutIcon', popover: { title: 'About', description: 'This is for About section. To know about me briefly click here.' } },
      { element: '#certificatesIcon', popover: { title: 'Certicates', description: 'To see my certificates list click this icon.' } },
      { element: '#servicesIcon', popover: { title: 'Services', description: 'Click this icon to see what I serve for my clients' } },
      { element: '#portfolioIcon', popover: { title: 'Portfolio', description: 'Click this icon to see what I did for client.' } },
      { element: '#contactIcon', popover: { title: 'Contact', description: 'Click this icon to talk me.' } },
    ]
  });
  

 if(window.innerWidth <700){
  console.log("this is small device");
 }else{
  driverObj.drive();
 } 






  return (
    <section  className='Navbar'>
        <div className='Navbar-Menu'>
        <a href="/">
          <div className="icon ">
            <HomeRoundedIcon sx={{fontSize:35,textAlign:"center"}} className="HomeIcon"/>
          </div>
         </a>

         <a href="/#About">
          <div className="icon" >
            <PersonIcon sx={{fontSize:35,textAlign:"center"}} id="AboutIcon"/>
          </div>
         </a>


         <a href="/certificates">
          <div className="icon">
            <SettingsIcon  sx={{fontSize:35,textAlign:"center"}} id="certificatesIcon"/>
          </div>
         </a>


         <a href="/services">
          <div className="icon" id="servicesIcon">
            <RocketLaunchIcon className="rocket-icon" sx={{fontSize:35}} />
          </div>
         </a>

         <a href="/portfolio">
          <div className="icon">
            <BusinessCenterIcon sx={{fontSize:35,textAlign:"center"}} id="portfolioIcon"/>
          </div>
         </a>

         <a href="/#contact">
          <div className="icon">
            <PermContactCalendarIcon  sx={{fontSize:35,textAlign:"center"}} id="contactIcon"/>
          </div>
         </a>







        </div>
    </section>
  )
}

export default Navbar