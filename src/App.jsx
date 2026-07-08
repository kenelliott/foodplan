import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MealPlan from "./MealPlan";

const theme = createTheme({
	palette: {
		mode: "dark",
		primary: { main: "#7c4dff" },
		secondary: { main: "#00e5ff" },
		warning: { main: "#ffab40" },
		success: { main: "#69f0ae" },
		error: { main: "#ff5252" },
		background: {
			default: "#0e1117",
			paper: "#161b22",
		},
		text: {
			primary: "#e6edf3",
			secondary: "#8b949e",
			disabled: "#484f58",
		},
		divider: "#30363d",
	},
	shape: { borderRadius: 12 },
	typography: {
		fontFamily: "'Inter', system-ui, -apple-system, sans-serif",
		h3: { letterSpacing: "-0.02em" },
		h6: { letterSpacing: "-0.01em" },
	},
	components: {
		MuiAccordion: {
			styleOverrides: {
				root: {
					backgroundImage: "none",
					"&:before": { display: "none" },
				},
			},
		},
		MuiAccordionSummary: {
			styleOverrides: {
				root: {
					borderRadius: 12,
				},
			},
		},
		MuiPaper: {
			styleOverrides: {
				root: {
					backgroundImage: "none",
				},
			},
		},
		MuiTableCell: {
			styleOverrides: {
				root: {
					borderColor: "#30363d",
				},
			},
		},
		MuiChip: {
			styleOverrides: {
				root: {
					fontWeight: 600,
				},
			},
		},
		MuiAlert: {
			styleOverrides: {
				root: {
					borderRadius: 12,
				},
			},
		},
	},
});

function App() {
	return (
		<ThemeProvider theme={theme}>
			<CssBaseline />
			<MealPlan />
		</ThemeProvider>
	);
}

export default App;
