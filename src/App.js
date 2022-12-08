import React, { useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MovieList } from "./components/MovieList";
import {MovieListHeading} from "./components/MovieListHeading";
import {SearchBox} from "./components/SearchBox";
import {AddFavourites} from "./components/AddFavourites";
import { RemoveFavourites } from './components/RemoveFavourites';

function App(props) {
  const [movies,setMovies] = useState([]);
  const [searchValue,setSearchValue] = useState('');
  const [favourites,setFavourites] = useState([]);

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=d7b883ff`;
    const response = await fetch(url);
    const responseJson = await response.json();
    if(responseJson.Search) {
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  },[searchValue]);

  const saveToLocalStorage = (items) => {
    localStorage.setItems("react-movie-app-favourites",JSON.stringify(items))
  };
  


  const AddFavouriteMovie = (movie) => {
    const NewFavouriteList = [...favourites,movie];
    setFavourites(NewFavouriteList);
    saveToLocalStorage(NewFavouriteList);
  }

  const removeFavouriteMovie = (movie) => {
    const newFavouriteList = favourites.filter(
      (favourite) => favourite.imdbID !== movie.imdbID
    );
    setFavourites(newFavouriteList);
    saveToLocalStorage(newFavouriteList);
  }
  

  return (
    <div className="container-fluid movie-app">
        <div className="row d-flex align-items-center mt-4 mb-4">
          <MovieListHeading heading="Movies"/>
          <SearchBox searchValue={searchValue} setSearchValue={setSearchValue} />

        </div>
      <div className="row">
        <MovieList
         movies={movies}
         handleFavouritesClick={AddFavouriteMovie}
         favouriteComponent={AddFavourites}
         />
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
        <MovieListHeading heading="favourites" />
      </div>
      <div className="row">
        <MovieList 
        movies={favourites}
        handleFavouritesClick={removeFavouriteMovie}
        favouriteComponent={RemoveFavourites}
        />
      </div>
    </div>
  );
}

export default App;
