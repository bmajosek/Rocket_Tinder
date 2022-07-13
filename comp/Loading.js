import React from 'react'
import './App.css'
import Tloo from '../src/tlo.jpg';
import CircularProgress from '@mui/material/CircularProgress';

function Loading() {
  return (
    <div className='App'>
        <img className='tlo' src={Tloo}/>
        <div className='Loading'>
            <CircularProgress />
        </div>
    </div>
  )
}

export default Loading