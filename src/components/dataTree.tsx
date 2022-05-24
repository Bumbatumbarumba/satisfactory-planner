import React from 'react';
import { DataTreeProps } from './definitions/dataTree.definition';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Recipe } from '../data/data.definition';
import { DataTreeNode } from './dataTreeNode';

export const DataTree = ({ targetItemIndex, recipeList, multiplier }: DataTreeProps) => {
    const startItem = targetItemIndex === -1 ? undefined : recipeList.at(targetItemIndex);

    const buildTree = (requiredQuantity: number, currentNode?: Recipe): JSX.Element => {
        if (!currentNode) {
            return (
                <></>
            );
        }
        return (
            <>
                <TreeNode key={new Date().getTime()} label={<DataTreeNode itemData={currentNode} multiplier={multiplier} requiredQuantity={requiredQuantity} />}>
                    {currentNode.input_resources.map((inputItem) => {
                        const nextItem = recipeList.find((item) => item.name === inputItem.name);
                        return buildTree(inputItem.quantity, nextItem);
                    })}
                </TreeNode>
            </>
        );
    }

    return (
        <>
            {startItem &&
                <Tree key={new Date().getTime()} label={<DataTreeNode itemData={startItem!} multiplier={multiplier} requiredQuantity={startItem?.quantity!} isRoot={true} />}>
                    {startItem.input_resources.map((item => {
                        const nextItem = recipeList.find((current) => current.name === item.name);
                        return buildTree(item.quantity, nextItem);
                    }))}
                </Tree>
            }
        </>
    );
}