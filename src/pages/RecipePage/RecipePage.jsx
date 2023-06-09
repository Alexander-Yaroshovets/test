import RecipePageHero from 'components/RecipePageHero/RecipePageHero';
import RecipeIngredientsList from 'components/RecipeIngredientsList/RecipeIngredientsList';
import RecipePreparation from 'components/RecipePreparation/RecipePreparation';
import { getRecipeById } from '../../service/API/RecipeAPI';
import React, { useRef } from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TableHeader, Container } from './RecipePage.styled';
import { Loader } from 'components/Loader/Loader';

const RecipePage = () => {
  const [recipe, setRecipe] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const { recipeId } = useParams();
  const isFirstRender = useRef(true);
  // const location = useLocation();
  // const backLinkHref = location.state?.from ?? '/recipes';

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    setIsLoading(true);
    getRecipeById(recipeId).then(setRecipe);
    setIsLoading(false);
  }, [recipeId]);


  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        recipe !== null && (
          <>
            <RecipePageHero recipe={recipe} />
            <Container>
              <TableHeader>
                <p>Ingredients</p>
                <p>
                  Number <span>Add to list</span>
                </p>
              </TableHeader>
                <RecipeIngredientsList
                  recipeId={recipeId}
                  ingredients={recipe.ingredients} />
              <RecipePreparation
                instructions={recipe.instructions}
                image={recipe.thumb}
              />
            </Container>
          </>
        )
      )}
    </>
  );
};

export default RecipePage;
