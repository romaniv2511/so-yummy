import { RecipePageHero } from 'components/RecipePage/RecipePageHero/RecipePageHero';
import { RecipePreparation } from 'components/RecipePage/RecipePreparation/RecipePreparation';
import { RecipeInngredientsItem } from 'components/RecipePage/RecipeInngredientsItem/RecipeInngredientsItem';
import axios from 'axios';

import { useEffect, useState } from 'react';
import {
  ContainerRecipe,
  TableRecipe,
  InngredientsList,
} from './Recipe.styled';
import { Container } from 'components/Container/Container';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from 'components/PreviewCategories/PreviewCategories.styled';

const Recipe = () => {
  const [recipe, setRecipe] = useState({});
  const [ingredientsList, setIngredientsList] = useState([]);
  const [ingredientsMeasureList, setIngredientsMeasureList] = useState([]);
  const { recipeId } = useParams();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getRecipe() {
      try {
        setLoading(true);
        const {
          data: { data },
        } = await axios.get(
          `https://soyummy-tw3y.onrender.com/api/v1/recipes/${recipeId}`
        );
        const ing = data.ingredients;
        const measures = ing.map(({ _id: { _id }, measure }) => ({
          id: _id,
          measure,
        }));
        setIngredientsMeasureList(measures);
        setIngredientsList(ing.map(({ _id }) => _id));
        setRecipe(data);
      } catch (error) {
        setError(error.message);
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    getRecipe();
  }, [recipeId]);

  return (
    <ContainerRecipe>
      {error && !loading && (
        <ErrorMessage>Doesn't find any recipes...</ErrorMessage>
      )}
      {recipe && !error && !loading && (
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
            <InngredientsList>
              {ingredientsList.map(({ _id, thb, ttl, desc }, i) => {
                const { measure } = ingredientsMeasureList[i];
                return (
                  <RecipeInngredientsItem
                    key={_id}
                    thb={thb}
                    ttl={ttl}
                    measure={measure}
                    desc={desc}
                  />
                );
              })}
            </InngredientsList>

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
