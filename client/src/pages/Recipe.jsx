/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import apiAxiosInstance from "../service/axiosInstance";
import { Link } from "react-router-dom";
import RecipeCard from "./RecipeCard";


function RecipePage({user, recipes, setRecipes }) {
    

   const recipesLoad=()=>{
     apiAxiosInstance.get('/recipe').then(({data})=>setRecipes((data))).catch(err=>console.log(err))
   }
   useEffect(()=>{
    recipesLoad()
   },[])

    return (
    <>
    {recipes.map((el)=> <RecipeCard key = {el.id} card={el}/>)}
    </>
    )
}

export default RecipePage;