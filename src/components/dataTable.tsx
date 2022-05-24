// import React from "react";
// import type { Recipe } from "../data/data.definition";
// import type { DataTableProps } from "./dataTable.definition";

// export const DataTable = ({ targetItemIndex, recipeList, multiplier }: DataTableProps) => {
//   const targetData: Array<Recipe> = [];
//   const startItem = targetItemIndex === -1 ? undefined : recipeList.at(targetItemIndex);

//   const generateData = (currentItem?: Recipe) => {
//     if (!currentItem) {
//       return;
//     }
//     targetData.push(currentItem)
//     currentItem.input_resources.forEach((input) => {
//       const nextItem = recipeList.find((item) => item.name === input.name)
//       generateData(nextItem);
//     })
//   };

//   generateData(startItem);
//   targetData.shift();

//   const tableBody = targetData.map((item, index) => {
//     return (
//       <tr key={index}>
//         <td>{item.name}</td>
//         <td>{item.quantity * multiplier}</td>
//       </tr>
//     );
//   });

//   return (
//     <div hidden={!startItem}>
//       <h3>Quantity produced per minute: {startItem?.quantity! * multiplier}</h3>
//       <table>
//         <thead>
//           <tr>
//             <th>
//               <strong>item</strong>
//             </th>
//             <th>
//               <strong>input</strong>
//             </th>
//           </tr>
//         </thead>
//         <tbody>{tableBody}</tbody>
//       </table>
//     </div>
//   );
// };
