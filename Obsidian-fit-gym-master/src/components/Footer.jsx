import React from 'react'
import './Footer.css'

function Footer() {
  return (
     <div className='col'>
      <div className="aam">
    <h3 id="num">
      Top fitness brands trust <span id="ud">FitHub</span> to empower their teams and members.
    </h3>
  </div>
  <hr width="100%" color="#dcdcdc" size="2" />
  <div id="hor">
    <ul className="hor">
      <li className="horiz"><a className="hori" href="#">Fitness Programs</a></li>
      <li className="horiz"><a className="hori" href="#">Join FitHub</a></li>
      <li className="horiz"><a className="hori" href="#">Download the App</a></li>
      <li className="horiz"><a className="hori" href="#">About Us</a></li>
      <li className="horiz"><a className="hori" href="#">Contact Us</a></li>
    </ul>
    <ul className="hor">
      <li className="horiz"><a className="hori" href="#">Careers</a></li>
      <li className="horiz"><a className="hori" href="#">Blog</a></li>
      <li className="horiz"><a className="hori" href="#">Help & Support</a></li>
      <li className="horiz"><a className="hori" href="#">Affiliate Program</a></li>
      <li className="horiz"><a className="hori" href="#">Investors</a></li>
    </ul>
    <ul className="hor">
      <li className="horiz"><a className="hori" href="#">Terms & Conditions</a></li>
      <li className="horiz"><a className="hori" href="#">Privacy Policy</a></li>
      <li className="horiz"><a className="hori" href="#">Cookie Settings</a></li>
      <li className="horiz"><a className="hori" href="#">Sitemap</a></li>
      <li className="horiz"><a className="hori" href="#">Accessibility</a></li>
    </ul>
  </div>

     </div>

  )
}

export default Footer