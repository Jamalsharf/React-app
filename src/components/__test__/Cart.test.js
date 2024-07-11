import { act, fireEvent, render, screen } from "@testing-library/react";
import RestaurantMenu from "../RestaurantMenu";
import ANY_NAME from "../mocks/mockResmenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(ANY_NAME),
  })
);

it("Should Load Restaurant menu componenmt", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestaurantMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  const accordianheader = screen.getByText("Tandoori Items(6)");
  fireEvent.click(accordianheader);

  const headerlength = screen.getAllByTestId("Fooditems");
  expect(headerlength.length).toBe(6);
  expect(screen.getByText("Cart-🛒(0 items)")).toBeInTheDocument();

  const addBtns = screen.getAllByRole("button", { name: "Add +" });
  fireEvent.click(addBtns[0]);

  expect(screen.getByText("Cart-🛒(1 items)")).toBeInTheDocument();
  fireEvent.click(addBtns[1]);
  expect(screen.getByText("Cart-🛒(2 items)")).toBeInTheDocument();

  expect(screen.getAllByTestId("Fooditems").length).toBe(6);
});
