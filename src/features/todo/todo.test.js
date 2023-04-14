import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store, persistor } from "../../app/store";
import App from "../../App";

describe("todo module", () => {
  test("find todo list heading", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(screen.getByText("Todo list")).toBeInTheDocument();
  });
  test("find input field", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await userEvent.click(screen.getByRole("link", { name: "Add" }));
    const inputField = getInputField();
    expect(inputField).toBeInTheDocument();
  });
  test("add todo form", async () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    const input = getInputField();
    userEvent.type(input, "test task");
    userEvent.click(screen.getByRole("button"));
  });
});

function getInputField() {
  return screen.getByPlaceholderText("What do you need to do today?");
}
