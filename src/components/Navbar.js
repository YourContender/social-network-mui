import styled from "@emotion/styled";
import {
	AppBar,
	Avatar,
	Badge,
	Box,
	InputBase,
	Menu,
	MenuItem,
	Toolbar,
	Typography,
} from "@mui/material";
import React, { useState } from "react";
import DirectionsBoatFilledIcon from "@mui/icons-material/DirectionsBoatFilled";
import { Mail, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
	display: "flex",
	justifyContent: "space-between",
});

const Search = styled("div")(({ theme }) => ({
	backgroundColor: "white",
	padding: "0 10px",
	borderRadius: theme.shape.borderRadius,
	width: "40%",
}));

const Icons = styled(Box)(({ theme }) => ({
	display: "none",
	alignItems: "center",
	gap: "20px",
	[theme.breakpoints.up("sm")]: {
		display: "flex",
	},
}));

const UserBox = styled(Box)(({ theme }) => ({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	[theme.breakpoints.up("sm")]: {
		display: "none",
	},
}));

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	return (
		<AppBar position="fixed">
			<StyledToolbar>
				<Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
					Auto Club
				</Typography>
				<DirectionsBoatFilledIcon
					sx={{ display: { xs: "block", sm: "none" } }}
				/>
				<Search>
					<InputBase placeholder="search" />
				</Search>
				<Icons>
					<Badge badgeContent={4} color="error">
						<Mail color="white" />
					</Badge>
					<Badge badgeContent={4} color="error">
						<Notifications color="white" />
					</Badge>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://avatars.githubusercontent.com/u/79317536?v=4"
						onClick={() => setOpen(true)}
					/>
				</Icons>
				<UserBox>
					<Avatar
						sx={{ width: 30, height: 30 }}
						src="https://avatars.githubusercontent.com/u/79317536?v=4"
						onClick={() => setOpen(true)}
					/>
					<Typography variant="span">John</Typography>
				</UserBox>
			</StyledToolbar>
			<Menu
				id="demo-positioned-menu"
				aria-labelledby="demo-positioned-button"
				open={open}
				onClose={() => setOpen(false)}
				anchorOrigin={{
					vertical: "top",
					horizontal: "right",
				}}
				transformOrigin={{
					vertical: "top",
					horizontal: "left",
				}}
			>
				<MenuItem>Profile</MenuItem>
				<MenuItem>My account</MenuItem>
				<MenuItem>Logout</MenuItem>
			</Menu>
		</AppBar>
	);
};
