import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BigCard = ({ user, recipes }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const recipeOne = recipes.find((recipe) => recipe.id === Number(id));
  const addToFavorites = () => {
    axiosInstance
      .post("/favourite", { recipeId: recipeOne.id, userId: user.id })
      .then(({ data }) => setLiked(data.likeState))
      .catch((err) => console.error(err));
  };
  
  return (
    
        <>
          <div>{recipeOne.title}</div>

          <img src={`${recipeOne.photo}`} />
          <div>
            {recipeOne.ingredients.split(";").map((el) => (
              <div>{el}</div>
            ))}
          </div>

          <div>{recipeOne.time}</div>
          <button
          onClick={() => navigate(`/recipe`)}
        >
          Ко всем рецептам
        </button>
          <button onClick={addToFavorites} type="button">
            В избранное
          </button>
        </>
      )}
   

export default BigCard;
