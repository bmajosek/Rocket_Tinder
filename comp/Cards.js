import React, { useState } from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Cards(values) {
    const [ktory,setktory] = useState(0);
    const [ flaga,setflaga ] = useState(false);
    const [ start,setstart ] = useState(false);
    const PoprzStatek = () =>{
        if(ktory)
            setktory(ktory-1);
    }
    const Like = () =>{
        setktory(ktory+1);
        values.passdata(ktory);
    }
    const DisLike = () =>{
        setktory(ktory+1);
      }
  return (
    <div>
    <div className='Start' style={{display: start? 'none' : 'block'}}>
      <h1>Witamy w rakietowni</h1>
      <h3>Czy chcesz rozpoczac podroz?</h3>
      <button className='Startowy' onClick={()=> setstart(!start)}>Start</button>
    </div>
    
    <div className='Cards' style={{display: start? 'block' : 'none'}}>
    <h1>{values.value.launchesPast[ktory%109].mission_name}</h1>
    <a href={values.value.launchesPast[ktory%109].links.article_link}>tutaj masz link do artykulu jakby cie ciekawilo es :)</a><br/>
    <a href={values.value.launchesPast[ktory%109].links.video_link}>tutaj masz link do filmiku jakby cie ciekawilo es :)</a>
    {flaga && values.value.launchesPast[ktory%109].ships[0] && <img className='Ship' src={values.value.launchesPast[ktory%109].ships[0].image} />}
    {flaga && !values.value.launchesPast[ktory%109].ships[0] && values.value.launchesPast[ktory%109] && <p>niestety ale podczas misji: {values.value.launchesPast[ktory%109].mission_name} brak zdjec</p>}
    <div className='Icons'>
      <CancelIcon onClick={DisLike} className='Icon' fontSize='large'/>
      <RocketLaunchIcon onClick={Like} className='Icon' fontSize='large'/>
      <SettingsBackupRestoreIcon onClick={PoprzStatek} className='Icon' fontSize='large'/>
      {flaga ? <VisibilityOffIcon onClick={()=> setflaga(!flaga)} className='Icon' fontSize='large'/> : <VisibilityIcon onClick={()=> setflaga(!flaga)} className='Icon' fontSize='large'/> }
    </div>
    </div>
    </div>
  )
}

export default Cards