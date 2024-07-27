
import { Route, Routes } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import HomePage from "./pages/HomePage";
import MoviesList from "./pages/MoviesList";
import MovieDetails from "./pages/MovieDetails"

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesList />} />
        <Route path="/movies/:movieId" element={<MovieDetails />} />
      </Routes>
    </>
  )
}

export default App
