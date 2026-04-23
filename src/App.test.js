import "./jest.polyfills";
import { act, render, screen } from "@testing-library/react";
import { HelmetProvider } from "react-helmet-async";
import { MemoryRouter } from "react-router-dom";
import App from "./App";

test("renders main content after the loading screen", async () => {
  jest.useFakeTimers();

  render(
    <HelmetProvider>
      <MemoryRouter>
        <App />
      </MemoryRouter>
    </HelmetProvider>
  );

  await act(async () => {
    jest.advanceTimersByTime(3000);
  });

  expect(screen.getByText(/skip to main content/i)).toBeInTheDocument();
});
