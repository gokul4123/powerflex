import React, { useEffect, useState } from 'react'
import './Navbar.css'
import dumbell from '../../assets/dumbell.png'
import menu from '../../assets/menu_icon.png'
import {Link} from 'react-scroll'
function Navbar() {
  const[sticky,setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',()=>{
      window.scrollY >50 ? setSticky(true) : setSticky(false);
    })

  },[]);

  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  }; 


  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={dumbell} alt='' className='logo'/>
      <ul className={mobileMenu? 'nav ul':'hide-mobile-menu'}>
        <li><Link to='hero' smooth={true} offset={0}>Home</Link></li>
        <li><Link to='about' smooth={true} offset={-260}>About Us</Link> </li>
        <li><Link to='program' smooth={true} offset={-320}>Programs</Link></li>
        <li><button className='btn'><Link to='contact' smooth={true} offset={0}>Contact</Link></button></li>
      </ul>
      <img src={menu} alt="" className='menu-icon' onClick={toggleMenu}/>
    </nav>
  )
}

export default Navbar
