import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import GroceryPhilosophy from "../components/GroceryPhilosophy";

describe("GroceryPhilosophy", () => {
	it("renders the section heading", () => {
		render(<GroceryPhilosophy />);
		expect(
			screen.getByRole("button", { name: /Grocery Philosophy/ }),
		).toBeInTheDocument();
	});

	it("shows philosophy items when expanded", async () => {
		render(<GroceryPhilosophy />);
		await userEvent.click(
			screen.getByRole("button", { name: /Grocery Philosophy/ }),
		);

		expect(screen.getByText(/Proteins are cooked in bulk/)).toBeInTheDocument();
		expect(screen.getByText(/Grains \(rice, quinoa\)/)).toBeInTheDocument();
		expect(screen.getByText(/Produce is bought in two waves/)).toBeInTheDocument();
		expect(screen.getByText(/Pantry staples/)).toBeInTheDocument();
	});
});
