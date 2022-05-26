import React from "react";
import { DropDownProps } from "./definitions/dropDown.definition";

export const DropDown = (props: DropDownProps) => {
  const optionItems = props.recipeList.map((item, index) => {
    return <option key={index} value={index}>{item.name}</option>;
  });

  return (
    <>
      <select defaultValue={-1} onChange={(e) => props.handleChange(e)}>
        <option value={-1} disabled={true}>
          --select an item---
        </option>
        {optionItems}
      </select>
    </>
  );
};
