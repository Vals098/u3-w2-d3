import { useParams } from "react-router"

const {movieId} = useParams()

const MovieDetails = function(){
    return(){
        <h1>Movie Details</h1>\
        <p>ID film: {movieId}</p>
    }
}

export default MovieDetails