import React, { useState } from "react";
import { TreeNode } from "react-organizational-chart";
import { DataTreeNode } from "./dataTreeNode";
import type { TreeItemProps } from "./definitions/TreeItem.definition";

export const TreeItem = ({ currentItem, multiplier, isRoot, requiredQuantity, baseQuantityMultiplier, recipeList }: TreeItemProps) => {
    const [baseMultiplier, setBaseMultiplier] = useState(baseQuantityMultiplier);
    const handleUpdateBaseMultiplier = (increment: boolean) => {
        if (baseMultiplier > 1 && !increment) {
            setBaseMultiplier(baseMultiplier - 1);
        }
        else if (increment) {
            setBaseMultiplier(baseMultiplier + 1);
        }
    }

    if (!currentItem) return <></>
    return (
        <TreeNode label={<DataTreeNode
            itemData={currentItem}
            requiredQuantity={requiredQuantity!}
            multiplier={multiplier}
            baseQuantityMultipler={baseMultiplier}
            updateBaseQuantityModifier={handleUpdateBaseMultiplier}
            isRoot={isRoot}
        />}>
            {currentItem.input_resources.map((childItem, index) => {
                const nextItem = recipeList.find((current) => current.name === childItem.name);
                return <TreeItem key={index}
                    currentItem={nextItem}
                    multiplier={multiplier}
                    baseQuantityMultiplier={baseMultiplier}
                    isRoot={false}
                    requiredQuantity={childItem.quantity * baseMultiplier}
                    recipeList={recipeList} />
            })}
        </TreeNode>
    );
}