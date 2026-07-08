import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ShoppingListSection from "./ShoppingListSection";

const shoppingLists = [
	{
		label: "Week 1 — Buy Sunday",
		categories: [
			{ name: "Produce", items: "Mixed berries (2 pints), bananas (6)" },
			{ name: "Protein", items: "Whole chicken (4–5 lb), eggs (1 dozen)" },
			{ name: "Pantry / Dry", items: "Quinoa, jasmine rice" },
			{ name: "Dairy / Other", items: "Shredded cheese, feta" },
		],
	},
	{
		label: "Week 2 — Buy Sunday",
		categories: [
			{ name: "Produce", items: "Mixed berries (1 pint)" },
			{ name: "Protein", items: "Chicken thighs (3 lb)" },
			{ name: "Pantry / Dry", items: "Brown rice, couscous" },
			{ name: "Dairy / Other", items: "Parmesan, shredded cheese" },
		],
	},
];

describe("ShoppingListSection", () => {
	it("renders the section heading", () => {
		render(<ShoppingListSection shoppingLists={shoppingLists} />);
		expect(
			screen.getByRole("button", { name: /Shopping Lists/ }),
		).toBeInTheDocument();
	});

	it("shows week labels when expanded", async () => {
		render(<ShoppingListSection shoppingLists={shoppingLists} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Shopping Lists/ }),
		);

		expect(
			screen.getByRole("button", { name: /Week 1 — Buy Sunday/ }),
		).toBeInTheDocument();
		expect(
			screen.getByRole("button", { name: /Week 2 — Buy Sunday/ }),
		).toBeInTheDocument();
	});

	it("shows category chips when a week is expanded", async () => {
		render(<ShoppingListSection shoppingLists={shoppingLists} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Shopping Lists/ }),
		);
		await userEvent.click(
			screen.getByRole("button", { name: /Week 1 — Buy Sunday/ }),
		);

		const chips = screen.getAllByText("Produce");
		expect(chips.length).toBeGreaterThanOrEqual(1);
		expect(screen.getAllByText("Protein").length).toBeGreaterThanOrEqual(1);
		expect(screen.getAllByText("Pantry / Dry").length).toBeGreaterThanOrEqual(1);
		expect(screen.getAllByText("Dairy / Other").length).toBeGreaterThanOrEqual(1);
	});

	it("shows shopping items under a category", async () => {
		render(<ShoppingListSection shoppingLists={shoppingLists} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Shopping Lists/ }),
		);
		await userEvent.click(
			screen.getByRole("button", { name: /Week 1 — Buy Sunday/ }),
		);

		expect(screen.getAllByText(/Mixed berries/).length).toBeGreaterThanOrEqual(1);
		expect(screen.getAllByText(/Whole chicken/).length).toBeGreaterThanOrEqual(1);
	});
});
