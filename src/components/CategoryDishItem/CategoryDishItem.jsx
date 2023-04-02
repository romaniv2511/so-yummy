import { Link } from 'react-router-dom';
import { CardContainer, Image, CardTitle } from './CategoryDishItem.styled';

export const CategoryDishItem = ({ id, thumb, title }) => {
  return (
    <CardContainer>
      <Link to={`/recipe/${id}`}>
        <Image src={thumb} alt={title} />
        <CardTitle>{title}</CardTitle>
      </Link>
    </CardContainer>
  );
};
