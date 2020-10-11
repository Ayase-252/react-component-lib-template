import React from "react";
import { render } from "@testing-library/react";
import Button from "./button";

describe("Button", () => {
  it("should show a button", () => {
    const { getByText } = render(<Button></Button>);

    getByText("button");
  });
});
