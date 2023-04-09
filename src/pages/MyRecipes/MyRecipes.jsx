import axios from 'axios';
import { useAuth } from '../../hooks/useAuth';

import { Loader } from 'components/Loader/Loader';
import { MainPageTitle } from 'components/MainPageTitle/MainPageTitle';
import { RecipeCard } from 'components/RecipeCard/RecipeCard';
import { ErrorImageContainer } from 'components/ErrorImageContainer/ErrorImageContainer';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { useEffect, useState } from 'react';
import { Container, List, Item } from 'pages/Favorites/Favorites.styled';
import { Pagination } from 'components/Pagination/Pagination';

const MyRecipes = () => {
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const { token } = useAuth();
  useEffect(() => {
    const fetchApi = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const { data } = await axios.get(
          'https://soyummy-tw3y.onrender.com/api/v1/recipes/category/Dessert',
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const result = data.data;
        console.log(result);
        setRecipes(result);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };
    fetchApi();
  }, [token]);

  const deleteRecipe = id => {
    // setRecipes(prevRecipes => prevRecipes.filter(recipe => recipe.id !== id));
  };
  const totalPages = recipes.length > 0 ? Math.ceil(recipes.length / 4) : 0;

  const perPage = 4;
  const lastIndex = perPage * page;
  const startIndex = lastIndex - perPage;
  const renderList = recipes.slice(startIndex, lastIndex);
  const handlePageChange = id => {
    setPage(id);
  };

  const handlePageChangeDecrement = () => {
    setPage(prevState => prevState + 1);
  };

  const handlePageChangeIncrement = () => {
    setPage(prevState => prevState - 1);
  };
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Try again.</p>}
      <main>
        <PagesWrapper>
          <MainPageTitle title="My recipes" />
          {renderList && renderList.length > 0 ? (
            <List>
              {renderList.map(({ _id, thumb, title, time, description }) => (
                <Item key={_id}>
                  <RecipeCard
                    key={_id}
                    thumb={thumb}
                    title={title}
                    id={_id}
                    description={description}
                    time={time}
                    page="My recipes"
                    onDelete={deleteRecipe}
                  />
                </Item>
              ))}
            </List>
          ) : (
            <Container>
              <ErrorImageContainer title="You don't have recipes in favorites yet, add your first recipe!" />
            </Container>
          )}
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              currentPage={page}
              onSelectPage={handlePageChange}
              onArrowLeftClick={handlePageChangeDecrement}
              onArrowRightClick={handlePageChangeIncrement}
            />
          )}
        </PagesWrapper>
      </main>
    </>
  );
};
export default MyRecipes;

/* <>
  <ImgBox>
    <img src={thumb} alt={title} />
  </ImgBox>
  <RecipeDetails>
    <TitleWrapper>
      <Title>{title}</Title>
      <Button type="button" aria-label="Delete" onClick={handleDelete}>
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
        <ButtonSee type="button">See recipe</ButtonSee>
      </Link>
    </ElementWrapper>
  </RecipeDetails>
</>; */
