import React, { useState } from "react";
import styles from "./SearchBar.module.css";

export default function SearchBar(props) {
  const { onSearch } = props;
  const [character, setCharacter] = useState('')

  const handleChange =(e) =>{
    setCharacter(
      e.target.value
    )
    console.log(setCharacter)
  }
  return (
    <div className={styles.searchBar}>
      <div>
      <input type="search" onChange={handleChange}/>
      <button onClick={() => onSearch(character)}>
        AGREGAR
      </button>
      </div>
    </div>
  );
}
