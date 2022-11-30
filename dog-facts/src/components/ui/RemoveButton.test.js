describe(RemoveButton, () => {
    it('renders Remove item button', () => {
        const {getByTestId} = render(<div>
            <button
                style={{
                    margin: 10,
                }}
                className="bg-red-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
            >
                Remove selected items
            </button>
        </div>)
        const buttonEl = getByTestId('remove-btn').textContent;
        expect(buttonEl).toEqual('Remove selected items')
    })
})