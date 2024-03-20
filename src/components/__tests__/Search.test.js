import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_DATA from "../../mocks/mockResListData.json";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should search reataurant list for biryani text input", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const cardsBeforeSearch = screen.getAllByTestId("resCard");
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole("button", { name: "Search" });
  const searchInput = screen.getByTestId("searchInput");
  fireEvent.change(searchInput, { target: { value: "biryani" } });
  fireEvent.click(searchBtn);
  //   scren should load 2 cards
  const cardsAfterSearch = screen.getAllByTestId("resCard");
  //   console.log(cards);
  expect(cardsAfterSearch.length).toBe(2);
});

it("Should filter top rated restaurant", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  );

  const searchBtn = screen.getByRole("button", { name: "Sort By Rating" });
  fireEvent.click(searchBtn);
  const topRatedResCard = screen.getAllByTestId("resRating");
  //   extracting the numeric part
  const ratingText = topRatedResCard[0].textContent;
  const ratingValue = parseFloat(ratingText);
  expect(ratingValue).toBeGreaterThan(4.6);
});
