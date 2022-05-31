import React from "react";
import { DataTreeNodeProps } from "./definitions/dataTreeNode.definition";

export const DataTreeNode = ({ itemData, multiplier, requiredQuantity, isRoot, baseQuantityMultipler, updateBaseQuantityModifier }: DataTreeNodeProps) => {
    const matchIoMultiplier = requiredQuantity <= itemData.quantity
        ? 1
        : itemData.quantity / requiredQuantity;
    const outputText = "Required quantity: " + (matchIoMultiplier > 1
        ? requiredQuantity * matchIoMultiplier
        : requiredQuantity) * multiplier;
    const inputText = itemData.quantity > 0
        ? "Output quantity: " + (matchIoMultiplier > 1
            ? itemData.quantity * matchIoMultiplier
            : itemData.quantity * baseQuantityMultipler!)
        : "";


    const upperCaseFirst = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1)
    }

    return (
        <div className={"data-tree-node " + itemData.machine}>
            <div className="tree-node-element">
                <p>
                    <strong>{upperCaseFirst(itemData.name) + " - " + upperCaseFirst(itemData.machine)}</strong>
                    {!isRoot && <br />}
                    {!isRoot && outputText}
                    <br />
                    {inputText}
                </p>
            </div>
            {!(itemData.machine === "miner") &&
                <div className="tree-node-element tree-node-modifier">
                    <button onClick={() => updateBaseQuantityModifier!(true)}>+</button>
                    <p>{baseQuantityMultipler}</p>
                    <button onClick={() => updateBaseQuantityModifier!(false)}>-</button>
                </div>}
        </div>
    );
}