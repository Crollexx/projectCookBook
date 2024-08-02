import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";

const BigCard = ({ user, recipes, setRecipes }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams(); 
  
  const recipeOne = recipes.find((recipe) => recipe?.id === Number(id));
  
  const addToFavorites = () => {
    axiosInstance
      .post("/favourite", { recipeId: recipeOne.id, userId: user?.id })
      .then(({ data }) => setLiked(data.likeState))
      .catch((err) => console.error(err));
  };

  const recipesLoad = () => {
    axiosInstance
      .get("/recipe")
      .then(({ data }) => setRecipes(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    recipesLoad();
  }, []);

  return (
    <>
      <div>{recipeOne?.title}</div>

      <img src={`${recipeOne?.photo}`} />
      <div>
        {recipeOne.ingredients.split(";").map((el) => (
          <div>{el}</div>
        ))}
      </div>

      <div>{recipeOne?.time}</div>
      <button onClick={() => navigate(`/recipe`)}>Ко всем рецептам</button>
      <button onClick={addToFavorites} type="button">
        В избранное
      </button>
    </>
  );
};

export default BigCard;
