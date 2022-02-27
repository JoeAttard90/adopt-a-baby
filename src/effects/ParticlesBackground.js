import React from 'react'
import Particles from 'react-tsparticles'
import ParticleConfig from './particle-config.js'

export default function ParticlesBackground() {
  return (
      <Particles params={ParticleConfig}></Particles>
  )
}
