import type { Recipe } from "../../data/data.definition";

export interface OptionTableProps {
    handleDropdownChange: Function,
    recipeList: Array<Recipe>,
    baseMultiplier: number,
    setDesiredQuantityMultiplier: Function,
    setMatchIO: Function
}