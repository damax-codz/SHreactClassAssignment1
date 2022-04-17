import React from 'react'
import '../style.css'
function GenInfo() {
  return (
    <div className='general' >
    <h3>General </h3>
    <div >
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