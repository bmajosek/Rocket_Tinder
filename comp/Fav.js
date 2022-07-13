import React, {useState} from 'react'
import CancelIcon from '@mui/icons-material/Cancel';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

function Fav(values) {
    const [ ktory,setktory ] = useState(0);
    const [ flaga,setflaga ] = useState(false);
    const PoprzStatek = () =>{
        if(ktory)
            setktory(ktory-1);
    }
    const Like = () =>{
        setktory((ktory+1)%values.value.length);
    }
    const DisLike = () =>{
        setktory((ktory+1)%values.value.length);
        values.passdat(ktory);
      }
  return (
    <div className='Cards'>
        <h1>Polubione</h1>
        {
            values &&
            values.value && 
            values.value.length > 0 
            ? (<div className='Cards'>
            <h1>{values.data.launchesPast[values.value[ktory%values.value.length]].mission_name}</h1>
            <a href={values.data.launchesPast[values.value[ktory%values.value.length]].links.article_link}>tutaj masz link do artykulu jakby cie ciekawilo es :)</a><br/>
            <a href={values.data.launchesPast[values.value[ktory%values.value.length]].links.video_link}>tutaj masz link do filmiku jakby cie ciekawilo es :)</a>
            {flaga && values.data.launchesPast[values.value[ktory%values.value.length]].ships[0] && <img className='Ship' src={values.data.launchesPast[values.value[ktory%values.value.length]].ships[0].image} />}
            {flaga && !values.data.launchesPast[values.value[ktory%values.value.length]].ships[0] && values.data.launchesPast[values.value[ktory%values.value.length]] && <p>niestety ale podczas misji: {values.data.launchesPast[values.value[ktory%values.value.length]].mission_name} brak zdjec</p>}
            <div className='Icons'>
              <CancelIcon onClick={DisLike} className='Icon' fontSize='large'/>
              <RocketLaunchIcon onClick={Like} className='Icon' fontSize='large'/>
              <SettingsBackupRestoreIcon onClick={PoprzStatek} className='Icon' fontSize='large'/>
              {flaga ? <VisibilityOffIcon onClick={()=> setflaga(!flaga)} className='Icon' fontSize='large'/> : <VisibilityIcon onClick={()=> setflaga(!flaga)} className='Icon' fontSize='large'/> }
            </div>
            </div>) : <h1>Brak polubien :(</h1>
        }
        
    </div>
  )
}

export default Fav
