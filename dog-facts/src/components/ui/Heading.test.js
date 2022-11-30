import { render, screen } from '@testing-library/react';
import Heading from './Heading';

test('Heading exists and has correct text', () => {
    render(<Heading />)
    const heading = screen.getByText(/Dog facts/i)
    expect(heading).toBeInTheDocument()
})