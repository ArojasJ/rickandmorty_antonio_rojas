import React from "react";
import styles from "./Nav.module.css"
import SearchBar from "./SearchBar/SearchBar";
import { Link } from "react-router-dom";

export default function Nav({onSearch}) {
    return (
        <div className={styles.containerNav}>
        <Link to='/About' className={styles.links}>ABOUT</Link>
        <Link to='/Home' className={styles.links}>HOME</Link>
        <Link to='/Favorites' className={styles.links}>FAVORTES</Link>
        <SearchBar className={styles.searchBar} onSearch={onSearch} />
        </div>
    )
}