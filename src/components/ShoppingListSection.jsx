import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Chip,
	Divider,
	Typography,
} from "@mui/material";

export default function ShoppingListSection({ shoppingLists }) {
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
