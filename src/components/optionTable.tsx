import React from "react";
import { OptionTableProps } from "./definitions/optionTable.definition";
import { DropDown } from "./dropdown";

export const OptionTable = ({ handleDropdownChange, recipeList, baseMultiplier, setDesiredQuantityMultiplier, setMatchIO }: OptionTableProps) => {
    return (
        <div className="main-view-item">
            <div>
                <p>I want to make: <DropDown handleChange={handleDropdownChange} recipeList={recipeList} /></p>
            </div>
            <div>
                <p>With a production multiplier of: <input type={"number"}
                    pattern="[0-9]+"
                    placeholder={"" + baseMultiplier}
                    min={baseMultiplier}
                    onChange={(e) => setDesiredQuantityMultiplier(+e.target.value)}>
                </input>
                </p>
            </div>
        </div>
    );
}