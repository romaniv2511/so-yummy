import imageErrorMob from '../../img/search-any-mob.png';
import imageErrorMobRetina from '../../img/search-any-mob@2x.png';
import imageErrorTab from '../../img/search-any-tablet.png';
import imageErrorTabRetina from '../../img/search-any-tablet@2x.png';
import imageErrorDesk from '../../img/search-any-desktop.png';
import imageErrorDeskRetina from '../../img/search-any-desktop@2x.png';
import { ErrorMessage } from 'components/PreviewCategories/PreviewCategories.styled';
import { ErrorImage } from './ErrorImageContainer.styled';

export const ErrorImageContainer = ({ title }) => {
  return (
    <>
      <ErrorImage>
        <source
          srcSet={`${imageErrorDesk} 1440w, ${imageErrorDeskRetina} 2880w`}
          media="(min-width: 1440px)"
          sizes="(min-width: 1440px) 1440px"
        />
        <source
          srcSet={`${imageErrorTab} 768w, ${imageErrorTabRetina} 1536w`}
          media="(min-width: 768px)"
          sizes="(min-width: 768px) 768px"
        />
        <source
          srcSet={`${imageErrorMob} 375w, ${imageErrorMobRetina} 750w`}
          media="(max-width: 767px)"
          sizes="(max-width: 767px) 375px"
        />
        <img src={`${imageErrorMob} 375w`} alt="there are no recipes" />
      </ErrorImage>
      <ErrorMessage>{title}</ErrorMessage>
    </>
  );
};
