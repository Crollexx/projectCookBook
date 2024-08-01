/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import apiAxiosInstance from "../service/axiosInstance";
import { Link } from "react-router-dom";


function RecipePage({user}) {
    const [recipes, setRecipes] = useState([]);

   const recipesLoad=()=>{
     apiAxiosInstance.get('/recipe').then(({data})=>setRecipes((data))).catch(err=>console.log(err))
   }
   useEffect(()=>{
    recipesLoad()
   },[])

    return (
    <>
    {recipes.map((el)=> (<div key={el.id}>{el.title}</div>))}
    </>
    )
}

export default RecipePage;