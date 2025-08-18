// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';
import { render, fireEvent, screen } from "@testing-library/react";
import App from "./App";

test("Adds one", () => {
  // render the App component
  render(<App />); 
  
  // save the heading in a variable
  const heading = screen.getByTestId("currentNumber"); 
  
  // save the button in a variable
  const btn = screen.getByTestId("addOne"); 
  
  // click the btn
  fireEvent.click(btn); 
  
  // test assumption
  expect(heading).toHaveTextContent("2");
});
