import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { useAuth } from '../../hooks/useAuth';
import { PagesWrapper } from 'components/PagesWrapper/PagesWrapper';
import { Title, Container, Text, List } from './Favorites.styled';
import imgMob from 'img/search-any-mob.png';
import imgMob2 from 'img/search-any-mob@2x.png';
import imgTab from 'img/search-any-tablet.png';
import imgTab2 from 'img/search-any-tablet@2x.png';
import imgDesk from 'img/search-any-desktop.png';
import imgDesk2 from 'img/search-any-desktop@2x.png';
import { Loader } from 'components/Loader/Loader';
import { FavoriteCard } from 'components/FavoriteCard/FavoriteCard';
import {
  selectError,
  selectFavorites,
  selectIsLoading,
} from 'redux/favorites/favoritesSelectors';
import { fetchFavorites } from 'redux/favorites/favoritesOperations';

const Favorites = () => {
  // const [recipes, setRecipes] = useState([]);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);
  // const { token } = useAuth();
  // useEffect(() => {
  //   const fetchApi = async () => {
  //     try {
  //       setIsLoading(true);
  //       setError(null);
  //       const { data } = await axios.get(
  //         'https://soyummy-tw3y.onrender.com/api/v1/recipes/category/Starter'
  //       );
  // const { data } = await axios.get(
  //   'https://soyummy-tw3y.onrender.com/api/v1/favorites/',
  //   {
  //     headers: { Authorization: `Bearer ${token}` },
  //   }
  // );
  //       const result = data.data;
  //       console.log(result);
  //       setRecipes(result);
  //     } catch (error) {
  //       setError(error);
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };
  //   fetchApi();
  // }, [token]);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const data = useSelector(selectFavorites);
  // console.log(data);
  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);
  return (
    <>
      {isLoading && <Loader />}
      {error && <p>Something went wrong. Try again.</p>}
      <main>
        <PagesWrapper>
          <Title>Favorites</Title>
          {data && data.length > 0 ? (
            <List>
              {data.map(({ _id, thumb, title, time, description }) => (
                <li key={_id}>
                  <FavoriteCard

                    thumb={thumb}
                    title={title}
                    id={_id}
                    description={description}
                    time={time}
                  />
                </li>
              ))}
            </List>
          ) : (
            <Container>
              <picture>
                <source
                  srcSet={`${imgDesk} 1440w, ${imgDesk2} 2880w`}
                  media="(min-width: 1440px)"
                  sizes="(min-width: 1440px) 1440px"
                />
                <source
                  srcSet={`${imgTab} 768w, ${imgTab2} 1536w`}
                  media="(min-width: 768px)"
                  sizes="(min-width: 768px) 768px"
                />
                <source
                  srcSet={`${imgMob} 375w, ${imgMob2} 750w`}
                  media="(max-width: 767px)"
                  sizes="(max-width: 767px) 375px"
                />
                <img src={`${imgMob} 375w`} alt="there are no recipes" />
              </picture>
              <Text>
                You don't have recipes in favorites yet, add your first recipe!
              </Text>
            </Container>
          )}
        </PagesWrapper>
      </main>
    </>
  );
};

export default Favorites;
