import NetflixGenres from "./NetflixGenres"
import NetflixCarousel from "./NetflixCarousel"

const NetflixHome = function () {
  return (
    <>
      <NetflixGenres></NetflixGenres>
      <NetflixCarousel
        query="lord of the rings"
        title="The Lord of the Rings Saga"
      />
      <NetflixCarousel query="harry potter" title="Harry Potter Saga" />
      <NetflixCarousel query="matrix" title="Matrix Saga" />
    </>
  )
}

export default NetflixHome
