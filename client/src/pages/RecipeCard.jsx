import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";

const RecipeCard = ({user,card}) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const addToFavorites = () => {
    axiosInstance
      .post('/favourite', { recipeId: card.id, userId: user.id })
      .then(({ data }) => setLiked(data.likeState))
      .catch((err) => console.error(err));
  };
  const recipeOneLoad = () => {
    axiosInstance
      .get(`/recipe/${card.id}`)
      .then(({ data }) => setRecipe(data))
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    recipeOneLoad();
  }, []);
  return (
    <>
      <div>{card.title}</div>
      <img src={`${card.photo}`} />
      <div>{card.ingredients.split(';').map((el)=><div>{el}</div>)}</div>

      <div>{card.time}</div>
      <button
          onClick={() => navigate(`/recipe/${card.id}`)}
        >
          Подробнее
        </button>
      <button
          onClick={addToFavorites}
          type="button"
        >
          В избранное
        </button>
    </>

  );
};

export default RecipeCard;