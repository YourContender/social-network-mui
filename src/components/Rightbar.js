import React from "react";
import {
	Avatar,
	List,
	ListItem,
	AvatarGroup,
	Box,
	Divider,
	ImageList,
	ListItemText,
	ListItemAvatar,
	ImageListItem,
	Typography,
} from "@mui/material";

export const Rightbar = () => {
	return (
		<Box flex={2} p={2} sx={{ display: { xs: "none", sm: "block" } }}>
			<Box sx={{ position: "fixed", mt: 7, width: 400 }}>
				<Typography variant="h6">Online users:</Typography>
				<AvatarGroup max={5}>
					<Avatar
						alt="Remy Sharp"
						src="https://img.rasset.ie/001cd1c7-614.jpg?ratio=0.8"
					/>
					<Avatar
						alt="Travis Howard"
						src="https://cdn.shopify.com/s/files/1/0013/3450/9664/files/elite-sports-team-elite-BJJ-James-Martin-Big-4.jpg?210"
					/>
					<Avatar
						alt="Cindy Baker"
						src="https://m.media-amazon.com/images/I/61DdcXYToPL.jpg"
					/>
					<Avatar
						alt="Agnes Walker"
						src="https://m.media-amazon.com/images/I/81lyCYgzMnL._SY679_.jpg"
					/>
					<Avatar
						alt="Trevor Henderson"
						src="https://www.wearehumen.org/wp-content/uploads/2021/11/HUMEN-Tee-_-CYRIL-.png"
					/>
				</AvatarGroup>
				<Typography variant="h6" sx={{ mt: 2 }}>
					Latest photos:
				</Typography>
				<ImageList cols={2}>
					<ImageListItem>
						<img
							src="https://roycestars.com/wp-content/uploads/2015_subaru_wrx-sti_roycestars_kiev.jpg"
							alt=""
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/b/b7/2015_Subaru_WRX_%28VAG_MY15%29_Premium_sedan_%282015-07-15%29_01.jpg"
							alt=""
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/b/b2/2018_Subaru_WRX_STI_Type-RA_in_World_Rally_Blue_Pearl%2C_Front_Left%2C_07-13-2022.jpg"
							alt=""
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://kimuracars.com/ifiles/news/677/subaru-wrx-sti-2015-1.jpg"
							alt=""
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://cimg0.ibsrv.net/ibimg/hgm/1920x1080-1/100/716/subaru-wrx_100716404.jpg"
							alt=""
						/>
					</ImageListItem>
					<ImageListItem>
						<img
							src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Subaru_Impreza_WRX_STI_-_Blue_%28cropped%29.jpg/1200px-Subaru_Impreza_WRX_STI_-_Blue_%28cropped%29.jpg"
							alt=""
						/>
					</ImageListItem>
				</ImageList>
				<Typography variant="h6" sx={{ mt: 2 }}>
					Latest conversations:
				</Typography>
				<Box>
					<List
						sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
					>
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar
									alt="Remy Sharp"
									src="https://m.media-amazon.com/images/I/81lyCYgzMnL._SY679_.jpg"
								/>
							</ListItemAvatar>
							<ListItemText
								primary="Brunch this weekend?"
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											Ali Connors
										</Typography>
										{" — I'll be in your neighborhood doing errands this…"}
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar
									alt="Travis Howard"
									src="https://www.wearehumen.org/wp-content/uploads/2021/11/HUMEN-Tee-_-CYRIL-.png"
								/>
							</ListItemAvatar>
							<ListItemText
								primary="Summer BBQ"
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											to Scott, Alex, Jennifer
										</Typography>
										{" — Wish I could come, but I'm out of town this…"}
									</React.Fragment>
								}
							/>
						</ListItem>
						<Divider variant="inset" component="li" />
						<ListItem alignItems="flex-start">
							<ListItemAvatar>
								<Avatar
									alt="Cindy Baker"
									src="https://img.rasset.ie/001cd1c7-614.jpg?ratio=0.8"
								/>
							</ListItemAvatar>
							<ListItemText
								primary="Oui Oui"
								secondary={
									<React.Fragment>
										<Typography
											sx={{ display: "inline" }}
											component="span"
											variant="body2"
											color="text.primary"
										>
											Sandra Adams
										</Typography>
										{" — Do you have Paris recommendations? Have you ever…"}
									</React.Fragment>
								}
							/>
						</ListItem>
					</List>
				</Box>
			</Box>
		</Box>
	);
};
