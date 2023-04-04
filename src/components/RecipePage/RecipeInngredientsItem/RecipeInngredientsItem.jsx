import {
  RecipeItem,
  ImageWrapper,
  CheckLabel,
  DoneCheckbox,
  CustomCheckbox,
  IngNumber,
  IngTextContainer,
  IngName,
  IngDescr,
} from './RecipeInngredientsItem.styled';
import sprite from '../../../img/sprite.svg';
import MediaQuery from 'react-responsive';

export const RecipeInngredientsItem = ({ ttl, thb, desc, measure }) => {
  return (
    <>
      <RecipeItem>
        <CheckLabel>
          <ImageWrapper>
            <img src={thb} alt={ttl} />
          </ImageWrapper>
          <IngTextContainer>
            <IngName>{ttl}</IngName>
            <MediaQuery minWidth={768}>
              <IngDescr>{desc}</IngDescr>
            </MediaQuery>
          </IngTextContainer>
          <IngNumber>{measure}</IngNumber>
          <DoneCheckbox type="checkbox" />
          <CustomCheckbox>
            <svg>
              <use href={sprite + `#icon-pick`} />
            </svg>
          </CustomCheckbox>
        </CheckLabel>
      </RecipeItem>
    </>
  );
};
