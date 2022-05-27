import { Recipe } from "../../data/data.definition";

export interface TreeItemProps {
    recipeList: Array<Recipe>,
    currentItem?: Recipe,
    multiplier: number,
    isRoot: boolean,
    requiredQuantity: number,
    baseQuantityMultiplier: number
}