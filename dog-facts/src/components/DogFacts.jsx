import React, { useState } from "react";
import { InitialFacts } from "./InitialFacts";
import { fetchFact } from "../services/fetchFact";
import AddButton from "./ui/AddButton";
import RemoveButton from "./ui/RemoveButton";
import DogImage from "./DogImage";

export const DogFacts = () => {
  const [fact, setFact] = useState([]);

  const [checkedState, setCheckedState] = useState(false);

  const removeItemHandler = (index) => {
    const newArray = [...fact];
    newArray.splice(index, 1);
    setFact(newArray);
  };

  const checkedStateHandler = (e) => {
    setCheckedState(!checkedState);
    const box = e.target.value;
    console.log(box);
  };

  const removeCheck = () => {
    if (checkedState === true) {
      removeItemHandler();
    }
  };

  const addItemHandler = async () => {
    try {
      await fetchFact()
        .then((response) => (response = response.data.facts))
        .then((data) => setFact([...fact, data]));
    } catch (err) {
      console.log(`There has been an error: ${err}`);
    }
  };

  return (
    <>
      <div onClick={addItemHandler}>
        <AddButton />
      </div>
      {Array.from(fact).map((item, index) => (
        <div
          item={item}
          key={index}
          style={{
            margin: 20,
            padding: 20,
            width: 500,
            minHeight: 200,
            display: "grid",
            gridTemplateRows: "20px 50px 1fr 50px",
            borderRadius: 10,
            boxShadow: "0px 6px 10px rgba(0, 0, 0, 0.25)",
          }}
        >
          <div className="space-y-2">
            <div className="space-y-2">
              <h3
                style={{ padding: 10 }}
                className="mb-2 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-1xl lg:text-1xl dark:text-white"
              >
                Dog fact nr. {index}
              </h3>
              <input
                type="checkbox"
                onChange={checkedStateHandler}
                style={{ margin: 20, height: 15, width: 15 }}
                value={`Checkbox ${index}`}
              />
              {item}
            </div>
          </div>
          <button
            onClick={() => removeItemHandler(index)}
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{
              margin: 10,
            }}
          >
            Remove item
          </button>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={removeCheck}
          >
            Remove checked item/s
          </button>
        </div>
      ))}

      <InitialFacts />
      <InitialFacts />
      <InitialFacts />

      <div>
        <RemoveButton />
      </div>
      <DogImage />
    </>
  );
};
