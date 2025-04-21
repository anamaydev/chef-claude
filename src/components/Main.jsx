import React from 'react';

function Main() {

  const [ingredients, setIngredients] = React.useState([]);

  const ingredientsList = ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)

  function handleSubmitForm(event){
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get('ingredients');
    console.log(`New Ingredient: ${newIngredient}`);

    // push new ingredient into the ingredient array
    setIngredients(prevIngredients => {
      return [...prevIngredients, newIngredient];
    })

    console.log(`Ingredients: ${ingredients}`);
    console.log(`Ingredients List: ${ingredientsList}`);

    // reset the ingredient input field
    event.currentTarget.reset();
  }

  return(
    <main className="w-5/6 m-auto">
      <form
        action="/"
        className="flex text-sm justify-center gap-4 py-12"
        onSubmit={handleSubmitForm}
      >
        <input
          type="text"
          id="ingredients-input"
          name="ingredients"
          placeholder="e.g. oregano"
          className="border border-[#D1D5DB] rounded-md pl-2 grow max-w-[25rem]"
        />
        <button
          className="bg-[#141413] text-white p-2 flex justify-center items-center rounded-md"
        >+ Add Ingredient
        </button>
      </form>

      <div className="">
        <h2 className="text-[2rem]">Ingredients on hand:</h2>
        <ul className="list-disc pl-6 text-[#475467]">{ingredientsList}</ul>
      </div>

    </main>

  )
}

export default Main;