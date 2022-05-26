import React from "react";
import type { Recipe } from "../data/data.definition";
import type { RequiredResources } from "./definitions/dataTreeNode.definition";
import { AggregatedData, RequiredResourcesTableProps } from "./definitions/requiredResourcesTable";

export const RequiredResourcesTable = (props: RequiredResourcesTableProps) => {
    const startItem = props.selectedItemIndex === -1 ? undefined : props.recipeList.at(props.selectedItemIndex);
    const totalResources: Array<RequiredResources> = [];

    const getResourcesFromTree = (requiredQuantity: number, currentList: Array<RequiredResources>, currentNode?: Recipe) => {
        if (currentNode) {
            if (requiredQuantity !== -1) {
                currentList.push({
                    name: currentNode.name,
                    quantity: requiredQuantity
                })
            }
            currentNode!.input_resources.forEach((inputItem) => {
                const nextItem = props.recipeList.find((item) => item.name === inputItem.name);
                getResourcesFromTree(inputItem.quantity, currentList, nextItem);
            })
        }

    }

    const aggregateDuplicates = (): AggregatedData => {
        const aggregatedResult: AggregatedData = {};
        getResourcesFromTree(-1, totalResources, startItem);
        totalResources.forEach((item) => {
            if (aggregatedResult[item.name]) {
                aggregatedResult[item.name] += item.quantity;
            }
            else {
                aggregatedResult[item.name] = item.quantity;
            }
        });

        return aggregatedResult;
    }
    const results = aggregateDuplicates();
    const tableBody = Object.keys(results).sort((a, b) => a.localeCompare(b)).map((resourceName) => {
        return <tr>
            <td>{resourceName}</td>
            <td>{results[resourceName] * props.multiplier}</td>
        </tr>
    })

    return (
        <div className="main-view-item">
            {(props.selectedItemIndex !== -1) &&
                <div>
                    <h3>Resources required</h3>
                    <table className="resource-table">
                        <thead>
                            <tr>
                                <th>Resource</th>
                                <th>Required quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableBody}
                        </tbody>
                    </table>
                </div>
            }
        </div>
    );
}