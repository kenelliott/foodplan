import { Alert, Box, Typography } from "@mui/material";
import GroceryPhilosophy from "./components/GroceryPhilosophy";
import ShoppingListSection from "./components/ShoppingListSection";
import WastePreventionSection from "./components/WastePreventionSection";
import WeekAccordion from "./components/WeekAccordion";
import { intro, weeks } from "./mealPlanData";

export default function MealPlan() {
	return (
		<Box sx={{ maxWidth: 900, mx: "auto", py: 4, px: 2 }}>
			<Typography variant="h3" fontWeight={800} gutterBottom>
				{intro.title}
			</Typography>

			<Alert severity="info" sx={{ mb: 3 }}>
				<Typography variant="body2">{intro.strategy}</Typography>
			</Alert>

			<GroceryPhilosophy />

			{weeks.map((w) => (
				<WeekAccordion key={w.label} week={w} />
			))}

			<Box sx={{ mt: 2 }}>
				<WastePreventionSection />
			</Box>

			<Box sx={{ mt: 2 }}>
				<ShoppingListSection />
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
