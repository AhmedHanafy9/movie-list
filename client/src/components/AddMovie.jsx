import React from 'react';
import MovieListItem from './MovieListItem.jsx';
const {useState} = React;

const AddMovie = ({handleAddMovie}) => {
  const [movieEntry, setMovieEntry] = useState('');

  return (
    <form className="movie-form"
      onSubmit={(event) => {
        handleAddMovie(movieEntry);
      }}>
      <input className= "movie-input" type="text" placeholder="Add movie title here"
        value={movieEntry}
        onChange={(event) => setMovieEntry(event.target.value)}/>
      <button className="add-button" type="submit">Add</button>
    </form>
  );
};

export default AddMovie;