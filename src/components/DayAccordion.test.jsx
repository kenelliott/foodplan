import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import DayAccordion from "./DayAccordion";

const dayWithBatch = {
	day: "Sunday — Prep Day",
	batchNotes: "Roast a whole chicken",
	meals: [
		{ meal: "Dinner", menuItemId: "grilled-chicken-roasted-veg-rice", notes: "Save leftovers" },
	],
};

const dayWithInlineMenu = {
	day: "Friday",
	meals: [
		{ meal: "Dinner", menu: "🍽️ Eating out", notes: "Enjoy" },
	],
};

describe("DayAccordion", () => {
	it("renders the day name", () => {
		render(<DayAccordion dayData={dayWithBatch} />);
		expect(
			screen.getByRole("button", { name: /Sunday — Prep Day/ }),
		).toBeInTheDocument();
	});

	it("shows meal table when expanded", async () => {
		render(<DayAccordion dayData={dayWithBatch} />);
		await userEvent.click(screen.getByRole("button", { name: /Sunday — Prep Day/ }));

		const table = screen.getByRole("table");
		expect(within(table).getByText("Grilled Chicken with Roasted Vegetables & Brown Rice")).toBeInTheDocument();
	});

	it("shows batch notes alert when batchNotes is present", async () => {
		render(<DayAccordion dayData={dayWithBatch} />);
		await userEvent.click(screen.getByRole("button", { name: /Sunday — Prep Day/ }));

		expect(screen.getByRole("alert")).toHaveTextContent("Roast a whole chicken");
	});

	it("does not show batch notes when absent", async () => {
		render(<DayAccordion dayData={dayWithInlineMenu} />);
		await userEvent.click(screen.getByRole("button", { name: /Friday/ }));

		expect(screen.queryByRole("alert")).not.toBeInTheDocument();
	});

	it("renders inline menu text when no menuItemId", async () => {
		render(<DayAccordion dayData={dayWithInlineMenu} />);
		await userEvent.click(screen.getByRole("button", { name: /Friday/ }));

		const table = screen.getByRole("table");
		expect(within(table).getByText(/Eating out/)).toBeInTheDocument();
	});

	it("displays meal notes", async () => {
		render(<DayAccordion dayData={dayWithBatch} />);
		await userEvent.click(screen.getByRole("button", { name: /Sunday — Prep Day/ }));

		const table = screen.getByRole("table");
		expect(within(table).getByText("Save leftovers")).toBeInTheDocument();
	});
});
