import React from 'react';
import {NavLink, useRouteMatch, Route} from 'react-router-dom'




const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}



function MovieDetails({ movie }) {
  const { title, director, metascore } = movie;
  
  return (
    <div className="movie-card">
      <h2>{title}</h2>
      <div className="movie-director">
        Director: <em>{director}</em>
      </div>
      <div className="movie-metascore">
        Metascore: <strong>{metascore}</strong>
      </div>
      <NavLink to={`/movies/${movie.id}`}>Click Here</NavLink>
    </div>
  );
}

export default MovieList;
