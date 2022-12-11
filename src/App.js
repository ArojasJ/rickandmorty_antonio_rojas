import { useState, useEffect } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import { Route, useLocation, useNavigate } from "react-router-dom";
import { Routes } from "react-router-dom";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites";

function App() {
  const navigate = useNavigate()
  const [characters, setCharacters] = useState([]);
  const location = useLocation();
  const [acsess, setAcsess] = useState(false)
  const username = "jauregui@gmail.com"
  const password = "antonio1234"

  function login(userData){
    if(userData.username === username && userData.password === password){
      setAcsess(true)
      navigate("/home")
    }
    else{
      alert("usuario o contraseña incorrecta")
    }

  }

  function onSearch(character) {
    fetch(`https://rickandmortyapi.com/api/character/${character}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      });
  }

  function onClose(id) {
    setCharacters(characters.filter((char) => char.id !== id));
  };

  useEffect(() => {
    !acsess && navigate("/")
  }, []);




  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname !== '/' && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/Favorites" element={<Favorites/>}/>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />}></Route>
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;
