
import "./Player.css"

import back_arrow_icon from "../../assets/back_arrow_icon.png"
import { useEffect, useState } from "react";

function Player() {
  const [apiData, setApiData] = useState(
    {
      name: "",
      key: "",
      published_at: "",
      typeof: ""
    }
  )

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNzJlMDUzYTRmYjYyMWRiNGQ1NWFlNmYzZGE0MjQ1ZSIsIm5iZiI6MTc1MDE3MDA3NS4wNDMsInN1YiI6IjY4NTE3OWRiNjMxZjg5ZTk5NmI2ZTBiZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.JEAlDFOHbKLaWxaRpbt6gDeUuY9qWu2MR9zPpfFnags'
    }
  };
  
useEffect(()=>{
  fetch('https://api.themoviedb.org/3/movie/574475/videos?language=en-US', options)
  .then(res => res.json())
  .then(res => setApiData(res.results[0]))
  .catch(err => console.error(err));  
})

  return (
    <div className="player">
        <img src={back_arrow_icon} alt="" />
        <iframe width="90%" height="90%" 
        src={`https://www.youtube.com/embed/${apiData.key}`} title="YouTube video player" frameborder="0" allowfullscreen></iframe>
        <div className="player-info">
          <p>Published Date</p>
          <p>Name</p>
          <p>Type</p>
        </div>
    </div>
  )
} 

export default Player