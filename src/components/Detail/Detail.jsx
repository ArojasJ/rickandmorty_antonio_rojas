import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Detail.module.css";

export default function Detail() {
  const [character, setCharacter] = useState({});
  const { detailId } = useParams();


  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
      .then((response) => response.json())
      .then((char) => {
        if (char.name) {
          setCharacter(char);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      })
      .catch((err) => {
        window.alert("No hay personajes con ese ID");
      });
    return setCharacter({});
  }, [detailId]);

  
    return (
      <div className={styles.container}>
        <div className={styles.card}>
          <figure>
          <img className={styles.image} src={character.image} alt={character.name} />
          </figure>
          <div className={styles.contenido}>
        <h2>Nombre: {character.name}</h2>    
        <h2>Estatus: {character.status}</h2> 
        <h2>Especie: {character.species}</h2>
        <h2>Genero: {character.gender}</h2>
        <h2>Origen: {character.origin?.name}</h2>
        </div>
        </div>
      </div>

    )
}
