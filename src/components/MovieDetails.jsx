// import { useState } from "react";

const MovieDetails = ({ movie, onToggleFavorite, isFavorite, onCloseModal }) => {

  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://via.placeholder.com/500x750?`;

  return (
    <div className="modal modal-open">
      <div className="modal-box w-full max-w-2xl sm:max-w-3xl bg-blue-950 shadow-xl">
        <h3 className="font-bold text-xl sm:text-2xl mb-4">{movie.title}</h3>

        {/* Poster */}
        <div className="flex justify-center">
          <img 
          src={posterUrl} 
          alt={movie.title}
          className="w-full h-96 object-contain rounded-2xl mb-4" />
        </div>
        
        {/* Description */}

        <div className="w-full text-left space-y-1">
          <p className="leading-relaxed">{movie.overview}</p>
          <p className="font-semibold">
            <span>Released Date </span>{movie.released_date || "N/A"}
          </p>
          <p className="font-semibold">
            <span>Rating </span>{movie.vote_average || "N/A"}
          </p>
          <p className="font-semibold">
            <span>Genres: </span>{movie.genres ? movie.genres.map(g => g.name).join(", ") : "N/A"}
          </p>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-wrap gap-3 justify-end mt-6">
          <button 
          className={`btn ${isFavorite ? "bg-red-400 border-none" : "btn-secondary"}`}
          onClick={() => onToggleFavorite(movie)}
          >
            {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
          </button>
          <button 
          className="btn"
          onClick={onCloseModal}
          >
            Close
          </button>
        </div>
      </div>
      {/* Modal Backdrop */}
      <div className="modal-backdrop" onClick={onCloseModal}></div>
    </div>
  )
}

export default MovieDetails;