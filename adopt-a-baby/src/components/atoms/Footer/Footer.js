import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import './footer.css'

export default function Footer() {
  return (
      <> 
          <footer className='footer'>
          
            <div className='link-container'>
                <ul>
                    <a href="/"><li><FontAwesomeIcon icon={faInstagram} className="icons"/></li></a>
                    <a href="/"><li><FontAwesomeIcon icon={faTwitter} className="icons"/></li></a>
                </ul>
            </div>
            
          </footer>
      </>
   
  )
}
