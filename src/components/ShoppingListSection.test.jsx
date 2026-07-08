import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ShoppingListSection from "./ShoppingListSection";

const shoppingLists = [
	{
		label: "Week 1 — Buy Sunday",
		categories: [
			{ name: "Produce", items: "Mixed berries (2 pints), bananas (6)" },
			{ name: "Protein", items: "Whole chicken (4–5 lb), eggs (1 dozen)" },
		],
	},
	{
		label: "Week 2 — Buy Sunday",
		categories: [
			{ name: "Produce", items: "Mixed berries (1 pint)" },
			{ name: "Protein", items: "Chicken thighs (3 lb)" },
		],
	},
];

const expandWeek1 = async () => {
	await userEvent.click(
		screen.getByRole("button", { name: /Shopping Lists/ }),
	);
	await userEvent.click(
		screen.getByRole("button", { name: /Week 1 — Buy Sunday/ }),
	);
};

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
		await expandWeek1();

		expect(screen.getAllByText("Produce").length).toBeGreaterThanOrEqual(1);
		expect(screen.getAllByText("Protein").length).toBeGreaterThanOrEqual(1);
	});

	it("renders items as individual checkboxes", async () => {
		render(<ShoppingListSection shoppingLists={shoppingLists} />);
		await expandWeek1();

		expect(screen.getByText("Mixed berries (2 pints)")).toBeInTheDocument();
		expect(screen.getByText("bananas (6)")).toBeInTheDocument();
		expect(screen.getByText("Whole chicken (4–5 lb)")).toBeInTheDocument();
		expect(screen.getByText("eggs (1 dozen)")).toBeInTheDocument();
	});

	it("can check off an item", async () => {
		render(<ShoppingListSection shoppingLists={shoppingLists} />);
		await expandWeek1();

		const item = screen.getByText("bananas (6)");
		await userEvent.click(item);

		const checkbox = within(item.closest("li")).getByRole("checkbox");
		expect(checkbox).toBeChecked();
	});

	it("applies strikethrough to checked items", async () => {
		render(<ShoppingListSection shoppingLists={shoppingLists} />);
		await expandWeek1();

		const item = screen.getByText("bananas (6)");
		await userEvent.click(item);

		expect(item.closest(".MuiListItemText-root")).toHaveStyle(
			"text-decoration: line-through",
		);
	});
});
