import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import openSea from '../../../images/opensea-edit.png'
import './footer.css'

const CustomFooter = () => {
  return (
      <> 
          <footer className='main-footer'>
            <div className='link-container'>
                <ul>
                    <a href="/"><li><FontAwesomeIcon icon={faInstagram} className="icons"/></li></a>
                    <a href="/"><li><FontAwesomeIcon icon={faTwitter} className="icons"/></li></a>
                    <a href="/"><li><img class='oceansea-logo' src={openSea} alt="adopt-a-baby"></img></li></a>
                </ul>
            </div>
          </footer>
      </>
   
  )
}

export default CustomFooter
