import { Recipe } from "../../data/data.definition";

export interface DropDownProps {
    handleChange: Function,
    recipeList: Array<Recipe>
}