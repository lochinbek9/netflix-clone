import "./TitleCards.css"

import React, {useEffect, useRef, useState} from "react"
import cards_data from "../../assets/cards/Cards_data"



function TitleCards({title, category}) {

  const [apiDate, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzJlMDUzYTRmYjYyMWRiNGQ1NWFlNmYzZGE0MjQ1ZSIsIm5iZiI6MTc1MDE3MDA3NS4wNDMsInN1YiI6IjY4NTE3OWRiNjMxZjg5ZTk5NmI2ZTBiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEAlDFOHbKLaWxaRpbt6gDeUuY9qWu2MR9zPpfFnags'
    }
  };
  


const handleWheel = (event) =>{
  event.preventDefault();
  cardsRef.current.scrollLeft += event.deltaY;
}

useEffect(() =>{

  fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
  .then(res => res.json())
  .then(res => setApiData(res.results))
  .catch(err => console.error(err));

  cardsRef.current.addEventListener('wheel', handleWheel)
}, []);

  return (
    <div className="title-cards">
      <h2>{title?title: "Popular on Netflix"} </h2>
      <div className="card-list" ref={cardsRef}>
         {apiDate.map((card, index) =>{
          return <div className="card" key={index}>
            <img src={ `https://image.tmdb.org/t/p/w500/`+card.backdrop_path} alt="" />
            <p>{card.original_title}</p>
          </div>
         })}
      </div>
    </div>
  )
}

export default TitleCards