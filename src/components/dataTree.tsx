import React from 'react';
import { DataTreeProps } from './definitions/dataTree.definition';
import { Tree } from 'react-organizational-chart';
import { DataTreeNode } from './dataTreeNode';
import { TreeItem } from './treeItem';

export const DataTree = ({ targetItemIndex, multiplier, recipeList }: DataTreeProps) => {
    const startItem = targetItemIndex === -1 ? undefined : recipeList.at(targetItemIndex);

    return (
        <div className="main-view-item">
            {startItem &&
                <Tree lineColor='white' key={Math.floor(Math.random())} label={
                    <DataTreeNode
                        itemData={startItem!}
                        multiplier={multiplier}
                        requiredQuantity={startItem?.quantity!}
                        baseQuantityMultipler={multiplier}
                        isRoot={true} />
                }>
                    {startItem.input_resources.map((childItem, index) => {
                        const nextItem = recipeList.find((current) => current.name === childItem.name);
                        return <TreeItem
                            key={index}
                            currentItem={nextItem}
                            multiplier={multiplier}
                            baseQuantityMultiplier={1}
                            isRoot={false}
                            requiredQuantity={childItem.quantity}
                            recipeList={recipeList} />
                    })}
                </Tree>}
        </div>
    );
}