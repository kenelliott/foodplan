import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import DinnerDiningIcon from "@mui/icons-material/DinnerDining";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FreeBreakfastIcon from "@mui/icons-material/FreeBreakfast";
import KitchenIcon from "@mui/icons-material/Kitchen";
import LunchDiningIcon from "@mui/icons-material/LunchDining";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Alert,
	Box,
	Chip,
	Divider,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer,
	TableHead,
	TableRow,
	Typography,
} from "@mui/material";
import { intro, shoppingLists, wastePrevention, weeks } from "./mealPlanData";

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

function DayAccordion({ dayData }) {
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

function WeekAccordion({ week }) {
	return (
		<Accordion defaultExpanded>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<Typography variant="h6" fontWeight={700}>
					{week.label}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				{week.days.map((d) => (
					<DayAccordion key={d.day} dayData={d} />
				))}
			</AccordionDetails>
		</Accordion>
	);
}

function WastePreventionSection() {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<KitchenIcon sx={{ mr: 1, color: "success.main" }} />
				<Typography variant="h6" fontWeight={700}>
					Waste-Prevention Summary
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<List dense>
					{wastePrevention.map((wp) => (
						<ListItem key={wp.tactic}>
							<ListItemIcon sx={{ minWidth: 36 }}>
								<CheckCircleOutlineIcon color="success" fontSize="small" />
							</ListItemIcon>
							<ListItemText
								primary={wp.tactic}
								secondary={wp.detail}
								primaryTypographyProps={{ fontWeight: 600 }}
							/>
						</ListItem>
					))}
				</List>
			</AccordionDetails>
		</Accordion>
	);
}

function ShoppingListSection() {
	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<ShoppingCartIcon sx={{ mr: 1, color: "warning.main" }} />
				<Typography variant="h6" fontWeight={700}>
					Shopping Lists
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				{shoppingLists.map((list) => (
					<Accordion
						key={list.label}
						disableGutters
						sx={{ "&:before": { display: "none" }, mb: 1 }}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							sx={{ bgcolor: "grey.50" }}
						>
							<Typography fontWeight={600}>{list.label}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{list.categories.map((cat, i) => (
								<Box
									key={cat.name}
									sx={{ mb: i < list.categories.length - 1 ? 2 : 0 }}
								>
									<Chip
										label={cat.name}
										color="primary"
										size="small"
										sx={{ mb: 1 }}
									/>
									<Typography variant="body2">{cat.items}</Typography>
									{i < list.categories.length - 1 && <Divider sx={{ mt: 2 }} />}
								</Box>
							))}
						</AccordionDetails>
					</Accordion>
				))}
			</AccordionDetails>
		</Accordion>
	);
}

export default function MealPlan() {
	return (
		<Box sx={{ maxWidth: 900, mx: "auto", py: 4, px: 2 }}>
			<Typography variant="h3" fontWeight={800} gutterBottom>
				{intro.title}
			</Typography>

			<Alert severity="info" sx={{ mb: 3 }}>
				<Typography variant="body2">{intro.strategy}</Typography>
			</Alert>

			<Accordion sx={{ mb: 3 }}>
				<AccordionSummary expandIcon={<ExpandMoreIcon />}>
					<Typography variant="h6" fontWeight={700}>
						Grocery Philosophy
					</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<List dense>
						{intro.philosophy.map((p) => (
							<ListItem key={p}>
								<ListItemIcon sx={{ minWidth: 36 }}>
									<CheckCircleOutlineIcon color="primary" fontSize="small" />
								</ListItemIcon>
								<ListItemText primary={p} />
							</ListItem>
						))}
					</List>
				</AccordionDetails>
			</Accordion>

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
