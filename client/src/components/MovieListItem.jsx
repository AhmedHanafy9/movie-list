import React from 'react';
const {useState} = React;

const MovieListItem = ({movie, handleWatched}) => {


  const handleWatchedButton = () => {
    handleWatched(movie.title);
  };

  const style = {
    backgroundColor: movie.watched ? 'greenyellow' : 'transparent',
    fontWeight: movie.watched ? 'bold' : 'normal',
    float: 'right'
  };

  return (
    <div className="movie-list-entry">
      {movie.title}
      <button style ={style}
        className="watched-button"
        type="button"
        value={movie}
        onClick = {handleWatchedButton}>
        Watched</button>
    </div>
  );
};

export default MovieListItem;