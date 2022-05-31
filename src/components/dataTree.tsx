import React, { useState } from 'react';
import { DataTreeProps } from './definitions/dataTree.definition';
import { Tree } from 'react-organizational-chart';
import { DataTreeNode } from './dataTreeNode';
import { TreeItem } from './treeItem';

export const DataTree = ({ targetItemIndex, multiplier, recipeList }: DataTreeProps) => {
    const startItem = targetItemIndex === -1 ? undefined : recipeList.at(targetItemIndex);
    const [finalProductMultiplier, setFinalProductMultiplier] = useState(1);
    const handleUpdateBaseMultiplier = (increment: boolean) => {
        if (finalProductMultiplier > 1 && !increment) {
            setFinalProductMultiplier(finalProductMultiplier - 1);
        }
        else if (increment) {
            setFinalProductMultiplier(finalProductMultiplier + 1);
        }
    }

    return (
        <div className="main-view-item">
            {startItem &&
                <Tree lineColor='white' key={Math.floor(Math.random())} label={
                    <DataTreeNode
                        itemData={startItem!}
                        multiplier={multiplier}
                        requiredQuantity={startItem?.quantity!}
                        baseQuantityMultipler={finalProductMultiplier}
                        updateBaseQuantityModifier={handleUpdateBaseMultiplier}
                        isRoot={true} />
                }>
                    {startItem.input_resources.map((childItem, index) => {
                        const nextItem = recipeList.find((current) => current.name === childItem.name);
                        return <TreeItem
                            key={index}
                            currentItem={nextItem}
                            multiplier={multiplier}
                            baseQuantityMultiplier={finalProductMultiplier}
                            isRoot={false}
                            requiredQuantity={childItem.quantity}
                            recipeList={recipeList} />
                    })}
                </Tree>}
        </div>
    );
}