import React from 'react'
import EduInfo from '../education/eduInfo'
import Practical from '../experience/practExp'
import GenInfo from '../general/genInfo'
import './home.css'

function Home() {
  return (
    <div className='home'>
    <GenInfo />
    <EduInfo />
    <Practical />
    </div>
  )
}

export default Home