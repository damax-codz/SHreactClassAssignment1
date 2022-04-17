import React from 'react'
import EduInfo from '../education/eduInfo'
import Practical from '../experience/practExp'
import GenInfo from '../general/genInfo'
import './home.css'

function Home() {
  return (
    <div className='home'>

    <div className='side'>
     <h1>Side Hustle</h1>
     <p>React Class CV Assignment </p>
    </div>
    <div className='form'>
    <GenInfo />
    <EduInfo />
    <Practical />
    </div>
    </div>
  )
}

export default Home