import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({listOfMovies, handleWatched}) => (
  <div className="movie-list">
    {listOfMovies.map((movie, index) =>
      <MovieListItem movie={movie} key={index} handleWatched={handleWatched}/>)}
  </div>
);

export default MovieList;