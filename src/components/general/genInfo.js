import React from 'react'
import '../style.css'
function GenInfo() {
  return (
    <div style={{display:'flex',flexDirection:'column',margin:'0px 40px 20px 0px'}}>
    <h3>General </h3>
    <div className='general'>
      <form>
        <label for='name'>name :</label>
        <input type='text' id='name' ></input>
        <label for='email'>email :</label>
        <input type='email' id='email' ></input>
        <label for='password'>password :</label>
        <input type='password' id='password' ></input>
      </form>
    </div>
    </div>
  )
}

export default GenInfo