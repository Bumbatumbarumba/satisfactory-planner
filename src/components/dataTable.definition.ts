import { Recipe } from "../data/data.definition";

export interface DataTableProps {
    targetItemName: string,
    recipeList: Array<Recipe>,
    multiplier: number
}