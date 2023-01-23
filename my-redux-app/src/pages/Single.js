import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { posterPath } from "../globals/globalVariables";

const Single = () => {
  const [movie, setMovie] = useState([]);
  const [rating, setRating] = useState(null);

  let { id } = useParams();

  let fetchMovie = async () => {
    let results = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=5d25ff38c62c8743cafcfe4221c1f5ae&language=en-US`);
    const jsonData = await results.json();
    console.log(jsonData);
    setMovie(jsonData);
    setRating(Math.round(jsonData.vote_average * 10));
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <div>
      <h1>{movie.title}</h1>
      <div>
        <img src={posterPath + movie.poster_path} alt={movie.title}></img>
      </div>

      <div>
        <div className="rating">
          <p>{rating}%</p>
        </div>
        <button>add to favourites</button>
      </div>

      <div>
        <h2>Overview</h2>
        <p>{movie.overview}</p>
      </div>

      <div>
        <p>Released {movie.release_date}</p>
      </div>
    </div>
  );
};

export default Single;
