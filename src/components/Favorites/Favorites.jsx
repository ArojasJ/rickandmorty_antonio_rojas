import React from "react";
import { connect } from "react-redux";

import { CardFav } from "../CardFav/CardFav";

export function Favorites({ myFavorites }) {
  console.log(myFavorites);
  return (
    <div>
      {myFavorites.map((character) => (
        <CardFav
          id={character.id}
          key={character.id}
          name={character.name}
          species={character.species}
          gender={character.gender}
          image={character.image}
        />
      ))}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    myFavorites: state.myFavorites,
  };
}

export default connect(mapStateToProps)(Favorites);
