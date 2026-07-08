import {
	Alert,
	Box,
	FormControl,
	InputLabel,
	MenuItem,
	Select,
	Typography,
} from "@mui/material";
import { useState } from "react";
import ApproachSection from "./components/ApproachSection";
import CombinedShoppingList from "./components/CombinedShoppingList";
import GroceryPhilosophy from "./components/GroceryPhilosophy";
import ShoppingListSection from "./components/ShoppingListSection";
import WastePreventionSection from "./components/WastePreventionSection";
import WeekAccordion from "./components/WeekAccordion";
import { intro } from "./data/intro";
import plans from "./data/plans";

export default function MealPlan() {
	const [planId, setPlanId] = useState(plans[0].id);
	const plan = plans.find((p) => p.id === planId);

	return (
		<Box sx={{ maxWidth: 900, mx: "auto", py: 4, px: 2 }}>
			<Typography variant="h3" fontWeight={800} gutterBottom>
				{intro.title}
			</Typography>

			<FormControl fullWidth sx={{ mb: 3 }}>
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

			<Alert severity="info" sx={{ mb: 3 }}>
				<Typography variant="body2">{intro.strategy}</Typography>
			</Alert>

			<GroceryPhilosophy philosophy={intro.philosophy} />

			{plan.approach && <ApproachSection approach={plan.approach} />}

			<Box sx={{ mt: 2, mb: 2 }}>
				<CombinedShoppingList shoppingLists={plan.shoppingLists} />
			</Box>

			{plan.weeks.map((w) => (
				<WeekAccordion key={w.label} week={w} />
			))}

			<Box sx={{ mt: 2 }}>
				<WastePreventionSection wastePrevention={plan.wastePrevention} />
			</Box>

			<Box sx={{ mt: 2 }}>
				<ShoppingListSection shoppingLists={plan.shoppingLists} />
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
