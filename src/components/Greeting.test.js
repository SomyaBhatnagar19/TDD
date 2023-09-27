import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Heloow World as a text', () => {
    render(<Greeting/>);
    const helloWorldElement = screen.getByText(/hellow world/i);
    expect(helloWorldElement).toBeInTheDocument();
})