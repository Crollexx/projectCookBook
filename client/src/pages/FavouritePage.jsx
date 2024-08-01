import { useEffect, useState } from "react";
import axiosInstance from "../service/axiosInstance";
import FavouriteCard from "../pages/FavouriteCard";



function FavouritePage({ user }) {
  const [likedApartments, setlikedApartments] = useState([]);

  const loadLikedApartments = () => {
    axiosInstance
      .get(`/favourite/${user.id}`)
      .then((response) => setlikedApartments(response.data))
      .catch((err) => console.error(err.message));
  };

  useEffect(() => {
    loadLikedApartments();
  }, []);

  return (
    <div className="container">
      <div className="sideBar">
        
      </div>
      <div className="Apartments">
        <h3>Квартиры, которые вам понравились</h3>
        <br />
        {likedApartments.length ? (
          likedApartments.map((recipe) => {
            return (
              <section key={recipe.id}>
                <FavouriteCard recipe={recipe} user={user}></FavouriteCard>
              </section>
            );
          })
        ) : (
          <section>К сожалению, вы еще не добавили ничего в избранное</section>
        )}
      </div>
    </div>
  );
}

export default FavouritePage;