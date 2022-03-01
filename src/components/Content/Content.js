import React from 'react'
import mainImage from '../../images/main-image.png'
import './content.css'

const Content = () => {
  return (
    <>
        <a href="/"><img class='main-img' src={mainImage} alt="adopt-a-baby"></img></a>
        <a href="https://opensea.io/AdoptABaby" target="_blank" rel="noreferrer" class="welcome-link">
            <h2 class="welcome">
                -
                Adopt a Baby NFTs <u>Coming Soon!</u>
                -
            </h2>
        </a>
        <p>Follow us on social media to stay up to date...</p>
    </>
    
  )
}

export default Content