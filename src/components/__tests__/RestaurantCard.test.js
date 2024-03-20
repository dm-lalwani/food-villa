import RestaurantCard, { withPureVegLabel } from "../RestaurantCard";
import MOCK_DATA from "../../mocks/resCardMock.json";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

it("Should render restaurant card with props", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);
  const name = screen.getByText("Hariyaali");

  expect(name).toBeInTheDocument();
});

it("Should render restaurant card with pure veg label", () => {
  const RestaurantCardPureVeg = withPureVegLabel(RestaurantCard);
  render(<RestaurantCardPureVeg resData={MOCK_DATA} />);
  const vegLabel = screen.getByText("Pure Veg");
  expect(vegLabel).toBeInTheDocument();
});
