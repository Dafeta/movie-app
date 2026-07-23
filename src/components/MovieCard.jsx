// import React from 'react'

const MovieCard = ({ movie, onToggleFavorite, isFavorite }) => {

  const posterUrl = movie.poster_path ? `https://image.tmdb.org/t/p/w500${movie.poster_path}` : `https://via.placeholder.com/500x750?`;

  return (
    <div className="group rounded-2xl overflow-hidden shadow-lg relative">
      {/* Poster */}
      <img 
      src={posterUrl} 
      alt={movie.title}
      className="w-full h-96 object-cover group-hover:scale-110 duration-300" />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 duration-300 flex flex-col justify-center items-center text-center p-4">
        <h2 className="text-white text-2xl font-bold mb-2">{movie.title}</h2>
        <p className="text-gray-300 text-lg mb-4">
          {movie.release_date ? movie.release_date.substring(0, 4) : "N/A"}
        </p>
        <div className="flex gap-2">
          <button className="btn btn-sm btn-primary ">Details</button>
          <button 
          className={`btn btn-sm ${isFavorite ? "btn-error" : "btn-secondary"}`}
          onClick={() => onToggleFavorite(movie)}
          >
            {isFavorite ? "Remove" : "Favorite"}
          </button>
        </div>
      </div>
    </div>
  )
}

export default MovieCard;