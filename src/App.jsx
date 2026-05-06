import "./App.css"
import NetflixNavbar from "./components/NetflixNavbar"
import NetflixFooter from "./components/NetflixFooter"
// import NetflixCarousel from "./components/NetflixCarousel"
import NetflixProfile from "./components/NetflixProfile"
import NetflixSettings from "./components/NetflixSettings"
// import NetflixGenres from "./components/NetflixGenres"
import {BrowserRouter, Routes, Route} from "react-router"
import NetflixHome from "./components/NetflixHome"

function App() {
  return (
    <BrowserRouter>
      <NetflixNavbar></NetflixNavbar>
      <Routes>
        {/* <NetflixGenres></NetflixGenres>
        <NetflixCarousel
          query="lord of the rings"
          title="The Lord of the Rings Saga"
        />
        <NetflixCarousel query="harry potter" title="Harry Potter Saga" />
        <NetflixCarousel query="matrix" title="Matrix Saga" /> */}
        <Route path="/" element={<NetflixHome/>}/>
        {/* <NetflixProfile></NetflixProfile>
        <NetflixSettings></NetflixSettings> */}
        <Route path="/profile" element={<NetflixProfile/>}/>
        
        <Route path="/settings" element={<NetflixSettings/>}/>

      </Routes>
      <NetflixFooter></NetflixFooter>
    </BrowserRouter>
  )
}

export default App
