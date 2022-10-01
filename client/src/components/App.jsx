import React from 'react';
import MovieList from './MovieList.jsx';
import MovieListItem from './MovieListItem.jsx';
import AddMovie from './AddMovie.jsx';
import Search from './Search.jsx';
import axios from 'axios';

const {useState} = React;
const {useEffect} = React;

const App = () => {

  // let baseMovies = [
  //   {title: 'Mean Girls', watched: false},
  //   {title: 'Hackers', watched: false},
  //   {title: 'The Grey', watched: false},
  //   {title: 'Sunshine', watched: false},
  //   {title: 'Ex Machina', watched: false}
  // ];

  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isWatched, setIsWatched] = useState(false);

  const fetchAllMovies = () => {
    axios.get('http://localhost:3000/api/movies')
      .then((response) => {
        setMovies(response.data);
        setFilteredMovies(response.data);
      });
  };

  const updateAddMovie = (movieTitle) => {
    const article = {movie: movieTitle, watched: 0};
    axios.post('http://localhost:3000/api/movies', article)
      .then(fetchAllMovies);
  };

  const updateWatchedStatus = (movieTitle) => {
    const article = {movie: movieTitle};
    axios.put('http://localhost:3000/api/movies', article)
      .then(fetchAllMovies());
  };

  const updateDeleteStatus = (movieTitle) => {
    const article = {movie: movieTitle};
    axios.delete('http://localhost:3000/api/movies', {data: article})
      .then(fetchAllMovies());
  };


  useEffect(()=> {
    fetchAllMovies();
  }, []);



  const addMovie = (movieTitle) => {
    updateAddMovie(movieTitle);
    event.preventDefault();
  };

  const searchMovies = (searchString) => {
    let filteredMovies = movies.filter((movie) => {
      return movie.moviename.toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredMovies(filteredMovies);
    event.preventDefault();
  };

  const handleWatched = (movieTitle) => {
    updateWatchedStatus(movieTitle);
  };

  const handleDelete = (movieTitle) => {
    updateDeleteStatus(movieTitle);
  };

  const showWatchedMovies = () => {
    let watchedMovies = movies.filter((movie) => {
      return movie.watched;
    });

    setFilteredMovies(watchedMovies);
  };

  const showUnwatchedMovies = () => {
    let unwatchedMovies = movies.filter((movie) => {
      return !movie.watched;
    });
    setFilteredMovies(unwatchedMovies);
  };

  const showAllMovies = () => {
    setFilteredMovies(movies);
  };


  return (
    <div>
      <nav className='title-bar'>
        <h1>Movie List</h1>
      </nav>
      <AddMovie handleAddMovie={addMovie}/>
      <Search handleSearchMovie={searchMovies}/>
      <button className = "watched-movies" onClick ={showWatchedMovies}>Watched</button>
      <button className = "unwatched-movies" onClick ={showUnwatchedMovies}>To Watch</button>
      <button className = "all-movies" onClick ={showAllMovies}>All</button>
      <MovieList listOfMovies={filteredMovies} handleWatched={handleWatched} handleDelete={handleDelete}/>
    </div>
  );
};

export default App;