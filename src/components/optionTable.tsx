import React from "react";
import { OptionTableProps } from "./definitions/optionTable.definition";
import { DropDown } from "./dropdown";

export const OptionTable = (props: OptionTableProps) => {
    return (
        <div className="main-view-item">
            <div>
                <p>I want to make: <DropDown handleChange={props.handleDropdownChange} recipeList={props.recipeList} /></p>
            </div>
            <div>
                <p>With a production multiplier of: <input type={"number"}
                    pattern="[0-9]+"
                    placeholder={"" + props.baseMultiplier}
                    min={props.baseMultiplier}
                    onChange={(e) => props.setDesiredQuantityMultiplier(+e.target.value)}>
                </input>
                </p>
            </div>
            <div>
                {/* <button onClick={() => props.setMatchIO(true)}>Match inputs and outputs</button> */}
            </div>
        </div>
    );
}