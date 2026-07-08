import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
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

const SPICE_KEYWORDS = [
	"cumin",
	"chili powder",
	"turmeric",
	"paprika",
	"cinnamon",
	"salt",
	"pepper",
	"oregano",
	"italian seasoning",
	"everything bagel seasoning",
	"sriracha",
	"hot sauce",
	"soy sauce",
	"sesame oil",
	"olive oil",
	"honey",
	"spices",
];

function mergeShoppingLists(shoppingLists) {
	const byCategory = {};

	for (const list of shoppingLists) {
		for (const cat of list.categories) {
			if (!byCategory[cat.name]) {
				byCategory[cat.name] = new Set();
			}
			const items = cat.items.split(",").map((s) => s.trim()).filter(Boolean);
			for (const item of items) {
				const lower = item.toLowerCase();
				const isSpice = SPICE_KEYWORDS.some((kw) => lower.includes(kw));
				if (!isSpice) {
					byCategory[cat.name].add(item);
				}
			}
		}
	}

	return Object.entries(byCategory).map(([name, items]) => ({
		name,
		items: [...items],
	}));
}

export default function CombinedShoppingList({ shoppingLists }) {
	const categories = mergeShoppingLists(shoppingLists);
	const [checked, setChecked] = useState({});

	const toggleItem = (item) => {
		setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
	};

	return (
		<Accordion>
			<AccordionSummary expandIcon={<ExpandMoreIcon />}>
				<ShoppingCartCheckoutIcon sx={{ mr: 1, color: "info.main" }} />
				<Typography variant="h6" fontWeight={700}>
					Combined Shopping List
				</Typography>
			</AccordionSummary>
			<AccordionDetails>
				{categories.map((cat, i) => (
					<div key={cat.name}>
						<Chip label={cat.name} color="primary" size="small" sx={{ mb: 1, mt: i > 0 ? 1 : 0 }} />
						<List dense disablePadding>
							{cat.items.map((item) => (
								<ListItem key={item} disablePadding>
									<ListItemButton dense onClick={() => toggleItem(item)}>
										<ListItemIcon sx={{ minWidth: 36 }}>
											<Checkbox
												edge="start"
												checked={!!checked[item]}
												tabIndex={-1}
												disableRipple
												size="small"
											/>
										</ListItemIcon>
										<ListItemText
											primary={item}
											sx={{
												textDecoration: checked[item] ? "line-through" : "none",
												color: checked[item] ? "text.disabled" : "text.primary",
											}}
										/>
									</ListItemButton>
								</ListItem>
							))}
						</List>
						{i < categories.length - 1 && <Divider sx={{ mt: 1 }} />}
					</div>
				))}
			</AccordionDetails>
		</Accordion>
	);
}
