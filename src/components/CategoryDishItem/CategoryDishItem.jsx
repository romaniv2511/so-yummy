import { Link } from 'react-router-dom';
import { CardContainer, Image, CardTitle } from './CategoryDishItem.styled';
import EllipsisText from 'react-ellipsis-text';
import placeholder from '../../img/placeholder.jpg';

export const CategoryDishItem = ({ id, thumb, title }) => {
  const image = thumb ? thumb : placeholder;

  return (
    <CardContainer>
      <Link to={`/recipe/${id}`}>
        <Image src={image} alt={title} />
        <CardTitle>
          <EllipsisText text={title} length={25} />
        </CardTitle>
      </Link>
    </CardContainer>
  );
};
