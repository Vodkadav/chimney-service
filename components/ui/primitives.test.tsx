import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { GradientText } from "./gradient-text";
import { Heading } from "./heading";
import { Badge } from "./badge";
import { Card } from "./card";

describe("UI primitives", () => {
  it("GradientText renders its text", () => {
    render(<GradientText>Shiny</GradientText>);
    expect(screen.getByText("Shiny")).toBeInTheDocument();
  });

  it("Heading renders the requested heading level", () => {
    render(<Heading as="h1">Title</Heading>);
    expect(screen.getByRole("heading", { level: 1, name: "Title" })).toBeInTheDocument();
  });

  it("Badge renders its children", () => {
    render(<Badge variant="accent">New</Badge>);
    expect(screen.getByText("New")).toBeInTheDocument();
  });

  it("Card forwards className and children", () => {
    render(
      <Card className="tile" data-testid="card">
        body
      </Card>,
    );
    expect(screen.getByTestId("card")).toHaveClass("tile");
  });
});
