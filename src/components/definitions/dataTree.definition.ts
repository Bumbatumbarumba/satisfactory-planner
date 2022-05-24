import { Recipe } from "../../data/data.definition";

export interface DataTreeProps {
    targetItemIndex: number,
    recipeList: Array<Recipe>,
    multiplier: number
}


export class TreeNode {
    data?: Recipe
    left?: TreeNode
    leftish?: TreeNode
    center?: TreeNode
    rightish?: TreeNode
    right?: TreeNode

    constructor(data?: Recipe,
        left?: TreeNode,
        leftish?: TreeNode,
        center?: TreeNode,
        rightish?: TreeNode,
        right?: TreeNode) {
        this.data = data
        this.left = left
        this.leftish = leftish
        this.center = center
        this.rightish = rightish
        this.right = right
    }
}