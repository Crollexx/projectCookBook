import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";
import FavouriteCard from "../pages/FavouriteCard";
import "./FavouritePage.css"; // Подключаем стили

function FavouritePage({ user, setRecipes }) {
  const [likedApartments, setlikedApartments] = useState([]);

  const loadLikedApartments = () => {
    axiosInstance
      .get(`/favourite/${user?.id}`)
      .then((response) => setlikedApartments(response.data))
      .catch((err) => console.error(err.message));
  };

  const recipesLoad = () => {
    axiosInstance.get('/recipe')
          .then(({ data }) => setRecipes(data))
          .catch(err => console.log(err));
    };


  useEffect(() => {
    loadLikedApartments();
    recipesLoad();
  }, [user]);

  return (
    <div className="container">
      <h3>Ваши любимые блюда</h3>
      <div className="Apartments">
        {likedApartments.length ? (
          likedApartments.map((recipe) => (
            <section key={recipe.id}>
              <FavouriteCard recipe={recipe} user={user}/>
            </section>
          ))
        ) : (
          <section className="no-favorites">
            К сожалению, вы еще не добавили ничего в избранное
          </section>
        )}
      </div>
    </div>
  );
}

export default FavouritePage;
