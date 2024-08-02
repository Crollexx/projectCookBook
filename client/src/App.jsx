import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axiosInstance, { setAccessToken } from "./service/axiosInstance";
import Nav from "./components/Nav";
import Recipe from "./pages/Recipe"
import AuthorizationPage from "./pages/Authorization";
import LogoutPage from "./pages/Logout";
import RegistrationPage from "./pages/Registration";
import NotFound from "./pages/NotFound";
import FavouritePage from "./pages/FavouritePage";
import RecipeCard from "./pages/RecipeCard";
import BigCard from "./pages/BigCard";
import FavouriteBig from "./pages/FavouriteBig";


function App() {
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axiosInstance.get("/tokens/refresh").then(({ data }) => {
      setAccessToken(data.accessToken);
      setUser(data.user);
    });
  }, []);

  return (
    <BrowserRouter>
      <Nav user={user} />

      <Routes>
        <Route path="/recipe" element={<Recipe user={user} recipes={recipes} setRecipes={setRecipes}  />} />
        <Route
          path="/auth/authorization"
          element={<AuthorizationPage setUser={setUser} />}
        />
        <Route
          path="/auth/registration"
          element={<RegistrationPage setUser={setUser} />}
        />
        <Route
          path="/auth/logout"
          element={<LogoutPage user={user} setUser={setUser} />}
        />
        <Route path="/favourite/:id/:id" element={<FavouriteBig  user={user} recipes={recipes}/>}/>
        
        <Route path="/favourite/:id" element={<FavouritePage  recipes={recipes} user={user}/>}/>
        <Route path="/recipe/:id" element={<BigCard user={user} recipes={recipes}/>}/>
        
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
