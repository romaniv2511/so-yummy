import { Link, useLocation } from 'react-router-dom';
import { CardContainer, Image, CardTitle } from './CategoryDishItem.styled';
import EllipsisText from 'react-ellipsis-text';
import placeholder from '../../img/placeholder.jpg';
// import { useEffect } from 'react';

export const CategoryDishItem = ({ id, thumb, title }) => {
  const location = useLocation();
  //   const navigate = useNavigate();
  const image = thumb ? thumb : placeholder;

  //   useEffect(() => {
  //     console.log('location.state', `${location.pathname}${location.search}`);
  //     const handleBackButton = () => {
  //       navigate(`${location.pathname}+${location.search}` ?? '/');
  //     };

  //     window.addEventListener('popstate', handleBackButton);

  //     return () => {
  //       window.removeEventListener('popstate', handleBackButton);
  //     };
  //   }, [location, navigate]);

  return (
    <CardContainer>
      <Link
        to={`/recipe/${id}`}
        state={{ from: `${location.pathname}+${location.search}` ?? '/' }}
      >
        <Image src={image} alt={title} />
        <CardTitle>
          <EllipsisText text={title} length={25} />
        </CardTitle>
      </Link>
    </CardContainer>
  );
};
