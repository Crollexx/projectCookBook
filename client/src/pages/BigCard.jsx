import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";
import './BigCard.css'; // Подключаем стили

const BigCard = ({ user, recipes, setRecipes }) => {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

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
      .get("/")
      .then(({ data }) => setRecipes(data))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    recipesLoad();
  }, []);

  return (
    <div className="big-card-container">
      <div className="big-card">
        <svg
          onClick={addToFavorites}
          className={`favorite-icon ${liked ? 'liked' : ''}`}
          viewBox="0 0 24 24"
        >
          <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
        </svg>

        <div className="big-card-title">{recipeOne?.title}</div>

        <img src={`${recipeOne?.photo}`} alt="Recipe" />
        <div className="big-card-ingredients">
          {recipeOne?.ingredients.split(";").map((el, index) => (
            <div key={index}>{el}</div>
          ))}
        </div>

        <div className="big-card-time">{recipeOne?.time}</div>
        <div className="big-card-buttons">
          <button onClick={() => navigate(`/`)}>Ко всем рецептам</button>
        </div>
      </div>
    </div>
  );
};

export default BigCard;
