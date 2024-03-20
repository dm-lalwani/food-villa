import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import RestMenu from "../RestMenu";
import MOCK_DATA from "../../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import Header from "../Header";
import Cart from "../Cart";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  });
});

it("should load restaurant menu component with empty cart", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestMenu />
        </Provider>
      </BrowserRouter>
    )
  );

  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
});

it("Should add items in the cart for Rivayati North Indian Curries and update Header as well as Cart Page", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );

  //   expanding 2nd category
  const accordianHeader = screen.getByText("Rivayati North Indian Curries (7)");
  fireEvent.click(accordianHeader);

  // clicking on add button
  const addBtns = screen.getAllByRole("button", { name: "ADD+" });
  fireEvent.click(addBtns[0]);
  fireEvent.click(addBtns[1]);

  expect(screen.getByText("Cart (2 items)")).toBeInTheDocument();
  //   assertion for Cart Page
  expect(screen.getAllByTestId("foodItems").length).toBe(9);
});

it("Should clear the cart page and update the header", async () => {
  await act(async () =>
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
          <RestMenu />
          <Cart />
        </Provider>
      </BrowserRouter>
    )
  );
  const accordianHeader = screen.getByText("Rivayati North Indian Curries (7)");
  fireEvent.click(accordianHeader);

  fireEvent.click(screen.getByRole("button", { name: "Clear Cart" }));
  expect(screen.getAllByTestId("foodItems").length).toBe(7);
  //  assertion for Header
  expect(screen.getByText("Cart (0 items)")).toBeInTheDocument();
  expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
});
