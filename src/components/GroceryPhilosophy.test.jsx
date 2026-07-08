import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import GroceryPhilosophy from "./GroceryPhilosophy";

const philosophy = [
	"Proteins are cooked in bulk and repurposed across 2–3 days.",
	"Grains (rice, quinoa) are made in large batches and reused.",
	"Produce is bought in two waves (Sunday of each week) to stay fresh.",
	"Pantry staples (beans, lentils, oats, canned tomatoes, spices) are always on hand.",
];

describe("GroceryPhilosophy", () => {
	it("renders the section heading", () => {
		render(<GroceryPhilosophy philosophy={philosophy} />);
		expect(
			screen.getByRole("button", { name: /Grocery Philosophy/ }),
		).toBeInTheDocument();
	});

	it("shows philosophy items when expanded", async () => {
		render(<GroceryPhilosophy philosophy={philosophy} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Grocery Philosophy/ }),
		);

		expect(screen.getByText(/Proteins are cooked in bulk/)).toBeInTheDocument();
		expect(screen.getByText(/Grains \(rice, quinoa\)/)).toBeInTheDocument();
		expect(screen.getByText(/Produce is bought in two waves/)).toBeInTheDocument();
		expect(screen.getByText(/Pantry staples/)).toBeInTheDocument();
	});
});
