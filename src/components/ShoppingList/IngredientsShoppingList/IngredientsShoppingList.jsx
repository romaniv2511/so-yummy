import sprite from '../../../img/sprite.svg';
import {
  TableList,
  TableItem,
  ContainerImage,
  ItemImage,
  TableNameTitle,
  TableTitle,
  ItemName,
  ContainerItemNumber,
  BtnItemRemove,
} from './IngredientsShoppingList.styled';
import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { ContainerError } from 'pages/Recipe/Recipe.styled';
export const IngredientsShoppingList = () => {
  return (
    <>
      <ContainerError>
        <ErrorImageContainer title="Doesn't find shopping list..." />
      </ContainerError>
      <TableList>
        <TableItem key="123654789">
          <TableNameTitle>Products</TableNameTitle>
          <TableTitle>Number</TableTitle>
          <TableTitle>Remove</TableTitle>
        </TableItem>
        {/* {
          <TableItem key={elem._id}>
            <TableNameTitle>
              <ContainerImage>
                <ItemImage src={elem.image} alt="product" />
              </ContainerImage>
              <ItemName>{elem.strIngredient}</ItemName>
            </TableNameTitle>
            <TableTitle>
              <ContainerItemNumber>{elem.weight}</ContainerItemNumber>
            </TableTitle>
            <TableTitle>
              <BtnItemRemove
                type="button"
                id={elem._id}
                // onClick={deleteIngredient}
              >
                <svg width="20" height="20">
                  <use href={sprite + '#icon-cross'}></use>
                </svg>
              </BtnItemRemove>
            </TableTitle>
          </TableItem>
        } */}
      </TableList>
    </>
  );
};
