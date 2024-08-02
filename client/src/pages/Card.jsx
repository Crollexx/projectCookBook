import { useNavigate } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';
import { useState } from 'react';
import './Card.css'; // Подключаем стили

export default function Card({ recipe, user }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const addToFavorites = () => {
    axiosInstance
      .post('/likes', { recipeId: recipe.id, userId: user.id })
      .then(({ data }) => setLiked(data.likeState))
      .catch((err) => console.error(err));
  };

  return (
    <div className="card-container">
      <div className="card">
        <img src={recipe.photo} className="card-img-top" alt="Фото квартиры мечты" />
        <div className="card-body">
          <h5 className="card-title">{recipe.title}</h5>
          <button
            onClick={() => navigate(`/favourite/${recipe.id}`)}
            className="btn btn-primary"
          >
            Посмотреть
          </button>
          <button onClick={addToFavorites} type="button" className="btn btn-outline-danger mx-2">
            <svg
              className={`heart-icon ${liked ? 'liked' : ''}`}
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 1 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
