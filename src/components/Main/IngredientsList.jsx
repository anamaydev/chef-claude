import React from "react";

export default function IngredientsList({ingredientsList}) {
  return (
    <div className="">
      <h2 className="text-[2rem]">Ingredients on hand:</h2>
      <ul className="list-disc pl-6 text-[#475467]">{ingredientsList}</ul>
    </div>
  )
}