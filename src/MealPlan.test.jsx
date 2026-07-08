import { render, screen, within } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import MealPlan from "./MealPlan";

describe("MealPlan", () => {
	it("renders the page title", () => {
		render(<MealPlan />);
		expect(
			screen.getByRole("heading", { name: /2-Week Healthy Meal Plan/, level: 3 }),
		).toBeInTheDocument();
	});

	it("renders the plan selector dropdown", () => {
		render(<MealPlan />);
		expect(screen.getByLabelText("Meal Plan")).toBeInTheDocument();
	});

	it("renders the people selector dropdown", () => {
		render(<MealPlan />);
		expect(screen.getByLabelText("People")).toBeInTheDocument();
	});

	it("renders the strategy alert", () => {
		render(<MealPlan />);
		const alerts = screen.getAllByRole("alert");
		const strategyAlert = alerts.find((el) =>
			el.textContent.includes("Batch-cook on Sundays"),
		);
		expect(strategyAlert).toBeDefined();
	});

	it("renders both week sections", () => {
		render(<MealPlan />);
		expect(
			screen.getByRole("heading", { name: "Week 1", level: 6 }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("heading", { name: "Week 2", level: 6 }),
		).toBeInTheDocument();
	});

	it("renders the grocery philosophy section", () => {
		render(<MealPlan />);
		expect(
			screen.getByRole("button", { name: /Grocery Philosophy/ }),
		).toBeInTheDocument();
	});

	it("renders the waste prevention section", () => {
		render(<MealPlan />);
		expect(
			screen.getByRole("button", { name: /Waste-Prevention Summary/ }),
		).toBeInTheDocument();
	});

	it("renders the shopping lists section", () => {
		render(<MealPlan />);
		expect(
			screen.getByRole("button", { name: /Shopping Lists/ }),
		).toBeInTheDocument();
	});

	it("renders the footer text", () => {
		render(<MealPlan />);
		expect(screen.getByText(/Buen provecho/)).toBeInTheDocument();
	});
});
