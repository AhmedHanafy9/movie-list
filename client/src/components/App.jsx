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
        setFilteredMovies(response.data);
      });
  };

  useEffect(()=> {
    fetchAllMovies();
  }, []);

  // useEffect(()=> {
  //   fetch('http://localhost:3000/api/movies')
  //     .then(response => response.json())
  //     .then(data => {
  //       setFilteredMovies(data);
  //       console.log('movies', data);
  //     });
  // }, []);




  const addMovie = (movieString) => {
    let movieToAdd = ([...movies, {title: movieString, watched: false}]);
    setMovies(movieToAdd);
    setFilteredMovies(movieToAdd);
    event.preventDefault();
  };

  const searchMovies = (searchString) => {
    let filteredMovies = movies.filter((movie) => {
      return movie.title.toLowerCase().includes(searchString.toLowerCase());
    });
    setFilteredMovies(filteredMovies);
    event.preventDefault();
  };

  const handleWatched = (movieTitle) => {
    for (let i = 0; i < movies.length; i++) {
      if (movies[i].title === movieTitle) {
        movies[i].watched = !movies[i].watched;
      }
    }
    setIsWatched(!isWatched);
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
      <MovieList listOfMovies={filteredMovies} handleWatched={handleWatched}/>
    </div>
  );
};

export default App;