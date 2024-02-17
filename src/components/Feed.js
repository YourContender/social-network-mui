import React from "react";
import { Post } from "./Post";
import { Box, styled } from "@mui/material";

export const Feed = () => {
	const ContainerStyles = styled(Box)({
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	});

	return (
		<ContainerStyles position="relative" flex={4} p={2}>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</ContainerStyles>
	);
};
