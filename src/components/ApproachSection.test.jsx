import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ApproachSection from "./ApproachSection";

const approach = {
	title: "Gradual Portion Reduction",
	summary: "This plan begins a smart, gradual calorie reduction.",
	principles: [
		{
			title: "Week 1: reduce portions 15–20%",
			detail: "Grain servings drop from ~1.5 cups to ~1 cup cooked.",
		},
		{
			title: "Boost protein at breakfast",
			detail: "Greek yogurt, eggs, and protein-forward breakfasts.",
		},
		{
			title: "One planned afternoon snack",
			detail: "~150 cal intentional snack prevents evening grazing.",
		},
	],
};

describe("ApproachSection", () => {
	it("renders the section heading", () => {
		render(<ApproachSection approach={approach} />);
		expect(
			screen.getByRole("heading", { name: /Gradual Portion Reduction/, level: 6 }),
		).toBeInTheDocument();
	});

	it("is expanded by default and shows summary", () => {
		render(<ApproachSection approach={approach} />);
		expect(
			screen.getByText(/smart, gradual calorie reduction/),
		).toBeVisible();
	});

	it("shows all principles", () => {
		render(<ApproachSection approach={approach} />);
		expect(screen.getByText("Week 1: reduce portions 15–20%")).toBeInTheDocument();
		expect(screen.getByText("Boost protein at breakfast")).toBeInTheDocument();
		expect(screen.getByText("One planned afternoon snack")).toBeInTheDocument();
	});

	it("shows principle details", () => {
		render(<ApproachSection approach={approach} />);
		expect(
			screen.getByText(/Grain servings drop from/),
		).toBeInTheDocument();
		expect(
			screen.getByText(/prevents evening grazing/),
		).toBeInTheDocument();
	});
});
