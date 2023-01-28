import { screen } from "@testing-library/react";
import { render, waitForLoadersDone } from "./test/test-utils";
import userEvent from "@testing-library/user-event";

const expectToAdvanceToSecondStep = () => {
  const stepInfoButton = screen.getByTestId("step-info-button");
  userEvent.click(stepInfoButton);

  const stepsInfo2 = screen.getByText("Step 2 of 3");
  expect(stepsInfo2).toBeInTheDocument();
};

const expectToBeInStep1 = () => {
  const stepsInfo1 = screen.getByText("Step 1 of 3");
  expect(stepsInfo1).toBeInTheDocument();
};

describe("Steps - Form Info", () => {
  it("should render first step", async () => {
    render({ route: "client1/onboarding" });

    await waitForLoadersDone();

    const title = screen.queryByText(
      "Going electric starts with understanding your needs"
    );

    expect(title).toBeInTheDocument();
  });

  it("should render icons", async () => {
    render({ route: "client1/onboarding" });

    await waitForLoadersDone();

    const icons = screen.getAllByTestId("info-icon");

    expect(icons).toHaveLength(3);
  });
});

describe("Steps - Header", () => {
  it("should render markers and text on header", async () => {
    render({ route: "client1/onboarding" });

    await waitForLoadersDone();

    const stepsInfo = screen.getByText("Step 1 of 3");

    expect(stepsInfo).toBeInTheDocument();
  });

  it("should render markers and text on header", async () => {
    render({ route: "client1/onboarding" });

    await waitForLoadersDone();
    const stepMarkers = screen.getAllByTestId("step-marker");
    expect(stepMarkers).toHaveLength(3);

    const stepsInfo1 = screen.getByText("Step 1 of 3");
    expect(stepsInfo1).toBeInTheDocument();

    expectToAdvanceToSecondStep();
  });
});

describe("Steps - Form Validations", () => {
  it("should render next button disabled", async () => {
    render({ route: "client1/onboarding" });

    await waitForLoadersDone();

    expectToAdvanceToSecondStep();

    const nextButton = screen.getByTestId("button-next");
    expect(nextButton).toBeDisabled();
  });

  it("should achieve the third step and submit-button must be enabled", async () => {
    render({ route: "client1/onboarding" });

    await waitForLoadersDone();
    const stepsInfo1 = screen.getByText("Step 1 of 3");
    expect(stepsInfo1).toBeInTheDocument();

    expectToAdvanceToSecondStep();

    const inputField = screen.getByTestId("input-field");
    userEvent.type(inputField, "text");

    const nextButton = screen.getByTestId("button-next");
    userEvent.click(nextButton);

    const stepsInfo3 = screen.getByText("Step 3 of 3");
    expect(stepsInfo3).toBeInTheDocument();

    const selectField = screen.getByText("Select an option...");
    userEvent.click(selectField);

    const selectOption = screen.getByText("Small Office");
    userEvent.click(selectOption);

    const submitButton = screen.getByTestId("button-submit");
    userEvent.click(submitButton);
    expect(submitButton).toBeEnabled();
  });

  it("should go back", async () => {
    render({ route: "client1/onboarding" });

    await waitForLoadersDone();
    expectToBeInStep1();

    expectToAdvanceToSecondStep();
    const prevButton = screen.getByTestId("button-prev");
    userEvent.click(prevButton);

    expectToBeInStep1();
  });
});
