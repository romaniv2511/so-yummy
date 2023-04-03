import { RecipePageHero } from './../../components/RecipePage/RecipePageHero/RecipePageHero';
import { RecipePreparation } from './../../components/RecipePage/RecipePreparation/RecipePreparation';
import axios from 'axios';

import { useEffect, useState } from 'react';
import { ContainerRecipe, TableRecipe } from './Recipe.styled';
import { Container } from 'components/Container/Container';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from 'components/PreviewCategories/PreviewCategories.styled';
const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const { recipeId } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRecipe() {
      setLoading(true);
      try {
        const response = await axios.get(
          `https://soyummy-tw3y.onrender.com/api/v1/recipes/${recipeId}`
        );
        const { data } = response.data;
        setRecipe(data);
      } catch (error) {
        setLoading(false);
        setError(error.message);
        console.log(error);
      }
    }

    getRecipe();
  }, [recipeId]);

  return (
    <ContainerRecipe>
      {error && !loading && (
        <ErrorMessage>Doesn't find any recipes...</ErrorMessage>
      )}
      {recipe && (
        <>
          <RecipePageHero
            title={recipe.title}
            description={recipe.description}
            time={recipe.time}
          />
          <Container>
            <TableRecipe>
              <p>Ingredients</p>
              <p>
                Number <span>Add to list</span>
              </p>
            </TableRecipe>
            <RecipePreparation
              title={recipe.title}
              image={recipe.thumb}
              instructions={recipe.instructions}
            />
          </Container>
        </>
      )}
    </ContainerRecipe>
  );
};

export default Recipe;
