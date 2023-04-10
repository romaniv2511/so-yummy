import { Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';
import EllipsisText from 'react-ellipsis-text';
import {
  Button,
  ButtonSee,
  ElementWrapper,
  ImgBox,
  RecipeDetails,
  Text,
  Time,
  Title,
  TitleWrapper,
} from './RecipeCard.styled';
import sprite from 'img/sprite.svg';
import { useDispatch } from 'react-redux';
import { deleteFavorite } from 'redux/favorites/favoritesOperations';

export const RecipeCard = ({
  id,
  thumb,
  title,
  description,
  time,
  page,
  onDelete,
}) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
  const isDesctop = useMediaQuery({
    query: '(min-width: 1440px)',
  });
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteFavorite(id));
  return (
    <>
      {page === 'Favorites' && (
        <>
          {!isTablet ? (
            <Link to={`/recipe/${id}`}>
              <ImgBox>
                <img
                  src={thumb ? thumb : 'https://via.placeholder.com/124x124'}
                  alt={title}
                />
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
                <Button
                  type="button"
                  aria-label="Delete"
                  onClick={handleDelete}
                >
                  <svg>
                    <use href={sprite + '#icon-del'} />
                  </svg>
                </Button>
              </TitleWrapper>
            )}
            {!isDesctop ? (
              <Text>
                <EllipsisText text={description} length={150} />
              </Text>
            ) : (
              <Text>{description}</Text>
            )}

            <ElementWrapper>
              <Time>{`${time} min`}</Time>
              {!isTablet ? (
                <Button
                  type="button"
                  aria-label="Delete"
                  onClick={handleDelete}
                >
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
        </>
      )}
      {page === 'My recipes' && (
        <>
          <ImgBox>
            <img src={thumb} alt={title} />
          </ImgBox>
          <RecipeDetails>
            <TitleWrapper>
              <Title>{title}</Title>
              <Button
                type="button"
                aria-label="Delete"
                active
                onClick={() => onDelete(id)}
              >
                <svg>
                  <use href={sprite + '#icon-del'} />
                </svg>
              </Button>
            </TitleWrapper>
            {!isDesctop ? (
              <Text>
                <EllipsisText text={description} length={150} />
              </Text>
            ) : (
              <Text>{description}</Text>
            )}
            <ElementWrapper>
              <Time>{`${time} min`}</Time>
              <Link to={`/recipe/${id}`}>
                <ButtonSee type="button" active>
                  See recipe
                </ButtonSee>
              </Link>
            </ElementWrapper>
          </RecipeDetails>
        </>
      )}
    </>
  );
};
