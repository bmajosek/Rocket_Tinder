import React, {useState} from 'react'
import RocketIcon from '@mui/icons-material/Rocket';
import DnsIcon from '@mui/icons-material/FavoriteBorder';
function Navbar(values) {
  return (
    <div className='Navbar'>
      <li>
        <div className="NavIconD" fontSize='large' onClick={() => values.setter(true)}><DnsIcon/>
        <div className='dropD'>
          <p>Polubione</p>
        </div>
        </div>
        
      </li>
      <li>
        <div className="NavIconR" fontSize='large' onClick={() => values.setter(false)}><RocketIcon/>
          <div className='dropR'>
            <p>Przegladaj dalej!</p>
          </div>
        </div>
      </li>     
    </div>
  )
}

export default Navbar