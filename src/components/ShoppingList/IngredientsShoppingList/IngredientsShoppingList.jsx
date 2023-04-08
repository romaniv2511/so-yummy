import sprite from '../../../img/sprite.svg';
import {
  TableList,
  TableItem,
  ContainerImage,
  TableNameTitle,
  TableTitle,
  ItemName,
  ContainerItemNumber,
  BtnItemRemove,
} from './IngredientsShoppingList.styled';
import { ContainerError } from 'pages/Recipe/Recipe.styled';
import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Loader } from 'components/Loader/Loader';
import imgPlug from 'img/recipe-img.jpg';
import {
  fetchShoppingList,
  deleteToShoppingList,
} from 'redux/shoppingList/shoppingListOperations';
export const IngredientsShoppingList = () => {
  const [ingredientsMeasureList, setIngredientsMeasureList] = useState([]);
  const [infShoppingList, setInfShoppingList] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const shoppingList = useSelector(state => state.shoppingList);
  const { items, status } = shoppingList;
  const shoppingListId = items.shoppingList;

  const dispatch = useDispatch();
  useEffect(() => {
    fetchShoppingList();
  }, [dispatch]);
  const handleDelete = async (_id, measure) => {
    dispatch(deleteToShoppingList({ _id: _id, measure: measure }));
  };

  useEffect(() => {
    setLoading(true);
    setError(null);
    setIngredientsMeasureList(
      shoppingListId.map(({ _id: { _id }, measure }) => ({
        id: _id,
        measure,
      }))
    );
    setLoading(false);
    setInfShoppingList(shoppingListId.map(({ _id }) => _id));
  }, [shoppingListId]);

  return (
    <>
      {/* {shoppingList.status === 'loading' && <Loader />} */}
      {!loading && error && <p>{error}</p>}
      {shoppingListId.length === 0 ? (
        <ContainerError>
          <ErrorImageContainer title="Doesn't find shopping list..." />
        </ContainerError>
      ) : (
        <TableList>
          <TableItem key="123654789">
            <TableNameTitle>Products</TableNameTitle>
            <TableTitle>Number</TableTitle>
            <TableTitle>Remove</TableTitle>
          </TableItem>
          {!error && loading && <Loader />}
          {infShoppingList.map(({ _id, thb, ttl }, i) => {
            const { measure } = ingredientsMeasureList[i];
            return (
              <TableItem>
                <TableNameTitle>
                  <ContainerImage>
                    {thb ? (
                      <img src={thb} alt={ttl} />
                    ) : (
                      <img src={`${imgPlug}`} alt={ttl} />
                    )}
                  </ContainerImage>
                  <ItemName>{ttl}</ItemName>
                </TableNameTitle>
                <TableTitle>
                  <ContainerItemNumber>{measure}</ContainerItemNumber>
                </TableTitle>
                <TableTitle>
                  <BtnItemRemove
                    type="button"
                    _id={_id}
                    measure={measure}
                    onClick={() => handleDelete(_id, measure)}
                  >
                    <svg width="20" height="20">
                      <use href={sprite + '#icon-cross'}></use>
                    </svg>
                  </BtnItemRemove>
                </TableTitle>
              </TableItem>
            );
          })}
        </TableList>
      )}
    </>
  );
};
