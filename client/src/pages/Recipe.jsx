/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import apiAxiosInstance from "../service/axiosInstance";
import { Link } from "react-router-dom";


function RecipePage({user, recipes, setRecipes}) {

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('');

    const addPost = (event) => {
        event.preventDefault();

        apiAxiosInstance.post('/recipe', {title, description, user_id: user.id})
            .then(({data}) => setRecipes(prevState => [...prevState, data]))
            .catch(err => console.log(err))
    }

    const loadRecipes = () => {
        apiAxiosInstance.get('/recipe')
            .then(({data}) => setRecipes(data))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        loadRecipes()
    }, [])


    return (
        <>
            <h1>Recipes</h1>

            <form onSubmit={addPost}>
                <input type="text" onChange={({target}) => setTitle(target.value)} placeholder="Title" />
                <input type="text" onChange={({target}) => setDescription(target.value)} placeholder="Description" />
                <button type="submit">Add post</button>
            </form>

            <br/>
{/* 
            {
                recipes.length ? recipes.map(post => {
                    return (
                        <section key={post.id}>
                            <Link  to={`/recipe/${post.id}`}>{post.title}</Link>
                            <br/>
                        </section>
                    )
                }) : <section>No recipes</section>
            } */}
        </>
    );
}

export default RecipePage;