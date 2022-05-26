import data from "./data/data.json";
import React, { useState } from "react";
import type { Recipe } from "./data/data.definition";
import { DataTree } from "./components/dataTree";
import { OptionTable } from "./components/optionTable";
import { RequiredResourcesTable } from "./components/requiredResourcesTable";

function App() {
  const [selectedItemIndex, setSelectedItemIndex] = useState(-1);
  const recipeList = data.recipe_data.sort((first: Recipe, second: Recipe) => first.name.localeCompare(second.name))
  const [desiredQuantityMultiplier, setDesiredQuantityMultiplier] = useState(1);
  const [matchIO, setMatchIO] = useState(false);
  const baseMultiplier = 1;

  const handleDropdownChange = (e: any) => {
    setSelectedItemIndex(e.target.value);
  };

  return (
    <>
      <div className="main-view">
        <OptionTable handleDropdownChange={handleDropdownChange}
          recipeList={recipeList}
          baseMultiplier={baseMultiplier}
          setDesiredQuantityMultiplier={setDesiredQuantityMultiplier}
          setMatchIO={setMatchIO} />
        <RequiredResourcesTable selectedItemIndex={selectedItemIndex} recipeList={recipeList} multiplier={desiredQuantityMultiplier} />
        <DataTree targetItemIndex={selectedItemIndex} recipeList={recipeList} multiplier={desiredQuantityMultiplier} />
      </div>
    </>
  );
}

export default App;
