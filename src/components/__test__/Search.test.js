import { fireEvent, act, render, screen } from "@testing-library/react";
import Body from "../Body";
import { BrowserRouter } from "react-router-dom";
import MOCK_DATA from "../mocks/mockreslist.json";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
it("Should search the body component with search ", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardBeforesearch = screen.getAllByTestId("rescard");
  expect(cardBeforesearch.length).toBe(8);
  const searchbtn = screen.getByRole("button", { name: "Search" });

  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "Ezham Suvai" } });
  fireEvent.click(searchbtn);
  const cardsAftersearch = screen.getAllByTestId("rescard");
  expect(cardsAftersearch.length).toBe(1);
});

it("Should Filter toprated restaurants", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body></Body>
      </BrowserRouter>
    )
  );
  const cardBeforefilter = screen.getAllByTestId("rescard");
  expect(cardBeforefilter.length).toBe(8);

  const topratedbtn = screen.getByRole("button", {
    name: "Top rated restaurants",
  });
  fireEvent.click(topratedbtn);

  const cardAfterfilter = screen.getAllByTestId("rescard");
  expect(cardAfterfilter.length).toBe(5);
});
