  import React from 'react';
  // import { useState, useEffect } from 'react';
  import { Checkbox, Table } from 'flowbite-react';

  function CategoryFilter() {
    return (
      <div className="bg-white p-8 h-screen shadow-xl w-60 rounded-xl">
        <Table className="text-center">
          <Table.Head>
           <Table.HeadCell className="titleSpace bg-gray-100">CATEGORY</Table.HeadCell>
           </Table.Head>
        </Table>
      <Table hoverable>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Candy
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Chips
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Chocolate
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Crackers
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Drinks
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="p-4">
              <Checkbox />
            </Table.Cell>
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Savory
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
      </div>
    );
  }

  // function CategoryFilter() {
    
  //   const [checkboxes, setCheckboxes] = useState({
  //     Candy: false,
  //     Chips: false,
  //     Chocolate: false,
  //     Crackers: false,
  //     Drinks: false,
  //     Savory: false,
  //   });

  //   const clickCheckbox = (category) => {
  //     setCheckboxes({
  //       ...checkboxes,
  //       [category]: !checkboxes[category],
  //     });
  //   };

  //   return (
  //     <div className="bg-white p-8 h-screen shadow-xl w-60 rounded-xl">
  //     <div className="flex flex-col">
  //       <h1 className="titleSpace font-bold mt-1 ">
  //         CATEGORIES
  //       </h1>
  //       <label className="mt-2">
  //         Candy
  //         <input 
  //           type="checkbox"
  //           className="checkboxItem"
  //           checked={checkboxes.Candy}
  //           onChange={() => clickCheckbox('Candy')}
  //         />
  //       </label>
  //       <label>
  //         Chips
  //         <input
  //           type="checkbox"
  //           className="checkboxItem"
  //           checked={checkboxes.Chips}
  //           onChange={() => clickCheckbox('Chips')}
  //         />
  //       </label>
  //       <label>
  //         Chocolate
  //         <input
  //           type="checkbox"
  //           className="checkboxItem"
  //           checked={checkboxes.Chocolate}
  //           onChange={() => clickCheckbox('Chocolate')}
  //         />
  //       </label>
  //       <label>
  //         Crackers
  //         <input
  //           type="checkbox"
  //           className="checkboxItem"
  //           checked={checkboxes.Crackers}
  //           onChange={() => clickCheckbox('Crackers')}
  //         />
  //       </label>
  //       <label>
  //         Drinks
  //         <input
  //           type="checkbox"
  //           className="checkboxItem"
  //           checked={checkboxes.Drinks}
  //           onChange={() => clickCheckbox('Drinks')}
  //         />
  //       </label>
  //       <label>
  //         Savory
  //         <input
  //           type="checkbox"
  //           className="checkboxItem"
  //           checked={checkboxes.Savory}
  //           onChange={() => clickCheckbox('Savory')}
  //         />
  //       </label>
  //     </div>
  //     </div>
  //   );
  // };

    

  export default CategoryFilter;