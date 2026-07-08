import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import ShoppingListSection from "../components/ShoppingListSection";

describe("ShoppingListSection", () => {
	it("renders the section heading", () => {
		render(<ShoppingListSection />);
		expect(
			screen.getByRole("button", { name: /Shopping Lists/ }),
		).toBeInTheDocument();
	});

	it("shows week labels when expanded", async () => {
		render(<ShoppingListSection />);
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
		render(<ShoppingListSection />);
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
		render(<ShoppingListSection />);
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
