import React from "react";

const RecipeCard = ({ card }) => {
  return (
    <>
      <div>{card.title}</div>
      <img src={`${card.photo}`} />
      <div>{card.ingredients}</div>
      <div>{card.time}</div>
    </>

  );
};

export default RecipeCard;