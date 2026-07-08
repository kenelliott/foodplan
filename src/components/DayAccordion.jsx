import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Alert,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";

const mealIcon = (meal) => {
	switch (meal) {
		case "Breakfast":
			return (
				<FreeBreakfastIcon
					fontSize="small"
					sx={{ mr: 0.5, verticalAlign: "middle", color: "warning.main" }}
				/>
			);
		case "Lunch":
			return (
				<LunchDiningIcon
					fontSize="small"
					sx={{ mr: 0.5, verticalAlign: "middle", color: "success.main" }}
				/>
			);
		case "Dinner":
			return (
				<DinnerDiningIcon
					fontSize="small"
					sx={{ mr: 0.5, verticalAlign: "middle", color: "primary.main" }}
				/>
			);
		default:
			return null;
	}
};

export default function DayAccordion({ dayData }) {
	return (
		<Accordion disableGutters sx={{ "&:before": { display: "none" }, mb: 1 }}>
			<AccordionSummary
				expandIcon={<ExpandMoreIcon />}
				sx={{ bgcolor: "grey.50" }}
			>
				<RestaurantIcon sx={{ mr: 1, color: "primary.main" }} />
				<Typography fontWeight={600}>{dayData.day}</Typography>
			</AccordionSummary>
			<AccordionDetails>
				{dayData.batchNotes && (
					<Alert severity="info" sx={{ mb: 2 }}>
						{dayData.batchNotes}
					</Alert>
				)}
				<TableContainer component={Paper} variant="outlined">
					<Table size="small">
						<TableHead>
							<TableRow>
								<TableCell sx={{ fontWeight: 700, width: 120 }}>Meal</TableCell>
								<TableCell sx={{ fontWeight: 700 }}>Menu</TableCell>
								<TableCell sx={{ fontWeight: 700, width: 260 }}>
									Notes
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{dayData.meals.map((m) => (
								<TableRow key={m.meal}>
									<TableCell>
										{mealIcon(m.meal)}
										{m.meal}
									</TableCell>
									<TableCell>{m.menu}</TableCell>
									<TableCell>
										<Typography variant="body2" color="text.secondary">
											{m.notes}
										</Typography>
									</TableCell>
								</TableRow>
							))}
						</TableBody>
					</Table>
				</TableContainer>
			</AccordionDetails>
		</Accordion>
	);
}
