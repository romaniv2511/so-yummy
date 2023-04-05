import { CategoryDishItem } from 'components/CategoryDishItem/CategoryDishItem';
import { RecipesListContainer } from './RecipesList.styled';

export const RecipesList = ({ list }) => {
  return (
    <RecipesListContainer>
      {list.map(({ _id, thumb, title }) => {
        return (
          <CategoryDishItem key={_id} id={_id} thumb={thumb} title={title} />
        );
      })}
    </RecipesListContainer>
  );
};
