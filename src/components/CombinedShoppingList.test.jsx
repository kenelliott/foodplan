import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import CombinedShoppingList from "./CombinedShoppingList";

const shoppingLists = [
	{
		label: "Week 1",
		categories: [
			{ name: "Produce", items: "bananas (6), avocados (3), garlic" },
			{ name: "Protein", items: "eggs (1 dozen), ground turkey (1 lb)" },
		],
	},
	{
		label: "Week 2",
		categories: [
			{ name: "Produce", items: "bananas (5), cilantro (1 bunch)" },
			{ name: "Protein", items: "shrimp (1 lb), eggs (1 dozen)" },
		],
	},
];

const shoppingListsWithSpices = [
	{
		label: "Week 1",
		categories: [
			{ name: "Produce", items: "bananas (6), garlic" },
			{ name: "Pantry / Dry", items: "cumin, chili powder, olive oil, quinoa, rolled oats" },
		],
	},
];

describe("CombinedShoppingList", () => {
	it("renders the section heading", () => {
		render(<CombinedShoppingList shoppingLists={shoppingLists} />);
		expect(
			screen.getByRole("button", { name: /Combined Shopping List/ }),
		).toBeInTheDocument();
	});

	it("shows merged items from both weeks when expanded", async () => {
		render(<CombinedShoppingList shoppingLists={shoppingLists} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Combined Shopping List/ }),
		);

		expect(screen.getByText("bananas (6)")).toBeInTheDocument();
		expect(screen.getByText("bananas (5)")).toBeInTheDocument();
		expect(screen.getByText("avocados (3)")).toBeInTheDocument();
		expect(screen.getByText("cilantro (1 bunch)")).toBeInTheDocument();
	});

	it("deduplicates identical items across weeks", async () => {
		render(<CombinedShoppingList shoppingLists={shoppingLists} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Combined Shopping List/ }),
		);

		const eggItems = screen.getAllByText("eggs (1 dozen)");
		expect(eggItems).toHaveLength(1);
	});

	it("shows category chips", async () => {
		render(<CombinedShoppingList shoppingLists={shoppingLists} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Combined Shopping List/ }),
		);

		expect(screen.getByText("Produce")).toBeInTheDocument();
		expect(screen.getByText("Protein")).toBeInTheDocument();
	});

	it("excludes spice items", async () => {
		render(<CombinedShoppingList shoppingLists={shoppingListsWithSpices} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Combined Shopping List/ }),
		);

		expect(screen.getByText("quinoa")).toBeInTheDocument();
		expect(screen.getByText("rolled oats")).toBeInTheDocument();
		expect(screen.queryByText("cumin")).not.toBeInTheDocument();
		expect(screen.queryByText("chili powder")).not.toBeInTheDocument();
		expect(screen.queryByText("olive oil")).not.toBeInTheDocument();
	});

	it("can check off an item", async () => {
		render(<CombinedShoppingList shoppingLists={shoppingLists} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Combined Shopping List/ }),
		);

		const item = screen.getByText("bananas (6)");
		await userEvent.click(item);

		const checkbox = within(item.closest("li")).getByRole("checkbox");
		expect(checkbox).toBeChecked();
	});
});
