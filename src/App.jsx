import { useState } from "react"

function App() {
  const [movies, setMovies] = useState([])
  const [favorites, setFavorites] = useState([])
  const [searchTerm, setSearchTerm] = useState("")
  const [page, setPage] = useState(1)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [selectedMovie, setSelectedMovie] = useState(null)
  const [view, setView] = useState("search") //'search' or 'favorites'

  const API_KEY = import.meta.VITE_TMDB_API_KEY

  return (
    <div>
      Movie App
      {/* git init
git add .
git commit -m "Initial commit"
 git remote add origin https://github.com/your-username/my-portfolio.git
git branch -M main
git push -u origin main
 */}
    </div>
  )
}

export default App
