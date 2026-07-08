import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Checkbox,
	Chip,
	Divider,
	List,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import { useState } from "react";

export default function ShoppingListSection({ shoppingLists }) {
	const [checked, setChecked] = useState({});

	const toggleItem = (item) => {
		setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
	};

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
							sx={{ bgcolor: "action.hover" }}
						>
							<Typography fontWeight={600}>{list.label}</Typography>
						</AccordionSummary>
						<AccordionDetails>
							{list.categories.map((cat, i) => {
								const items = Array.isArray(cat.items) ? cat.items : [cat.items];
								return (
									<div key={cat.name}>
										<Chip
											label={cat.name}
											color="primary"
											size="small"
											sx={{ mb: 1, mt: i > 0 ? 1 : 0 }}
										/>
										<List dense disablePadding sx={{ columns: 3 }}>
											{items.map((item) => {
												const key = `${list.label}::${cat.name}::${item}`;
												return (
													<ListItem key={key} disablePadding sx={{ breakInside: "avoid" }}>
														<ListItemButton dense onClick={() => toggleItem(key)}>
															<ListItemIcon sx={{ minWidth: 36 }}>
																<Checkbox
																	edge="start"
																	checked={!!checked[key]}
																	tabIndex={-1}
																	disableRipple
																	size="small"
																/>
															</ListItemIcon>
															<ListItemText
																primary={item}
																sx={{
																	textDecoration: checked[key] ? "line-through" : "none",
																	color: checked[key] ? "text.disabled" : "text.primary",
																}}
															/>
														</ListItemButton>
													</ListItem>
												);
											})}
										</List>
										{i < list.categories.length - 1 && <Divider sx={{ mt: 1 }} />}
									</div>
								);
							})}
						</AccordionDetails>
					</Accordion>
				))}
			</AccordionDetails>
		</Accordion>
	);
}
