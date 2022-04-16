import React from 'react'
import '../style.css'
function EduInfo() {
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'0px 40px 20px 0px'}}>

    <h3>Education </h3>
    <div className='general'>
      <form>
        <label for='name'>school name :</label>
        <input type='text' id='name' ></input>
        <label for='email'>title of study :</label>
        <input type='email' id='email' ></input>
       
        <div style={{display:'flex',justifyContent:'space-between', marginTop:'20px'}}>
        <div style={{display:'flex',flexDirection:'column'}}>
        <label for='password'>start date :</label>
        <input type='date' id='date' ></input>
        </div>
    
        <div style={{display:'flex',flexDirection:'column'}}>
        <label for='password'>end date :</label>
        <input type='date' id='date' ></input>
        </div>
        </div>
      </form>
    </div>
    </div>
  )
}

export default EduInfo