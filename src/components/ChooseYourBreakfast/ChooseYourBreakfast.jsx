import { TitleAccent } from 'components/Hero/Hero.styled';
import { HealthyBlock, Text, GoToRecipe } from './ChooseYourBreakfast.styled';
import { BsArrowRight } from 'react-icons/bs';

export const ChooseYourBreakfast = () => {
  return (
    <HealthyBlock>
      <Text>
        <TitleAccent>Delicious and healthy</TitleAccent> way to enjoy a variety
        of fresh ingredients in one satisfying meal
      </Text>
      <GoToRecipe to="/categories/Breakfast">
        See recipes <BsArrowRight size={12} />
      </GoToRecipe>
    </HealthyBlock>
  );
};
