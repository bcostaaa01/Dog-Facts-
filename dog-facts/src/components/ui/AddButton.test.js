import { render, screen } from '@testing-library/react';
import AddButton from './AddButton';

test('Add button exists and has correct text', () => {
    render(<AddButton />)
    const addBtn = screen.getByText(/Add item/i)
    expect(addBtn).toBeInTheDocument()
})