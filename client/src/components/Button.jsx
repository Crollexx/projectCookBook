import React from 'react'

function Button({ card,user }) {
  const navigate = useNavigate();
  const [liked, setLiked] = useState(false);

  const addToFavorites = () => {
    axiosInstance
      .post('/favourite', { recipeId: card.id, userId: user.id })
      .then(({ data }) => setLiked(data.likeState))
      .catch((err) => console.error(err));
  };

  return (
    <>
    <button
          onClick={() => navigate(`/favourite/${card.id}`)}
          className="btn btn-primary"
        >
          Подробнее
        </button>
      <button
          onClick={addToFavorites}
          type="button"
          className="btn btn-outline-danger mx-2"
        >
          В избранное
        </button>
    </>
  )
}

export default Button