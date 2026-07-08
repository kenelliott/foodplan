import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { intro } from "../mealPlanData";

export default function GroceryPhilosophy() {
	return (
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
	);
}
