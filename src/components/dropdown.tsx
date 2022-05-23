import React from "react";
import { DropDownProps } from "./dropDown.definition";

export const DropDown = ({ handleChange, recipeList }: DropDownProps) => {
  const optionItems = recipeList.map((item, index) => {
    return <option key={index}>{item.name}</option>;
  });

  return (
    <>
      <select defaultValue={""} onChange={(e) => handleChange(e)}>
        <option value={""} disabled={true}>
          --select an item---
        </option>
        {optionItems}
      </select>
    </>
  );
};
