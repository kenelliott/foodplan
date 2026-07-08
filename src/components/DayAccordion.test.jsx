import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import DayAccordion from "./DayAccordion";

const dayWithBatch = {
	day: "Sunday — Prep Day",
	batchNotes: "Roast a whole chicken",
	meals: [
		{ meal: "Breakfast", menu: "Greek yogurt parfaits", notes: "—" },
		{ meal: "Lunch", menu: "Light salad", notes: "Use greens" },
		{ meal: "Dinner", menu: "Roast chicken", notes: "Save leftovers" },
	],
};

const dayWithoutBatch = {
	day: "Monday",
	meals: [
		{ meal: "Breakfast", menu: "Overnight oats", notes: "Make 4 servings" },
		{ meal: "Lunch", menu: "Chicken quinoa bowl", notes: "Sunday leftovers" },
		{ meal: "Dinner", menu: "Chicken stir-fry", notes: "Cook extra rice" },
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
		expect(within(table).getByText("Greek yogurt parfaits")).toBeInTheDocument();
		expect(within(table).getByText("Light salad")).toBeInTheDocument();
		expect(within(table).getByText("Roast chicken")).toBeInTheDocument();
	});

	it("shows batch notes alert when batchNotes is present", async () => {
		render(<DayAccordion dayData={dayWithBatch} />);
		await userEvent.click(screen.getByRole("button", { name: /Sunday — Prep Day/ }));

		expect(screen.getByRole("alert")).toHaveTextContent("Roast a whole chicken");
	});

	it("does not show batch notes when absent", async () => {
		render(<DayAccordion dayData={dayWithoutBatch} />);
		await userEvent.click(screen.getByRole("button", { name: /Monday/ }));

		expect(screen.queryByRole("alert")).not.toBeInTheDocument();
	});

	it("renders all three meal rows", async () => {
		render(<DayAccordion dayData={dayWithoutBatch} />);
		await userEvent.click(screen.getByRole("button", { name: /Monday/ }));

		const table = screen.getByRole("table");
		expect(within(table).getByText("Overnight oats")).toBeInTheDocument();
		expect(within(table).getByText("Chicken quinoa bowl")).toBeInTheDocument();
		expect(within(table).getByText("Chicken stir-fry")).toBeInTheDocument();
	});

	it("displays meal notes", async () => {
		render(<DayAccordion dayData={dayWithoutBatch} />);
		await userEvent.click(screen.getByRole("button", { name: /Monday/ }));

		const table = screen.getByRole("table");
		expect(within(table).getByText("Make 4 servings")).toBeInTheDocument();
		expect(within(table).getByText("Sunday leftovers")).toBeInTheDocument();
	});
});
