import { CardContainer, Image, CardTitle } from './CategoryDishItem.styled';

export const CategoryDishItem = ({ thumb, title }) => {
  return (
    <CardContainer>
      <Image src={thumb} alt={title} />
      <CardTitle>{title}</CardTitle>
    </CardContainer>
  );
};
