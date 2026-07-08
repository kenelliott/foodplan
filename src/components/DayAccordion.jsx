import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
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
import { getMenuItem } from "../data/menuItems";

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
								<TableCell sx={{ fontWeight: 700 }}>
									<DinnerDiningIcon
										fontSize="small"
										sx={{ mr: 0.5, verticalAlign: "middle", color: "primary.main" }}
									/>
									Menu
								</TableCell>
								<TableCell sx={{ fontWeight: 700, width: 260 }}>
									Notes
								</TableCell>
							</TableRow>
						</TableHead>
						<TableBody>
							{dayData.meals.map((m) => {
								const menuItem = m.menuItemId ? getMenuItem(m.menuItemId) : null;
								const menuText = menuItem ? menuItem.title : m.menu;
								return (
									<TableRow key={m.meal}>
										<TableCell>{menuText}</TableCell>
										<TableCell>
											<Typography variant="body2" color="text.secondary">
												{m.notes}
											</Typography>
										</TableCell>
									</TableRow>
								);
							})}
						</TableBody>
					</Table>
				</TableContainer>
			</AccordionDetails>
		</Accordion>
	);
}
