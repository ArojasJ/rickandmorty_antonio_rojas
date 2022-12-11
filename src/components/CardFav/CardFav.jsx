import React from "react";
import { addFavorite, deleteFavorite } from "../../Redux/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import styles from "./cardFav.module.css";

export function CardFav(props) {
  return (
    <div className={styles.ContainerCard}>
      <button>❤️</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(CardFav);
