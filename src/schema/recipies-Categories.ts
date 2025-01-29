import { z } from "zod";

// Defiding the schema of data  fetch from Api

export const responseApiCategoriesSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string(),
    })
  ),
});
export const searchFilterSchema = z.object({
  ingredient: z.string(),
  category: z.string(),
});
export const filterSearchSchema = z.object({
  drinks: z.array(
    z.object({
      idDrink: z.string(),
      strDrink: z.string(),
      strDrinkThumb: z.string(),
    })
  ),
});

export const drinksSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
});
export const ingredient = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
});
export const ingredients = z.object({
  drinks: z.array(ingredient),
});
