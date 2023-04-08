import { Link } from 'react-router-dom';
// import axios from 'axios';
// import { useAuth } from '../../hooks/useAuth';
import { useMediaQuery } from 'react-responsive';
import {
  Button,
  ButtonSee,
  ElementWrapper,
  ImgBox,
  Item,
  RecipeDetails,
  Text,
  Time,
  Title,
  TitleWrapper,
} from './FavoriteCard.styled';
import sprite from 'img/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from 'redux/favorites/favoritesOperations';

export const FavoriteCard = ({ id, thumb, title, description, time }) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteFavorite(id));
  // const { token } = useAuth();
  // const handleDelete = async id => {
  //   const result = await axios.del(
  //     `https://soyummy-tw3y.onrender.com/api/v1/favorites/${id}`,
  //     {
  //       headers: { Authorization: `Bearer ${token}` },
  //     }
  //   );
  //   .then(({ data }) => {
  //     return data;
  //   });;
  // };
  return (
    <Item>
      {!isTablet ? (
        <Link to={`/recipe/${id}`}>
          <ImgBox>
            <img src={thumb} alt={title} />
          </ImgBox>
        </Link>
      ) : (
        <ImgBox>
          <img src={thumb} alt={title} />
        </ImgBox>
      )}
      <RecipeDetails>
        {!isTablet ? (
          <Title>{title}</Title>
        ) : (
          <TitleWrapper>
            <Title>{title}</Title>
            <Button type="button" aria-label="Delete" onClick={handleDelete}>
              <svg>
                <use href={sprite + '#icon-del'} />
              </svg>
            </Button>
          </TitleWrapper>
        )}

        <Text>{description}</Text>
        <ElementWrapper>
          <Time>{`${time} min`}</Time>
          {!isTablet ? (
            <Button type="button" aria-label="Delete" onClick={handleDelete}>
              <svg>
                <use href={sprite + '#icon-del'} />
              </svg>
            </Button>
          ) : (
            <Link to={`/recipe/${id}`}>
              <ButtonSee type="button">See recipe</ButtonSee>
            </Link>
          )}
        </ElementWrapper>
      </RecipeDetails>
    </Item>
  );
};
