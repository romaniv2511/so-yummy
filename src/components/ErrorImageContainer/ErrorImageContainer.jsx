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
      <ErrorImage
        srcSet={`
              ${imageErrorDeskRetina} 2880w,
              ${imageErrorDesk} 1440w,
              ${imageErrorTabRetina} 1536w,
              ${imageErrorTab} 768w,
              ${imageErrorMobRetina} 750w,
              ${imageErrorMob} 375w,
            `}
        sizes="
              (max-width: 767px) 208px,
              (min-width: 768px) 350px, 100vw
            "
        src={imageErrorMob}
        alt="doesn't find"
      />
      <ErrorMessage>{title}</ErrorMessage>
    </>
  );
};
