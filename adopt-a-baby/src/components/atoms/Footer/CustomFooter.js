import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faTwitter } from "@fortawesome/free-brands-svg-icons"
import './footer.css'

const CustomFooter = () => {
  return (
      <> 
          <footer className='main-footer'>
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

export default CustomFooter
