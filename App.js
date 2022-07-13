import { useQuery, gql } from '@apollo/client';
import './App.css';
import Loading from './comp/Loading';
import Cards from './comp/Cards';
import Navbar from './comp/Navbar';
import Fav from './comp/Fav';
import Tloo from '../src/tlo.jpg';
import Error from './comp/Error';
import { useState } from 'react';
const GETROCK = gql`
  query GETROCK {
    launchesPast {
      mission_name
      links{
        article_link
        video_link
      }
      ships{
        name
        home_port
        image
      }
    }
  }
`;

function App() {
  const { loading, error, data } = useQuery(GETROCK);
  const [ czy,setczy ] = useState(false);
  const [ liked,setliked ] = useState([]);
  if (loading) return <Loading/>;
  if (error) return <Error err={error}/>
  const passdata = (datass) => {
    setliked(liked => [...liked,datass]);
  }
  const passdat = (datass) => {
    setliked(liked=> [...liked.filter(element => {
      return element!=liked[datass];
    })]);
  }
  const setter = (datas) => {
    setczy(datas);
  }
  return (
    <div>
      <Navbar setter={setter}/>
      <div style={{display: czy ? 'none' : 'block'}} className='App'>
      <img className='tlo' src={Tloo}/>
      <Cards value={data} passdata={passdata}/>
      </div>
      <div style={{display: czy ? 'block' : 'none'}} className='App'>
      <img className='tlo' src={Tloo}/>
      <Fav value={liked} data={data} passdat={passdat}/>
      </div>
    </div>
    
  )
}
export default App;
