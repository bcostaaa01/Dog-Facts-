import React from 'react'

const AddButton = () => {
  return (
    <div>
        <button
        style={{
          margin: 10,
        }}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Add item
      </button>
    </div>
  )
}

export default AddButton;