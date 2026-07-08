import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import KitchenIcon from "@mui/icons-material/Kitchen";
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

export default function WastePreventionSection({ wastePrevention }) {
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
