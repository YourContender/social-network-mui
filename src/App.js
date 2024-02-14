import Button from "@mui/material/Button";
import { Add, Settings } from "@mui/icons-material";
import { Box, Container, Stack, Typography, styled } from "@mui/material";
import { Sidebar } from "./components/Sidebar";
import { Feed } from "./components/Feed";
import { Rightbar } from "./components/Rightbar";
import { Navbar } from "./components/Navbar";

const App = () => {
	return (
		<Box>
			<Navbar />
			<Stack direction="row" spacing={2} justifyContent="space-between">
				<Sidebar />
				<Feed />
				<Rightbar />
			</Stack>
		</Box>
	);
};

export default App;