import React from "react";

export default function GetRecipeButton({getRecipe}){
  return (
    <div
      className="flex flex-col items-start gap-2 p-6 bg-[#F0EFEB] rounded-md xs:flex-row xs:justify-between xs:items-center">
      <div className="flex flex-col gap-2">
        <h3 className="text-lg leading-[1.33]">Ready for a recipe?</h3>
        <p className="text-sm text-[#6B7280] leading-[1.43]">Generate a recipe from your list of ingredients.</p>
      </div>
      <button onClick={getRecipe} className="py-2 px-4 rounded-md bg-[#D17557] text-[#FFFFFF] text-sm whitespace-nowrap cursor-pointer">Get a recipe
      </button>
    </div>
  )
}