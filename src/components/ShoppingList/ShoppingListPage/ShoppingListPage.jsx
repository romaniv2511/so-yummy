import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { IngredientsShoppingList } from 'components/ShoppingList/IngredientsShoppingList/IngredientsShoppingList';

export const ShoppingListPage = () => {
  return (
    <>
      <MainPageTitle title="Shopping list" />
      <IngredientsShoppingList />
    </>
  );
};
