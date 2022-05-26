import { Recipe } from "../../data/data.definition";

export interface RequiredResourcesTableProps {
    selectedItemIndex: number,
    multiplier: number,
    recipeList: Array<Recipe>
}

export interface AggregatedData {
    [name: string]: number 
}