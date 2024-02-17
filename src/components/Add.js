import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import {
	Avatar,
	Button,
	ButtonGroup,
	Fab,
	Stack,
	TextField,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import styled from "@emotion/styled";
import {
	DateRange,
	EmojiEmotions,
	Image,
	PersonAdd,
	VideoCameraBack,
} from "@mui/icons-material";

const StyledModal = styled(Modal)({
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
});

const UserBox = styled(Box)({
	display: "flex",
	alignItems: "center",
	gap: "10px",
	mb: "20px",
	margin: "10px 20px",
});

export const Add = () => {
	const [openModal, setOpenModal] = useState(false);

	return (
		<>
			<Tooltip
				onClick={() => setOpenModal(true)}
				title="add new post"
				sx={{
					position: "fixed",
					bottom: "20px",
					left: { xs: "calc(50% - 25px)", md: 30 },
				}}
			>
				<Fab color="primary" aria-label="add">
					<AddIcon />
				</Fab>
			</Tooltip>
			<StyledModal
				open={openModal}
				onClose={() => setOpenModal(false)}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
			>
				<Box
					width={400}
					height={280}
					bgcolor={"background.default"}
					color={"text.primary"}
					borderRadius={5}
					padding={2}
				>
					<Typography variant="h6" color="gray" textAlign="center">
						Hello world
					</Typography>
					<UserBox>
						<Avatar
							alt="Remy Sharp"
							src="https://img.rasset.ie/001cd1c7-614.jpg?ratio=0.8"
						/>
						<Typography>Remy Sharp</Typography>
					</UserBox>
					<TextField
						sx={{ width: "100%" }}
						id="standard-multiline-static"
						multiline
						rows={3}
						placeholder="what`s on your mind?"
						variant="standard"
					/>
					<Stack direction="row" gap={1} mt={2} mb={3}>
						<EmojiEmotions color="primary" />
						<Image color="secondary" />
						<VideoCameraBack color="success" />
						<PersonAdd color="error" />
					</Stack>
					<ButtonGroup
						fullWidth
						variant="contained"
						aria-label="Basic button group"
					>
						<Button>Post</Button>
						<Button sx={{ width: "100px" }}>
							<DateRange />
						</Button>
					</ButtonGroup>
				</Box>
			</StyledModal>
		</>
	);
};
