import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import baby from '../../../images/main-image.png'
import './babies.css'

export default function LargeBabies() {
  return (
    <div class='baby-container'>
       <a href="/"><img class='main-img' src={baby} alt="adopt-a-baby"></img></a>
       <a href="https://opensea.io/AdoptABaby" target="_blank" class="welcome-link"><h2 class="welcome">
        -
        Adopt a Baby NFTs <u>Coming Soon!</u>
        -
      </h2></a>
      <p>Follow us on social media to stay up to date...</p>
      <div className='link-container'>
          <ul>
              <a href="https://www.instagram.com/adoptababynft/" target="_blank"><li><FontAwesomeIcon icon={faInstagram} className="icons"/></li></a>
              <a href="https://twitter.com/NftAdoptABaby" target="_blank"><li><FontAwesomeIcon icon={faTwitter} className="icons"/></li></a>
          </ul>
      </div>
      <p>
        <strong>100</strong> Individual babies must be adopted!
        Each baby is one-of-a-kind and is fully customizable with owned items. <strong>All Unique</strong>. Be an early adopter!
      </p>
    </div>  
  )
}
