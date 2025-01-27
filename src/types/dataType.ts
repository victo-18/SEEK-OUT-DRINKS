import {z}from 'zod'
import { filterSearchSchema, responseApiCategoriesSchema } from "../schema/recipies-Categories";
import {searchFilterSchema} from '../schema/recipies-Categories'

export type Caterories = z.infer<typeof responseApiCategoriesSchema>
export type SearchRecipy=z.infer<typeof searchFilterSchema>
export type FilterSerarch =z.infer<typeof filterSearchSchema>