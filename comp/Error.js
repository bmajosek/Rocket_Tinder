import React from 'react'
import './App.css'
import Tloo from '../src/tlo.jpg';

function Error() {
  return (
    <div className='App'>
        <img className='tlo' src={Tloo}/>
        <div className='Loading'>
            <h1>Error :(</h1>
        </div>
    </div>
  )
}

export default Error