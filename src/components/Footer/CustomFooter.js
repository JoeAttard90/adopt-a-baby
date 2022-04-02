import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import { faDiscord } from "@fortawesome/free-brands-svg-icons"
//import openSea from '../../images/opensea-edit.png'
import './footer.css'

const CustomFooter = () => {
  return (
      <> 
      <footer className='main-footer'>
        <div className='link-container'>
          <ul>
            <li><a href="https://www.instagram.com/adoptababynft/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} className="icons"/></a></li>
            <li><a href="https://twitter.com/NftAdoptABaby" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faTwitter} className="icons"/></a></li>
            <li><a href="https://discord.gg/VxU4APxEHq" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faDiscord} className="icons"/></a></li>
            {/*<li><a href="https://opensea.io/AdoptABaby" target="_blank" rel="noreferrer"><img class='oceansea-logo' src={openSea} alt="adopt-a-baby"></img></a></li>*/}
          </ul>
        </div>
      </footer>
      </>
   
  )
}

export default CustomFooter
