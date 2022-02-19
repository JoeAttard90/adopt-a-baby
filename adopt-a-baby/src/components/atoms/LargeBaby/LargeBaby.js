import React from 'react'
import baby from '../../../images/main-image.png'
import './largebaby.css'

export default function LargeBabies() {
  return (
    <div class='baby-container'>
      <img class='main-img' src={baby} alt="adopt-a-baby"></img>
    </div>  
  )
}
