import { useState, useEffect } from "react"
import SearchBar from "./components/SearchBar"
import Spinner from "./components/Spinner";
import ErrorMessage from "./components/ErrorMessage";
import MovieCard from "./components/MovieCard";

function App() {
  const [movies, setMovies] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [view, setView] = useState("search"); //'search' or 'favorites'

  const API_KEY = import.meta.env.VITE_TMDB_API_KEY

  useEffect(() => {
    // console.log(Object.keys(import.meta.env));
    // console.log(import.meta.env.VITE_TMDB_API_KEY);
    // console.log(import.meta.env.VITE_TMDB_ACCESS_TOKEN);
    // console.log(import.meta.env);
    if (view === "favorites") {
      setMovies([])
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null); 

      try {
        let url;
        if (searchTerm) {
          url = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(searchTerm)}&page=${page}`;
        }
        else {
          url = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
        }
        const res = await fetch(url);

        // const res = await fetch(url, {
        //   headers: {
        //     'Content-Type': "application/json",
        //   },
        // } 
        // -----------------------------------
        // {
        //   headers: {
        //     Authorization: `Bearer ${import.meta.env.VITE_TMDB_ACCESS_TOKEN}`,
        //     'Content-Type': 'application/json'
        //   }
        // }
        // );
        
        if (!res.ok) throw new Error("Failed to fetch movies");
        const data = await res.json();
        console.log(data);
        setMovies(data.results);
        setTotalPages(Math.min(data.total_pages || 0, 500)); //TMDB API max page limit
      }
      catch (err) {
        setError("Failed to fetch movies.");
      }
      finally {
        setLoading(false);
      }
    }
    fetchMovies();
  }, [searchTerm, page, view, API_KEY])

  const handleSearch = (term) => {
    setSearchTerm(term)
    setPage(1);
  }

  const displayedMovies = movies;

  return (
    <div className="container mx-auto p-4 flex flex-col items-center text-center bg-blue-950 h-full">
      <nav className="flex justify-between w-full">
        <h1 className="text-4xl text-white font-extrabold mb-6 drop-shadow-2xl">Movie Hub</h1>
        <div className="tabs tabs-border mb-6 text-center">
          <a className={`tab text-lg text-white ${view === "search" ? "tab-active" : ""}`}
            onClick={() => {
              setView("search");
              setPage(1);
            }}
          >
            Search
          </a>
          <a className={`tab text-lg text-white ${view === "favorites" ? "tab-active" : ""}`}
            onClick={() => {
              setView("favorites")
            }}
          >
          Favorites
          </a>
        </div>
      </nav>

      {view === "search" && (
        <div className="w-full max-w-md my-6">
          <SearchBar onSearch={handleSearch} />
        </div>
      )}

      {loading && <Spinner />}
      {error && <ErrorMessage message={error} />}
      {!loading && !error && displayedMovies.length === 0 && (
        <div>
          No movies found.{" "}
          {view === "favorites" ? "Add some to your favorites!" : "Try a different search."}
        </div>
      )}
      {!loading && !error && displayedMovies.length > 0 && (
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
          {displayedMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
}

export default App
