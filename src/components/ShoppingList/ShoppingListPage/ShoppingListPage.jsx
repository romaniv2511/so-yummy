import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
// import { ContainerError } from 'pages/Recipe/Recipe.styled';
// import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { IngredientsShoppingList } from 'components/ShoppingList/IngredientsShoppingList/IngredientsShoppingList';

export const ShoppingListPage = () => {
  return (
    <>
      {/* <ContainerError>
      <ErrorImageContainer title="Doesn't find shopping list..." />
      </ContainerError> */}
      <MainPageTitle title="Shopping list" />
      <IngredientsShoppingList />
    </>
  );
};
