import React, { lazy} from "react";
import { NavLink } from "react-router-dom";
import Popup from "reactjs-popup";
const Video = lazy(() => import('./../pages/video/Video'));

const DEFAULT_PLACEHOLDER_IMAGE =
  "https://m.media-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SX300.jpg";

const Movie = ({ movie }) => {
  const poster =
    movie.Poster === "N/A" ? DEFAULT_PLACEHOLDER_IMAGE : movie.Poster;
  return (
    <>
    <div className="col-lg-6 p-4 bg-light movie text-center" >
      <h2 className="text-info">{movie.Title}</h2>
      <div className="container bg-white p-2" >
        <img className="img-thumbnail" 
          width="200"
          alt={`The movie titled: ${movie.Title}`}
          src={poster}
        />
      </div>
      <p className="text-danger">({movie.Year})</p>
      <Popup trigger={<button className="btn-info"> Detail</button>} position="right center">
        <Video title={movie.Title} photo={poster} tahun={movie.Year} imdb={movie.imdbID} />
      </Popup>
    </div>
    
	</>
  );
};

export default Movie;
