import { IngredientsShoppingList } from 'components/ShoppingList/IngredientsShoppingList/IngredientsShoppingList';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { Container } from 'components/Container/Container';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
const ShopingList = () => {
  return (
    <PagesWrapper>
      <MainPageTitle title="Shopping list" />
      <IngredientsShoppingList />
    </PagesWrapper>
  );
};

export default ShopingList;
