import { screen, render } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom"; // toBeInTheDocument comes from this lib

describe("Contact us page test cases", () => {
  test("Should load contact us component", () => {
    render(<Contact />);
    // Querying
    const heading = screen.getByRole("heading");
    // Assertion
    expect(heading).toBeInTheDocument();
  });

  it("Should load button inside contact us component", () => {
    render(<Contact />);
    // Querying
    const button = screen.getByRole("button");
    // Assertion
    expect(button).toBeInTheDocument();
  });

  it("Should load input name inside contact us component", () => {
    render(<Contact />);
    // Querying
    const inputName = screen.getByPlaceholderText("name");
    // Assertion
    expect(inputName).toBeInTheDocument();
  });

  test("Should load 2 input boxes inside contact us component", () => {
    render(<Contact />);
    // Querying
    const inputBoxes = screen.getAllByRole("textbox");
    // Assertion
    // expect(inputBoxes.length).not.toBe(3);
    expect(inputBoxes.length).toBe(2);
  });
});
