import React, { useReducer, useEffect } from "react";

import Header from "../../layout/Header";
import Movie from "../../layout/Movie";
import spinner from "../../assets/ajax-loader.gif";
import Search from "../../layout/Search";
import { initialState, reducer } from "../../middlewares/reducers/MovieReducer";
import axios from "axios";
const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b";

const Home = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios.get(MOVIE_API_URL).then(jsonResponse => {
      dispatch({
        type: "SEARCH_MOVIES_SUCCESS",
        payload: jsonResponse.data.Search
      });
    });
  }, []);

  const search = searchValue => {
    dispatch({
      type: "SEARCH_MOVIES_REQUEST"
    });

    axios(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`).then(
      jsonResponse => {
        if (jsonResponse.data.Response === "True") {
          dispatch({
            type: "SEARCH_MOVIES_SUCCESS",
            payload: jsonResponse.data.Search
          });
        } else {
          dispatch({
            type: "SEARCH_MOVIES_FAILURE",
            error: jsonResponse.data.Error
          });
        }
      }
    );
  };

  const { movies, errorMessage, loading } = state;

  const retrievedMovies =
    loading && !errorMessage ? (
      <img className="spinner" src={spinner} alt="Loading spinner" />
    ) : errorMessage ? (
      <div className="errorMessage">{errorMessage}</div>
    ) : (
      movies.map((movie, index) => (
        <Movie key={`${index}-${movie.Title}`} movie={movie} />
      ))
    );

  return (
    <div className="container">
      <div className="m-container">
        <Header text="Amazon Search Product" />

        <Search search={search} />

        <p className="text-default App-intro">Sharing a few of our favourite movies</p>

        <div className="row movies">{retrievedMovies}</div>
      </div>
    </div>
  );
};

export default Home;
