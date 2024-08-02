import { useEffect, useState } from "react";
import apiAxiosInstance from "../service/axiosInstance";
import RecipeCard from "./RecipeCard";
import './RecipePage.css'; // Подключаем стили

function RecipePage({ user, recipes, setRecipes }) {

    const recipesLoad = () => {
        apiAxiosInstance.get('/')
            .then(({ data }) => setRecipes(data))
            .catch(err => console.log(err));
    };

    useEffect(() => {
        recipesLoad();
    }, []);

    return (
        <div className="recipe-page">
            {recipes.map((el) => <RecipeCard key={el.id} user={user} card={el} />)}
        </div>
    );
}

export default RecipePage;
