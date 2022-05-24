import React from "react";
import { DropDownProps } from "./definitions/dropDown.definition";

export const DropDown = ({ handleChange, recipeList }: DropDownProps) => {
  const optionItems = recipeList.map((item, index) => {
    return <option key={index} value={index}>{item.name}</option>;
  });

  return (
    <>
      <select defaultValue={-1} onChange={(e) => handleChange(e)}>
        <option value={-1} disabled={true}>
          --select an item---
        </option>
        {optionItems}
      </select>
    </>
  );
};
