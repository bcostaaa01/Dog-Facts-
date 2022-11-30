import React from 'react'

const RemoveButton = () => {
  return (
    <div>
        <button
        style={{
          margin: 10,
        }}
        id="remove-btn"
        className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
      >
        Remove selected items
      </button>
    </div>
  )
}

export default RemoveButton;
