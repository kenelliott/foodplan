import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import WastePreventionSection from "../components/WastePreventionSection";

describe("WastePreventionSection", () => {
	it("renders the section heading", () => {
		render(<WastePreventionSection />);
		expect(
			screen.getByRole("button", { name: /Waste-Prevention Summary/ }),
		).toBeInTheDocument();
	});

	it("shows tactics when expanded", async () => {
		render(<WastePreventionSection />);
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
		render(<WastePreventionSection />);
		await userEvent.click(
			screen.getByRole("button", { name: /Waste-Prevention Summary/ }),
		);

		expect(screen.getByText(/Each protein is cooked once/)).toBeInTheDocument();
	});
});
