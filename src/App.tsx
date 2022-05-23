import data from "./data/data.json";
import React, { useState } from "react";
import { DropDown } from "./components/dropdown";
import { DataTable } from "./components/dataTable";
import { Recipe } from "./data/data.definition";

function App() {
  const [targetOutputName, setTargetOutputName] = useState("");
  const [recipeList, __] = useState(data.recipe_data.sort((first: Recipe, second: Recipe) => first.name.localeCompare(second.name)));
  const [desiredQuantityMultiplier, setDesiredQuantityMultiplier] = useState(1);
  const baseMultiplier = 1;

  const handleDropdownChange = (e: any) => {
    setTargetOutputName(e.target.value);
  };

  return (
    <>
      <div className="main-view">
        <h2 className="title">Satisfactory Item Production Planner</h2>
        <div>
          <p>I want to make: <DropDown handleChange={handleDropdownChange} recipeList={recipeList} /></p>
        </div>
        <div>
          <p>With an output multiplier: <input type={"number"} placeholder={"" + baseMultiplier} min={baseMultiplier} onChange={(e) => setDesiredQuantityMultiplier(+e.target.value)}></input></p>
        </div>
        <DataTable targetItemName={targetOutputName} recipeList={recipeList} multiplier={desiredQuantityMultiplier} />
      </div>
    </>
  );
}

export default App;
