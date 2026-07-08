import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import WeekAccordion from "../components/WeekAccordion";

const week = {
	label: "Week 1",
	days: [
		{
			day: "Sunday — Prep Day",
			batchNotes: "Roast a whole chicken",
			meals: [
				{ meal: "Breakfast", menu: "Yogurt parfaits", notes: "—" },
				{ meal: "Lunch", menu: "Salad", notes: "Use greens" },
				{ meal: "Dinner", menu: "Roast chicken", notes: "Save leftovers" },
			],
		},
		{
			day: "Monday",
			meals: [
				{ meal: "Breakfast", menu: "Overnight oats", notes: "—" },
				{ meal: "Lunch", menu: "Quinoa bowl", notes: "Leftovers" },
				{ meal: "Dinner", menu: "Stir-fry", notes: "Extra rice" },
			],
		},
	],
};

describe("WeekAccordion", () => {
	it("renders the week label", () => {
		render(<WeekAccordion week={week} />);
		expect(
			screen.getByRole("heading", { name: /Week 1/, level: 6 }),
		).toBeInTheDocument();
	});

	it("is expanded by default and shows day names", () => {
		render(<WeekAccordion week={week} />);
		expect(
			screen.getByRole("button", { name: /Sunday — Prep Day/ }),
		).toBeVisible();
		expect(
			screen.getByRole("button", { name: /Monday/ }),
		).toBeVisible();
	});

	it("shows nested day meals when a day is clicked", async () => {
		render(<WeekAccordion week={week} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Monday/ }),
		);

		expect(screen.getByText("Overnight oats")).toBeInTheDocument();
		expect(screen.getByText("Stir-fry")).toBeInTheDocument();
	});
});
