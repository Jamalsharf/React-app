import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";
import Cart from "../Cart";
import "@testing-library/jest-dom";

test("should render header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

test("should render header component with Cart items 0", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText("Cart-🛒(0 items)");

  expect(cartItems).toBeInTheDocument();
});

test("should render header component with Cart item", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const cartItems = screen.getByText(/Cart/);

  expect(cartItems).toBeInTheDocument();
});

it("should change login Button to Logout on click", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
        <Cart />
      </Provider>
    </BrowserRouter>
  );
  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logoutButton = screen.getByRole("button", { name: "Logout" });

  expect(logoutButton).toBeInTheDocument();
});
