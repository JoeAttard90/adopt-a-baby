import React from 'react'
import baby from '../../../images/main-image.png'
import './babies.css'

export default function LargeBabies() {
  return (
    <div class='baby-container'>
       <a href="/"><img class='main-img' src={baby} alt="adopt-a-baby"></img></a>
       <a href="/" class="welcome-link"><h2 class="welcome">
        -
        Adopt a Baby NFTs Coming Soon! 
        -
      </h2></a>
      <br>
      </br>
      <p>
        <strong>100</strong> Individual babies must be adopted!
        Each baby is one-of-a-kind. <strong>Unique</strong>. Be an early adopter
      </p>
    </div>  
  )
}
