import React from "react";
import { connect } from "react-redux";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import { addFavorite, deleteFavorite } from "../../Redux/actions";
import { useState, useEffect } from "react";

export function Card(props) {
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    props.myFavorites.forEach((fav) => {
      if (fav.id === props.id) {
        setIsFav(true);
      }
    });
  }, [props.myFavorites]);

  function handleFavorite() {
    if (isFav) {
      setIsFav(false);
      props.deleteFavorite(props.id);
    } else {
      setIsFav(true);
      props.addFavorite(props);
    }
  }

  return (
    <div className={styles.ContainerCard}>
      {isFav ? (
        <button onClick={handleFavorite}>❤️</button>
      ) : (
        <button onClick={handleFavorite}>🤍</button>
      )}
      <button className={styles.ButtonClose} onClick={props.onClose}>
        X
      </button>
      <Link to={`/detail/${props.id}`}>
        <h2 className={styles.titleName}>{props.name}</h2>
      </Link>
      <h2>{props.species}</h2>
      <h2>{props.gender}</h2>
      <img src={props.image} alt="imagen Rick and Morty" />
    </div>
  );
}

export function mapDispatchToProps(dispatch) {
  return {
    addFavorite: (id) => {
      dispatch(addFavorite(id));
    },
    deleteFavorite: (id) => {
      dispatch(deleteFavorite(id));
    },
  };
}
export function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);
