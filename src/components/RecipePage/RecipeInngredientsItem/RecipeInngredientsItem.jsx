import { useState } from 'react';
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
  IngDescrButton,
} from './RecipeInngredientsItem.styled';
import sprite from '../../../img/sprite.svg';
import MediaQuery from 'react-responsive';

export const RecipeInngredientsItem = ({ ttl, thb, desc, measure }) => {
  const [showFullDesc, setShowFullDesc] = useState(false);

  const handleDescToggle = () => {
    setShowFullDesc(!showFullDesc);
  };
  return (
    <>
      <RecipeItem>
        <ImageWrapper>
          <img src={thb} alt={ttl} />
        </ImageWrapper>
        <IngTextContainer>
          <IngName>{ttl}</IngName>
          <MediaQuery minWidth={768}>
            <IngDescrButton onClick={handleDescToggle}>
              {showFullDesc ? 'Collapse' : 'Description'}
            </IngDescrButton>
            <IngDescr showFullDesc={showFullDesc}>{desc}</IngDescr>
          </MediaQuery>
        </IngTextContainer>
        <IngNumber>{measure}</IngNumber>
        <CheckLabel>
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
