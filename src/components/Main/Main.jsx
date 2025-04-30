import React from 'react';
import IngredientsList from "./IngredientsList.jsx";
import GetRecipeButton from "./GetRecipeButton.jsx";
import {getRecipeFromMistral} from "../mistralai";
import ClaudeRecipe from "./ClaudeRecipe"

function Main() {

  const [ingredients, setIngredients] = React.useState([]);
  const recipeSection = React.useRef(null);
  const ingredientsList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  // getting data from the form field
  function addIngredient(formData){
    const newIngredient = formData.get('ingredients');
    setIngredients(prevIngredients => [...prevIngredients, newIngredient]);
  }

  const [recipe, setRecipe] = React.useState("");

  React.useEffect(() => {
    if (recipe !== "" && recipeSection.current !== null) {
      recipeSection.current.scrollIntoView({behavior: "smooth"});
    }
  }, [recipe])

  async function getRecipe(){
    const recipeMarkdown = await getRecipeFromMistral(ingredients);
    setRecipe(recipeMarkdown);
    console.log(recipeMarkdown);
  }

  return(
    <main className="w-5/6 m-auto flex flex-col gap-12 my-12 max-w-[38rem]">
      {/*
        * using form action (new feature ofReact 19) instead of onSubmit event handler
        * - no need to use FormData() constructor
        * - no need to use e.preventDefault() to prevent form from submitting instantly
        * - no need to use e.currentTarget.reset() to clear input fields
        * - React 19 does all of this
        */}
      <form
        action={addIngredient}
        className="flex flex-col gap-2 text-sm"
      >
        <label className="text-base" htmlFor="ingredients-input">Enter at least 4 ingredients for better result: </label>
        <div className="flex justify-center gap-4">
          <input
            type="text"
            id="ingredients-input"
            name="ingredients"
            placeholder="e.g. oregano"
            className="border border-[#D1D5DB] rounded-md pl-2 grow"
          />
          <button
            className="bg-[#141413] text-white p-2 flex justify-center items-center rounded-md"
          >+ Add Ingredient
          </button>
        </div>
      </form>
      {ingredients.length > 0 && <IngredientsList ingredientsList={ingredientsList}/>}
      {ingredients.length > 3 && <GetRecipeButton getRecipe={getRecipe}/>}
      {recipe && <ClaudeRecipe recipe={recipe} ref={recipeSection} />}
    </main>
  )
}

export default Main;