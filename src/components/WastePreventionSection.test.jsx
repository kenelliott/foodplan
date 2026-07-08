import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import WastePreventionSection from "./WastePreventionSection";

const wastePrevention = [
	{ tactic: "Batch grains", detail: "Quinoa, rice each last 2–3 days" },
	{
		tactic: "Protein chaining",
		detail: "Each protein is cooked once and appears in 2–3 meals before it's gone",
	},
	{ tactic: "Freezer safety net", detail: "Lentil soup frozen on Friday" },
	{ tactic: "Friday wind-down", detail: "Fridge is clear" },
	{ tactic: "Produce in 2 waves", detail: "Fresh produce each Sunday" },
	{ tactic: "Fridge-clean meals", detail: "Saturday breakfasts use up aging produce" },
];

describe("WastePreventionSection", () => {
	it("renders the section heading", () => {
		render(<WastePreventionSection wastePrevention={wastePrevention} />);
		expect(
			screen.getByRole("button", { name: /Waste-Prevention Summary/ }),
		).toBeInTheDocument();
	});

	it("shows tactics when expanded", async () => {
		render(<WastePreventionSection wastePrevention={wastePrevention} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Waste-Prevention Summary/ }),
		);

		expect(screen.getByText("Batch grains")).toBeInTheDocument();
		expect(screen.getByText("Protein chaining")).toBeInTheDocument();
		expect(screen.getByText("Freezer safety net")).toBeInTheDocument();
		expect(screen.getByText("Friday wind-down")).toBeInTheDocument();
		expect(screen.getByText("Produce in 2 waves")).toBeInTheDocument();
		expect(screen.getByText("Fridge-clean meals")).toBeInTheDocument();
	});

	it("shows tactic details", async () => {
		render(<WastePreventionSection wastePrevention={wastePrevention} />);
		await userEvent.click(
			screen.getByRole("button", { name: /Waste-Prevention Summary/ }),
		);

		expect(screen.getByText(/Each protein is cooked once/)).toBeInTheDocument();
	});
});
