import React from 'react';
import { DataTreeProps } from './definitions/dataTree.definition';
import { Tree, TreeNode } from 'react-organizational-chart';
import { Recipe } from '../data/data.definition';
import { DataTreeNode } from './dataTreeNode';

export const DataTree = (props: DataTreeProps) => {
    const startItem = props.targetItemIndex === -1 ? undefined : props.recipeList.at(props.targetItemIndex);
    const buildTree = (requiredQuantity: number, currentNode?: Recipe): JSX.Element => {
        if (!currentNode) {
            return (
                <></>
            );
        }
        return (
            <>
                <TreeNode key={new Date().getTime()} label={<DataTreeNode
                    itemData={currentNode}
                    multiplier={props.multiplier}
                    requiredQuantity={requiredQuantity} />}>
                    {currentNode.input_resources.map((inputItem) => {
                        const nextItem = props.recipeList.find((item) => item.name === inputItem.name);
                        return buildTree(inputItem.quantity, nextItem);
                    })}
                </TreeNode>
            </>
        );
    }

    return (
        <div className="main-view-item">
            {startItem &&
                <Tree lineColor={'white'} key={new Date().getTime()} label={<DataTreeNode
                    itemData={startItem!}
                    multiplier={props.multiplier}
                    requiredQuantity={startItem?.quantity!}
                    isRoot={true} />}>
                    {startItem.input_resources.map((item => {
                        const nextItem = props.recipeList.find((current) => current.name === item.name);
                        return buildTree(item.quantity, nextItem);
                    }))}
                </Tree>
            }
        </div>
    );
}