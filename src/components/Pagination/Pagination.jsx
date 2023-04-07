import {
  PaginationList,
  PaginationContainer,
  ArrowButton,
  ButtonPage,
} from './Pagination.styled';
import sprite from '../../img/sprite.svg';
import { useEffect, useRef } from 'react';

export const Pagination = ({
  currentPage,
  totalPages,
  onSelectPage,
  onArrowLeftClick,
  onArrowRightClick,
}) => {
  useEffect(() => {
    if (currentPage > 1)
      paginationRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
  }, [currentPage]);
  let pages = [];

  const paginationRef = useRef();

  for (let i = 1; i <= totalPages; i += 1) {
    pages.push(i);
  }

  let viewPages;
  if (totalPages > 5) {
    viewPages = pages.slice(currentPage - 1, currentPage + 4);
    if (currentPage + 4 >= totalPages) {
      viewPages = pages.slice(totalPages - 5, totalPages);
    }
  } else {
    viewPages = pages;
  }

  return (
    <PaginationContainer ref={paginationRef}>
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
