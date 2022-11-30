import { render, screen } from '@testing-library/react';
import RemoveButton from "./RemoveButton"

test('Remove button exists and has text', () => {
    render(<RemoveButton />)
    const removeBtn = screen.getByText(/Remove selected items/i)
    expect(removeBtn).toBeInTheDocument()
})