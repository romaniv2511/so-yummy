import {
  ItemText,
  PaginationItem,
  PaginationList,
  PaginationContainer,
  ArrowButton,
} from './Pagination.styled';
import sprite from '../../img/sprite.svg';

export const Pagination = ({
  currentPage,
  totalPages,
  onSelectPage,
  onArrowLeftClick,
  onArrowRightClick,
}) => {
  const pages = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }

  return (
    <PaginationContainer>
      <ArrowButton type="button" onClick={onArrowRightClick}>
        <svg width={8} height={15}>
          <use href={sprite + '#icon-arrowLeft'}></use>
        </svg>
      </ArrowButton>
      <PaginationList>
        {pages.map(item => {
          if (currentPage === item) {
            return (
              <PaginationItem
                active
                key={`${item}`}
                onClick={() => onSelectPage(item)}
              >
                <ItemText>{item}</ItemText>
              </PaginationItem>
            );
          }
          return (
            <PaginationItem key={`${item}`} onClick={() => onSelectPage(item)}>
              <ItemText>{item}</ItemText>
            </PaginationItem>
          );
        })}
      </PaginationList>
      <ArrowButton type="button" onClick={onArrowLeftClick}>
        <svg width={8} height={15}>
          <use href={sprite + '#icon-arrowRight'}></use>
        </svg>
      </ArrowButton>
    </PaginationContainer>
  );
};
