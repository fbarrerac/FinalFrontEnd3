/* eslint-disable react/prop-types */
import { useEffect, useReducer } from "react";
import { Link } from "react-router-dom";

const Card = ({ name, username, id }) => {
  const reducer = (fav, action) => {
    switch (action.type) {
      case "ADD_FAV":
        return true;
      case "REMOVE_FAV":
        return false;
      default:
        return fav;
    }
  };

  const [fav, dispatch] = useReducer(reducer, false);

  useEffect(() => {
    const aaa = JSON.parse(localStorage.getItem("favs"));
    aaa && aaa.map((item) => (item.id == id ? dispatch({ type: "ADD_FAV" }) : null));
  }, []);

  const removeFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = favs.filter((favCard) => favCard.id !== id);

    localStorage.setItem("favs", JSON.stringify(newFavs));
    dispatch({ type: "REMOVE_FAV" });
  };

  const addFav = () => {
    const favs = JSON.parse(localStorage.getItem("favs")) || [];
    const newFavs = [...favs, { id, name, username }];

    localStorage.setItem("favs", JSON.stringify(newFavs));
    dispatch({ type: "ADD_FAV" });
  };

  return (
    <div className="card">
      <Link to={`/dentist/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{username}</h2>
      <h2>{id}</h2>

      {fav ? (
        <button onClick={removeFav} className="favButton">
          Quit fav
        </button>
      ) : (
        <button onClick={addFav} className="favButton">
          Add fav
        </button>
      )}
    </div>
  );
};

export default Card;
