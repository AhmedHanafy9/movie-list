import React from 'react';
const {useState} = React;

const MovieListItem = ({movie, handleWatched, handleDelete}) => {


  const handleWatchedButton = () => {
    handleWatched(movie.moviename);
  };

  const handleDeleteButton = () => {
    handleDelete(movie.moviename);
  };

  const style = {
    backgroundColor: movie.watched ? 'greenyellow' : 'transparent',
    fontWeight: movie.watched ? 'bold' : 'normal',
    float: 'right'
  };

  return (
    <div className="movie-list-entry">
      {movie.moviename}
      <button style ={style}
        className="watched-button"
        type="button"
        onClick = {handleWatchedButton}>
        Watched</button>
      <button className="delete-button"
        type="button"
        onClick = {handleDeleteButton}>
        Delete</button>
    </div>
  );
};

export default MovieListItem;