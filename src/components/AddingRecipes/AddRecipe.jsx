import React from 'react';

export const AddRecipe = () => {
  return (
    <div>
      <h2>Add recipe</h2>
      <form>
        <input type="file" />
        <input type="text" placeholder="Enter item title" />
        <input type="text" placeholder="Enter about recipe" />
        <input type="text" placeholder="Category" />
        <input type="text" placeholder="Cooking time" />
        <h3>Ingredients</h3>
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <input type="text" />
        <h3>Recipe Preparation</h3>
        <textarea
          name=""
          id=""
          cols="30"
          rows="10"
          placeholder="Enter recipe"
        ></textarea>
      </form>
    </div>
  );
};

// Зверстати компоненти що знаходяться на сторінці AddRecipePage (мобільна,
//         планшет та десктопна версії): 1. MainTitle - універсальний компонент, що
//         відмальовує заголовок і використовується на різних сторінках застосунку
//         2. AddRecipeForm 3. FollowUs 4. PopularRecipe
