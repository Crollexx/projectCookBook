import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../service/axiosInstance";
import './RecipeCard.css'; // Подключаем стили

const RecipeCard = ({ user, card }) => {
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
    <div className="recipe-card">
      <div className="image-container">
        <img src={`${card.photo}`} alt={card.title} />
        <button
          onClick={addToFavorites}
          className={`btn btn-favorite ${liked ? 'liked' : ''}`}
          type="button"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            />
          </svg>
        </button>
        <div className="time">{card.time}</div>
      </div>
      <h2>{card.title}</h2>
      <div className="ingredients">
        {card.ingredients.split(';').map((el, index) => <div key={index}>{el}</div>)}
      </div>
      <div className="actions">
        <button
          onClick={() => navigate(`/recipe/${card.id}`)}
          className="btn btn-details"
        >
          Подробнее
        </button>
      </div>
    </div>
  );
};

export default RecipeCard;
