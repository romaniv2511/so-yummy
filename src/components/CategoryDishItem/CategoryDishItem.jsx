import { Link } from 'react-router-dom';
import { CardContainer, Image, CardTitle } from './CategoryDishItem.styled';
import EllipsisText from 'react-ellipsis-text';

export const CategoryDishItem = ({ id, thumb, title }) => {
  return (
    <CardContainer>
      <Link to={`/recipe/${id}`}>
        <Image src={thumb} alt={title} />
        <CardTitle>
          <EllipsisText text={title} length={25} />
        </CardTitle>
      </Link>
    </CardContainer>
  );
};
