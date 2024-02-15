import React from "react";
import { Post } from "./Post";
import { Box } from "@mui/material";

export const Feed = () => {
	return (
		<Box position="relative" flex={4} p={2}>
			<Post />
			<Post />
			<Post />
			<Post />
			<Post />
		</Box>
	);
};
