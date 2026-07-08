import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Typography,
} from "@mui/material";
import DayAccordion from "./DayAccordion";

export default function WeekAccordion({ week }) {
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
