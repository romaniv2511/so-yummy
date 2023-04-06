import { Link } from 'react-router-dom';
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

export const FavoriteCard = ({ id, thumb, title, description, time }) => {
  const isTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });
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
            <Button type="button">
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
            <Button type="button">
              <svg>
                <use href={sprite + '#icon-del'} />
              </svg>
            </Button>
          ) : (
            <ButtonSee type="button">See recipe</ButtonSee>
          )}
        </ElementWrapper>
      </RecipeDetails>
    </Item>
  );
};
