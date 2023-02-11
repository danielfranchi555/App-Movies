import React from 'react'
import './Footer.scss'
import logofc from '../../img/fc.png'
import logoTw from '../../img/tw.png'
import logoig from '../../img/ig.png'

const Footer = () => {
  return (
    <div  style={{backgroundColor:' #00204a',marginTop:'100px'}}>
        <footer>
<div class="footer" >
<div class="" style={{display:'flex',justifyContent:'center'}}>
    <div style={{padding:'10px'}}>
        <a href="#">  <i class="fa fa-facebook"></i><img src={logoig} className='logoRedes' alt="" /></a>
</div>
    <div style={{padding:'10px'}}>
        <a href="#"> <i class="fa fa-instagram"></i><img src={logoTw} className='logoRedes' alt="" /></a>
</div>
    <div style={{padding:'10px'}}>
        <a href="#"><i class="fa fa-youtube"> </i><img src={logofc} className='logoRedes' alt="" /></a>
</div>
    <div style={{padding:'10px'}}>
        <a href="#"> <i class="fa fa-twitter"></i><img src={logoig} className='logoRedes' alt="" /></a>
</div>
</div>

<div class="footer-bottom" style={{display:'flex',justifyContent:'center'}}>
    <div>
        <ul>
<li><a href="#">Contact us</a></li>
<li><a href="#">Our Services</a></li>
<li><a href="#">Privacy Policy</a></li>
<li><a href="#">Terms & Conditions</a></li>
<li><a href="#">Career</a></li>
</ul>
    </div>

</div>

<div class="footer-bottom" style={{display:'flex',justifyContent:'center'}}>
    <div>
        INFERNO Copyright © 2021 Inferno - All rights reserved || Designed By: Mahesh 

    </div>
</div>
</div>
</footer>
    </div>
  )
}

export default Footer