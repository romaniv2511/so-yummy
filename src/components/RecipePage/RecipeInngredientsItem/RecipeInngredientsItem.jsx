import {
  RecipeItem,
  ImageWrapper,
  CheckLabel,
  DoneCheckbox,
  CustomCheckbox,
  IngNumber,
  IngTextContainer,
  IngName,
  IngDescr,
} from './RecipeInngredientsItem.styled';
import sprite from '../../../img/sprite.svg';
import { useDispatch } from 'react-redux';

export const RecipeInngredientsItem = ({title, image, description, number }) => {
  const dispatch = useDispatch();

  const addToShoppingList = () => {
    if (recipe.inShoppingList) {
      const ingrid = recipe.list.find(
        item => item.recipeId === recipe.recipeId
      );
      dispatch(removeShoppingIngredient(ingrid._id));
      return;
    }
    dispatch(
      addShoppingIngredient({
        image: recipe.image,
        weight: recipe.weight,
        strIngredient: recipe.strIngredient,
        recipeId: recipe.recipeId,
      })
    );
    return;
  };

  return (
    <>
      <RecipeItem>
        <CheckLabel>
          <ImageWrapper>
            <img src={image} alt={title} />
          </ImageWrapper>
          <IngTextContainer>
            <IngName>{title}</IngName>
            <IngDescr>{description}</IngDescr>
          </IngTextContainer>
          <IngNumber>{number}</IngNumber>
          <DoneCheckbox
            type="checkbox"
            onChange={addToShoppingList}
            checked={}
          />
          <CustomCheckbox>
            <svg>
              <use href={sprite + `#icon-pick`} />
            </svg>
          </CustomCheckbox>
        </CheckLabel>
      </RecipeItem>
    </>
  );
};
