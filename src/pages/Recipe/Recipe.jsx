import { RecipePageHero } from './../../components/RecipePage/RecipePageHero/RecipePageHero';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ContainerRecipe, TableRecipe } from './Recipe.styled';
import { Container } from 'components/Container/Container';
// const Recipe = () => {
//   const [recipe, setRecipe] = useState([]);

//   useEffect(() => {
//     async function getRecipe() {
//       try {
//         const response = await axios.get(
//           'https://soyummy-tw3y.onrender.com/api/v1/recipes/640cd5ac2d9fecf12e889863'
//         );
//         const { data } = response.data;
//         setRecipe(data);
//         console.log(data);
//       } catch (error) {
//         console.log(error);
//       }
//     }

//     getRecipe();
//   }, []);

//   // async function getRecipe() {
//   //   setRecept([]);
//   //   try {
//   //     const response = await axios.get(
//   //       'https://soyummy-tw3y.onrender.com/api/v1/recipes/640cd5ac2d9fecf12e889863'
//   //     );
//   //     const { data } = response.data;
//   //     console.log(data);
//   //     setRecept(data);
//   //   } catch (error) {
//   //     setRecept([]);
//   //     console.log(error);
//   //   }
//   // }
//   // // console.log(recept);
//   // useEffect(() => {
//   //   getRecipe();
//   // }, []);

//   return (
//     <ContainerRecipe>
//       {/* <ContainerRecipeHero>
//         {recipe.map(({ _id, title, description, time }) => {
//           return (
//             <RecipePageHero
//               key={_id}
//               title={title}
//               description={description}
//               time={time}
//             />
//           );
//         })}
//       </ContainerRecipeHero> */}
//     </ContainerRecipe>
//   );
// };

// export default Recipe;

const Recipe = () => {
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    async function getRecipe() {
      try {
        const response = await axios.get(
          'https://soyummy-tw3y.onrender.com/api/v1/recipes/640cd5ac2d9fecf12e889863'
        );
        const { data } = response.data;
        if (data && data.title && data.description && data.time) {
          setRecipe(data);
        } else {
          console.log('Invalid response data');
        }
      } catch (error) {
        console.log(error);
      }
    }

    getRecipe();
  }, []);

  return (
    <ContainerRecipe>
      <RecipePageHero
        title={recipe.title}
        description={recipe.description}
        time={recipe.time}
      />
      <Container>
        <TableRecipe>
          <p>Ingredients</p>
          <p>
            Number <span>Add to list</span>
          </p>
        </TableRecipe>
      </Container>
    </ContainerRecipe>
  );
};

export default Recipe;
