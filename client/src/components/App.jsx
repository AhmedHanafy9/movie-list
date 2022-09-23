import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';

const {useState} = React;

const App = () => {

  var baseMovies = [
    {title: 'Mean Girls', watched: false},
    {title: 'Hackers', watched: false},
    {title: 'The Grey', watched: false},
    {title: 'Sunshine', watched: false},
    {title: 'Ex Machina', watched: false}
  ];

  const [movies, setMovies] = useState(baseMovies);
  const [filteredMovies, setFilteredMovies] = useState(baseMovies);



  const addMovie = function(movieString) {
    var movieToAdd = ([...movies, {title: movieString, watched: false}]);
    setMovies(movieToAdd);
    setFilteredMovies(movieToAdd);
    event.preventDefault();
  };

  const searchMovies = function(searchString) {
    var filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredMovies(filteredMovies);
    event.preventDefault();
  };

  const handleWatched = (movieTitle) => {
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].title === movieTitle) {
        movies[i].watched = !movies[i].watched;
      }
    }
  };

  const showWatchedMovies = (event) => {
    var watchedMovies = [];
    for (var i = 0; i < movies.length; i++) {
      if (movies[i].watched) {
        watchedMovies.push(movies[i]);
      }
    }
    setFilteredMovies(watchedMovies);
  };

  const showUnwatchedMovies = (event) => {
    var unwatchedMovies = [];
    for (var i = 0; i < movies.length; i++) {
      if (!movies[i].watched) {
        unwatchedMovies.push(movies[i]);
      }
    }
    setFilteredMovies(unwatchedMovies);
  };

  const showAllMovies = (event) => {
    setFilteredMovies(movies);
  };


  return (
    <div>
      <nav className='title-bar'>
        <h1>Movie List</h1>
      </nav>
      <AddMovie handleAddMovie={addMovie}/>
      <Search handleSearchMovie={searchMovies}/>
      <button onClick ={showWatchedMovies}>Watched</button>
      <button onClick ={showUnwatchedMovies}>To Watch</button>
      <button onClick ={showAllMovies}>All</button>
      <MovieList listOfMovies={filteredMovies} handleWatched={handleWatched} watchedMovies={watchedMovies}/>
    </div>
  );
};

export default App;
