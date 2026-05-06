import { useParams } from "react-router"

const MovieDetails = function () {
  const { movieId } = useParams()
  return (
    <>
      <h1>Movie Details</h1>
      <p>ID film: {movieId}</p>
    </>
  )
}

export default MovieDetails
