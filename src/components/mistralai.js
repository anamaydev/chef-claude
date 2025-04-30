import { HfInference } from '@huggingface/inference'

// const SYSTEM_PROMPT = `
// You are an assistant that receives a list of ingredients that a user has and suggests a recipe they
// could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe.
// The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
// Format your response in markdown to make it easier to render to a web page
// `

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has and suggests a recipe they 
could make with some or all of those ingredients. You don't need to use every ingredient they mention in your recipe. 
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients. 
Format your response using proper Markdown syntax, including headers, lists, and other appropriate elements, to ensure 
it renders clearly on a web page. Make sure the highest header should be h2 and it should start with name of the recipe
in h2 header
`

const hf = new HfInference(import.meta.env.VITE_HF_TKN);

export async function getRecipeFromMistral(ingredientsArr) {
  const ingredientsString = ingredientsArr.join(", ")
  try {
    const response = await hf.chatCompletion({
      model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        { role: "user", content: `I have ${ingredientsString}. Please give me a recipe you'd recommend I make!` },
      ],
      max_tokens: 1024,
    })
    return response.choices[0].message.content;
  } catch (err) {
    console.error(err.message);
  }
}