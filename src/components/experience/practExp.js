import React from 'react'
import '../style.css'
function Practical() {
  return (
    <div className='general'>

    <h3>Experience </h3>
    <div >
      <form>
        <label for='name'>company name :</label>
        <input type='text' id='name' ></input>
        <label for='position'>position title :</label>
        <input type='text' id='position' ></input>
        <label for='task'>task of your job :</label>
        <input type='text' id='task' ></input>
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

export default Practical