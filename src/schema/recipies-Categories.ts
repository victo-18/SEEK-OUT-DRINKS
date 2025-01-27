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
