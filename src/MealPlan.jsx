import {
	Alert,
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Stack,
	Typography,
} from "@mui/material";
import { useState } from "react";
import ApproachSection from "./components/ApproachSection";
import GroceryPhilosophy from "./components/GroceryPhilosophy";
import ShoppingListSection from "./components/ShoppingListSection";
import WastePreventionSection from "./components/WastePreventionSection";
import WeekAccordion from "./components/WeekAccordion";
import { buildShoppingLists } from "./data/buildShoppingLists";
import { intro } from "./data/intro";
import plans from "./data/plans";

export default function MealPlan() {
	const [planId, setPlanId] = useState(plans[0].id);
	const [servings, setServings] = useState(2);
	const plan = plans.find((p) => p.id === planId);
	const shoppingLists = buildShoppingLists(plan.weeks, servings);

	return (
		<Box sx={{ maxWidth: 900, mx: "auto", py: 4, px: 2 }}>
			<Typography
				variant="h3"
				fontWeight={800}
				gutterBottom
				sx={{
					background: "linear-gradient(135deg, #7c4dff 0%, #00e5ff 100%)",
					WebkitBackgroundClip: "text",
					WebkitTextFillColor: "transparent",
				}}
			>
				{intro.title}
			</Typography>

			<Stack direction="row" spacing={2} sx={{ mb: 3 }}>
				<FormControl sx={{ flex: 1 }}>
					<InputLabel id="plan-select-label">Meal Plan</InputLabel>
					<Select
						labelId="plan-select-label"
						id="plan-select"
						value={planId}
						label="Meal Plan"
						onChange={(e) => setPlanId(e.target.value)}
					>
						{plans.map((p) => (
							<MenuItem key={p.id} value={p.id}>
								{p.label}
							</MenuItem>
						))}
					</Select>
				</FormControl>

				<FormControl sx={{ minWidth: 100 }}>
					<InputLabel id="servings-select-label">People</InputLabel>
					<Select
						labelId="servings-select-label"
						id="servings-select"
						value={servings}
						label="People"
						onChange={(e) => setServings(e.target.value)}
					>
						{[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
							<MenuItem key={n} value={n}>
								{n}
							</MenuItem>
						))}
					</Select>
				</FormControl>
			</Stack>

			<Alert severity="info" sx={{ mb: 3 }}>
				<Typography variant="body2">{intro.strategy}</Typography>
			</Alert>

			<GroceryPhilosophy philosophy={intro.philosophy} />

			{plan.approach && <ApproachSection approach={plan.approach} />}

			<Box sx={{ mt: 2, mb: 2 }}>
				<ShoppingListSection shoppingLists={shoppingLists} />
			</Box>

			{plan.weeks.map((w) => (
				<WeekAccordion key={w.label} week={w} />
			))}

			<Box sx={{ mt: 2 }}>
				<WastePreventionSection wastePrevention={plan.wastePrevention} />
			</Box>

			<Typography
				variant="body2"
				color="text.secondary"
				align="center"
				sx={{ mt: 4 }}
			>
				Buen provecho! 🇪🇨
			</Typography>
		</Box>
	);
}
