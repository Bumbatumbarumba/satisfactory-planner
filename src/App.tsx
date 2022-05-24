import data from "./data/data.json";
import React, { useState } from "react";
import { DropDown } from "./components/dropdown";
// import { DataTable } from "./components/dataTable";
import { Recipe } from "./data/data.definition";
import { DataTree } from "./components/dataTree";

function App() {
  const [targetOutputName, setTargetOutputName] = useState(-1);
  const [recipeList] = useState(data.recipe_data.sort((first: Recipe, second: Recipe) => first.name.localeCompare(second.name)));
  const [desiredQuantityMultiplier, setDesiredQuantityMultiplier] = useState(1);
  const [matchIO, setMatchIO] = useState(false);
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
        <div>
          <button onClick={() => setMatchIO(true)}>Match inputs and outputs</button>
        </div>
        {/* <DataTable targetItemIndex={targetOutputName} recipeList={recipeList} multiplier={desiredQuantityMultiplier} /> */}
        <DataTree targetItemIndex={targetOutputName} recipeList={recipeList} multiplier={desiredQuantityMultiplier} />
      </div>
    </>
  );
}

export default App;
