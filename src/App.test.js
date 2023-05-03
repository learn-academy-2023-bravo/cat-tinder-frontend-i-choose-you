import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

describe("<App />", () => {
  it("renders without crashing", () => {
      const div = document.createElement("div")
      render(
      <BrowserRouter>
      <App />
      </BrowserRouter>, div)
  })
})