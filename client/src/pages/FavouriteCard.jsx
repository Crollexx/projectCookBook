import { useNavigate } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';
import { useState } from 'react';

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
    <div className="card p-2 g-col-6" style={{ width: '18rem' }}>
      <img
        src={recipe.photo}
        className="card-img-top"
        alt="Фото квартиры мечты"
      />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        
        <button
          onClick={() => navigate(`/favourite/${recipe.id}`)}
          className="btn btn-primary"
        >
          Посмотреть
        </button>
        <button
          onClick={addToFavorites}
          type="button"
          className="btn btn-outline-danger mx-2"
        >
          В избранное
        </button>
      </div>
    </div>
  );
}

