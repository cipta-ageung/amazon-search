import React from "react";

const Video = props => {

  return (
    <>
    <h2 className="text-info">{props.title}</h2>
      <div className="container bg-white p-2" >
        <img className="img-thumbnail" 
          width="200"
          alt={`The movie titled: ${props.title}`}
          src={props.photo}
        />
      </div>
      <p>code imdb : <span className="text-info">{props.imdb}</span></p>
      <p>tahun produksi : <span className="text-info">{props.tahun}</span></p>
      </>
  );
};

export default Video;
