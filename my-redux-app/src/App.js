import React from 'react';
import './App.css';
import {useEffect, useState} from 'react';
import './globals/globalVariables';
import { posterPath } from './globals/globalVariables';
import './styles/styles.scss';

function App() {
  const [moviesData, setMoviesData] = useState('');

  const fetchData = async () => {
    const results = await fetch('https://api.themoviedb.org/3/movie/now_playing?api_key=5d25ff38c62c8743cafcfe4221c1f5ae&language=en-US&page=1');
    const jsonData = await results.json();
    setMoviesData( jsonData.results);
    }

    useEffect(() => {
      fetchData();
    }, []);
  
    
  return (
    <div className="App">
      {moviesData === '' ? (
        '<h1>Fetching todos...</h1>'
       ) : (
         <ul>
           {moviesData.map(item => (
              <>
              <img key={item.id} src={posterPath+item.poster_path}></img>
              <li key={item.id}>{item.title}</li>
             </>
           ))}
        </ul>
      )}
    </div>
  );
}

export default App;