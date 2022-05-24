import { Recipe } from "../../data/data.definition";

export interface DataTableProps {
    targetItemIndex: number,
    recipeList: Array<Recipe>,
    multiplier: number
}