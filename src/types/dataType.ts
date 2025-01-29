import { z } from "zod";
import {
  drinksSchema,
  filterSearchSchema,
  ingredient,
  ingredients,
  responseApiCategoriesSchema,
} from "../schema/recipies-Categories";
import { searchFilterSchema } from "../schema/recipies-Categories";

export type Caterories = z.infer<typeof responseApiCategoriesSchema>;
export type SearchRecipy = z.infer<typeof searchFilterSchema>;
export type FilterSerarch = z.infer<typeof filterSearchSchema>;
export type drinksSchema = z.infer<typeof drinksSchema>;
export type Ingredients = z.infer<typeof ingredients>;
export type Ingredient = z.infer<typeof ingredient>;
