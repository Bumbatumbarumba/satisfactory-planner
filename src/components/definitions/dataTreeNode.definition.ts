import { Recipe } from "../../data/data.definition";

export interface DataTreeNodeProps {
    itemData: Recipe, 
    requiredQuantity: number,
    multiplier: number,
    isRoot?: boolean,
    baseQuantityMultipler?: number,
    updateBaseQuantityModifier?: Function
}

export interface RequiredResources {
    name: string,
    quantity: number
}