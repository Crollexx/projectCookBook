import { useNavigate, useParams } from 'react-router-dom';
import axiosInstance from '../service/axiosInstance';
import { useState } from 'react';

export default function Card({ recipe, user }) {
  // const {id} = useParams();
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const addToFavorites = () => {
    axiosInstance
      .post('/favourite', { recipeId: recipe.id, userId: user.id })
      .then(({ data }) => setLiked(data.likeState))
      .catch((err) => console.error(err));
  };
  const deleteFavourite = () => {
    axiosInstance.delete(`/favourite/${recipe.id}`)
    .then(() => {
        navigate('/posts')
    })
    .catch(err => console.log(err))}

  return (
    <>
    <div className="card p-2 g-col-6" style={{ width: '18rem' }}>
      <img
        src={recipe.photo}
      />
      <div className="card-body">
        <h5 className="card-title">{recipe.title}</h5>
        
        <button
          onClick={() => navigate(`/recipe/${recipe.id}`)}
          className="btn btn-primary"
        >
          Подробнее
        </button>
        <button
          onClick={deleteFavourite}
          className="btn btn-primary"
        >
          Удалить из избранного
        </button>
        
      </div>
    </div></>
  );
}

