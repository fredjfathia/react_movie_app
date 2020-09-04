import React, { useState } from 'react';

import './App.css';
import MovieList from './Componets/MovieList'
import Addmovie from './Componets/Addmovie';
function App() {
  const [movie,setMovie]=useState([{title:"Annihilation",rate:4,image:"https://fr.web.img3.acsta.net/pictures/18/02/23/12/09/5079145.jpg"},
                                   {title:"StarWars",rate:3,image:"https://fr.web.img6.acsta.net/pictures/19/10/22/10/17/3326733.jpg"}])
  const ajoutmovie=(title,image,rate)=>{
    setMovie([...movie,{title:title,image:image,rate:rate}])
  }
     return (
    <div className="App" >
      <div >
      <MovieList movie={movie}/>
      </div>
      <Addmovie ajoutmovie={ajoutmovie}/>
    </div>
  );
}

export default App;
