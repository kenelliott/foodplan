import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Alert,
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";

export default function ApproachSection({ approach }) {
	return (
		<Accordion defaultExpanded sx={{ mb: 3 }}>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<FitnessCenterIcon sx={{ mr: 1, color: "secondary.main" }} />
				<Typography variant="h6" fontWeight={700}>
					{approach.title}
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				<Alert severity="success" sx={{ mb: 2 }}>
					<Typography variant="body2">{approach.summary}</Typography>
				</Alert>
				<List dense>
					{approach.principles.map((p) => (
						<ListItem key={p.title}>
							<ListItemIcon sx={{ minWidth: 36 }}>
								<CheckCircleOutlineIcon color="secondary" fontSize="small" />
							</ListItemIcon>
							<ListItemText
								primary={p.title}
								secondary={p.detail}
								primaryTypographyProps={{ fontWeight: 600 }}
							/>
						</ListItem>
					))}
				</List>
			</AccordionDetails>
		</Accordion>
	);
}
