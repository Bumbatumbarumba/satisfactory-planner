import React from "react";
import { DataTreeNodeProps } from "./definitions/dataTreeNode.definition";
import { RootState } from '../app/store';
import { useSelector } from 'react-redux';

export const DataTreeNode = (props: DataTreeNodeProps) => {
    const enabled = useSelector((state: RootState) => state.colourSwitch.enabled);
    // const [machineMultiplier, setMachineMultiplier] = useState(1);
    const matchIoMultiplier = props.requiredQuantity <= props.itemData.quantity
        ? 1
        : props.itemData.quantity / props.requiredQuantity;
    const outputText = (props.isRoot
        ? "Desired"
        : "Required") + " quantity: "
        + ((matchIoMultiplier > 1
            ? props.requiredQuantity * matchIoMultiplier
            : props.requiredQuantity) * props.multiplier);
    const inputText = props.itemData.quantity > 0
        ? "Base output quantity: " + (matchIoMultiplier > 1
            ? props.itemData.quantity * matchIoMultiplier
            : props.itemData.quantity * (props.isRoot ? props.multiplier : 1))
        : "";

    // const updateCounter = (decrement: boolean) => {
    //     if (decrement && (machineMultiplier > 1)) {
    //         setMachineMultiplier(machineMultiplier - 1)
    //     }
    //     else if (!decrement) {
    //         setMachineMultiplier(machineMultiplier + 1)
    //     }
    // }

    const upperCaseFirst = (word: string) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    };

    return (
        <div className={"data-tree-node " + props.itemData.machine + "-" + enabled}>
            <div className="tree-node-element">
                <p>
                    <strong>{upperCaseFirst(props.itemData.name) + " - " + upperCaseFirst(props.itemData.machine)}</strong>
                    {!props.isRoot && <br />}
                    {!props.isRoot && outputText}
                    <br />
                    {inputText}
                </p>
            </div>
            {/* <div className="tree-node-element tree-node-modifier">
                <button onClick={() => updateCounter(false)}>+</button>
                <p>{machineMultiplier}</p>
                <button onClick={() => updateCounter(true)}>-</button>
            </div> */}
        </div>
    );
};