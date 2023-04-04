import {
  PaginationList,
  PaginationContainer,
  ArrowButton,
  ButtonPage,
} from './Pagination.styled';
import sprite from '../../img/sprite.svg';

export const Pagination = ({
  currentPage,
  totalPages,
  onSelectPage,
  onArrowLeftClick,
  onArrowRightClick,
}) => {
  let pages = [];

  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }

  let viewPages;
  if (totalPages > 4) {
    viewPages = pages.slice(currentPage - 1, currentPage + 3);
    if (currentPage + 3 >= totalPages) {
      viewPages = pages.slice(totalPages - 4, totalPages);
    }
  } else {
    viewPages = pages;
  }

  return (
    <PaginationContainer>
      <ArrowButton
        type="button"
        onClick={onArrowRightClick}
        disabled={currentPage === 1}
      >
        <svg width={8} height={15}>
          <use href={sprite + '#icon-arrowLeft'}></use>
        </svg>
      </ArrowButton>
      <PaginationList>
        {viewPages.map(item => {
          return (
            <li key={`${item}`}>
              {currentPage === item ? (
                <ButtonPage
                  active
                  type="button"
                  onClick={() => onSelectPage(item)}
                >
                  {item}
                </ButtonPage>
              ) : (
                <ButtonPage type="button" onClick={() => onSelectPage(item)}>
                  {item}
                </ButtonPage>
              )}
            </li>
          );
        })}
      </PaginationList>
      <ArrowButton
        type="button"
        onClick={onArrowLeftClick}
        disabled={currentPage === totalPages}
      >
        <svg width={8} height={15}>
          <use href={sprite + '#icon-arrowRight'}></use>
        </svg>
      </ArrowButton>
    </PaginationContainer>
  );
};
