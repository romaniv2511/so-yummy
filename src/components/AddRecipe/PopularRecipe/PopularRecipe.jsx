import axios from 'axios';
import { Loader } from 'components/Loader/Loader';
import { ErrorMessage } from 'components/PreviewCategories/PreviewCategories.styled';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
// import { useLocation } from 'react-router-dom';

export const PopularRecipe = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const location = useLocation();

  useEffect(() => {
    const popularRecipes = async () => {
      try {
        const response = await axios.get(
          'https://soyummy-tw3y.onrender.com/api/v1/popular-recipes'
        );
        const { data } = response.data;

        if (response) {
          setLoading(false);
          setRecipes(data);
        }
        console.log(data);
      } catch {
        setError('Failed to fetch');
        setRecipes([]);
      }
    };
    popularRecipes();
  }, []);

  return (
    <div>
      <h2>Popular recipe</h2>
      <ul>
        {recipes.map(({ _id, title, description, preview }) => (
          <li key={_id}>
            <Link to={`/movies/${_id}`} state={{ from: location }}>
              <img src={preview} alt="recipe-appearance" />
              <h3>{title}</h3>
              <p>{description}</p>
            </Link>
          </li>
        ))}
      </ul>
      {error && !loading && (
        <ErrorMessage>Something wrong! Reload the page...</ErrorMessage>
      )}
      {loading && <Loader />}
    </div>
  );
};
