import React, { useState, useEffect } from "react";
import { fetchFact } from "../services/fetchFact";

export const InitialFacts = () => {
  const [initialFacts, setInitialFacts] = useState([]);

  console.log(initialFacts[1]);

  useEffect(() => {
    try {
      fetchFact()
        .then((response) => (response = response.data.facts))
        .then((data) => setInitialFacts([...initialFacts, "", data]));
    } catch (err) {
      console.log(`There has been an error: ${err}`);
    }
  }, [2]);

  return (
    <div>
        <div
          className="bg-blue-500 w-full p-4 shadow-md lg:max-w-lg"
          style={{ margin: 15 }}
        >
          <div className="space-y-2">
            <div className="space-y-2">
              <h3
                className="mb-2 text-2xl font-extrabold tracking-tight leading-none text-gray-900 md:text-2xl lg:text-2xl dark:text-white"
                style={{ padding: 20 }}
              >
                Initial dog fact
              </h3>
              <input
                type="checkbox"
                style={{ margin: 10, height: 15, width: 15 }}
              />
              {initialFacts}
            </div>
          </div>
          <button
            className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{
              margin: 10,
            }}
          >
            Remove item
          </button>
        </div>
    </div>
  );
};
