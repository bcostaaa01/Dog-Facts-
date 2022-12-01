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
          style={{ margin: 20,
            padding: 20,
            width: 500,
            minHeight: 200,
            display: 'grid',
            gridTemplateRows: '20px 50px 1fr 50px',
            borderRadius: 10,
            boxShadow: '0px 6px 10px rgba(0, 0, 0, 0.25)' }}
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
