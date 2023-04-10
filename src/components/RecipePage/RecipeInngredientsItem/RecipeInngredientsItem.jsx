import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  IngDescrButton,
  IngDescrDesk,
} from './RecipeInngredientsItem.styled';
import sprite from '../../../img/sprite.svg';
import MediaQuery from 'react-responsive';
import imgPlug from 'img/recipe-img.jpg';
import {
  fetchShoppingList,
  addToShoppingList,
  deleteToShoppingList,
} from 'redux/shoppingList/shoppingListOperations';

export const RecipeInngredientsItem = ({ ttl, thb, desc, measure, _id }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);
  const dispatch = useDispatch();
  const [isChecked, setIsChecked] = useState(false);
  const shoppingList = useSelector(state => state.shoppingList);
  const { items } = shoppingList;
  /* eslint-disable react-hooks/exhaustive-deps */
  const shoppingListId = items.shoppingList;
  let shoppingId = [];
  if (shoppingListId && shoppingListId.length > 0) {
    shoppingId = shoppingListId.map(({ _id: { _id }, measure }) => ({
      id: _id,
      measure,
    }));
  }
  const handleDescToggle = () => {
    setShowFullDesc(!showFullDesc);
  };
  const measureValue = measure.trim() !== '' ? measure : '1';
  useEffect(() => {
    fetchShoppingList();
    const hasItem = shoppingId.some(item => item.id === _id);
    setIsChecked(hasItem); // set isChecked to true if it is
  }, [dispatch, shoppingId, _id]);

  const addItemHandler = event => {
    const { checked } = event.target;

    if (checked) {
      dispatch(addToShoppingList({ _id: _id, measure: measure }));
    } else {
      dispatch(deleteToShoppingList({ _id: _id, measure: measure }));
    }
    setIsChecked(checked);
  };
  return (
    <>
      <RecipeItem>
        <ImageWrapper>
          {thb ? (
            <img src={thb} alt={ttl} />
          ) : (
            <img src={`${imgPlug}`} alt={ttl} />
          )}
        </ImageWrapper>
        <IngTextContainer>
          <IngName>{ttl}</IngName>
          <MediaQuery minWidth={768} maxWidth={1439}>
            <IngDescrButton onClick={handleDescToggle}>
              {showFullDesc ? 'Collapse' : 'Description'}
            </IngDescrButton>
            <IngDescr showFullDesc={showFullDesc}>{desc}</IngDescr>
          </MediaQuery>
          <MediaQuery minWidth={1440}>
            <IngDescrDesk>{desc}</IngDescrDesk>
          </MediaQuery>
        </IngTextContainer>
        <IngNumber>{measureValue}</IngNumber>
        <CheckLabel>
          <DoneCheckbox
            type="checkbox"
            checked={isChecked}
            onChange={addItemHandler}
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
