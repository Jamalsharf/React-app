import { render, screen } from "@testing-library/react";
import Restaurantcard from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("Should render Restraurant card component with props data", () => {
  render(<Restaurantcard resData={MOCK_DATA} />);

  const name = screen.getByText("Pizza Hut");

  expect(name).toBeInTheDocument();
});
