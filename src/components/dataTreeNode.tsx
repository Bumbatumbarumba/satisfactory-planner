import React from "react";
import { DataTreeNodeProps } from "./definitions/dataTreeNode.definition";

export const DataTreeNode = ({ itemData, requiredQuantity, multiplier, isRoot }: DataTreeNodeProps) => {
    const outputText = (isRoot ? "Desired" : "Required") + " quantity: " + (requiredQuantity * multiplier);
    const inputText = itemData.quantity > 0 ? "Base produceable quantity:" + (itemData.quantity * multiplier) : ""

    return (
        <div className={"dataTreeNode " + itemData.machine}>
            <p>
                <strong>{itemData.name.charAt(0).toUpperCase() + itemData.name.slice(1)}</strong>
                <br />
                {outputText}
                <br />
                {inputText}
            </p>
        </div>
    );
}