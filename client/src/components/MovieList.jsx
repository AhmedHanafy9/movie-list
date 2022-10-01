import React from 'react';
import MovieListItem from './MovieListItem.jsx';

const MovieList = ({listOfMovies, handleWatched, handleDelete}) => (
  <div className="movie-list">
    {listOfMovies.map((movie, index) =>
      <MovieListItem movie={movie} key={movie.id} handleWatched={handleWatched} handleDelete={handleDelete}/>)}
  </div>
);

export default MovieList;