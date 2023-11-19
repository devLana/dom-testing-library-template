import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { MockedProvider } from "@apollo/client/testing";
import App, { TEST_MUTATION } from "../";

test("Should disable button", async () => {
  const user = userEvent.setup();
  const mocks = [
    {
      request: { variables: { name: "Test Name" }, query: TEST_MUTATION },
      error: new Error("Network Error"),
    },
  ];

  render(
    <MockedProvider mocks={mocks}>
      <App />
    </MockedProvider>
  );

  await user.click(screen.getByRole("button", { name: "Click Me!" }));

  expect(screen.getByRole("button", { name: "Click Me!" })).toBeDisabled();
});
