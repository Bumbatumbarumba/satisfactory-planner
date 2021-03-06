import { Recipe } from "../../data/data.definition";

export interface DataTreeNodeProps {
    itemData: Recipe, 
    requiredQuantity: number,
    multiplier: number,
    isRoot?: boolean
}

export interface RequiredResources {
    name: string,
    quantity: number
}