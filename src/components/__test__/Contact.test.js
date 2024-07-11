import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("ContactUs page testcase", () => {
  // beforeAll(() => {
  //   console.log("BeforeAll");
  // });
  // beforeEach(() => {
  //   console.log("BeforeEach");
  // });
  // afterAll(() => {
  //   console.log("AfterAll");
  // });
  // afterEach(() => {
  //   console.log("AfterEach");
  // });

  test("should load contact us component", () => {
    render(<Contact></Contact>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("should load inside Button contact component", () => {
    render(<Contact></Contact>);
    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  test("should load input name inside contact component", () => {
    render(<Contact></Contact>);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });

  it("should load 2 input boxes on the contact component", () => {
    render(<Contact></Contact>);
    const inputBoxes = screen.getAllByRole("textbox");

    expect(inputBoxes.length).toBe(2);
  });
});
