import React from "react";
import { Button, Image, Text, TouchableOpacity, View } from "react-native";
import { typography } from "../theme/typography";

const UniversalNavigationHeader = ({
	title = "",
	onPressBack = () => {},
	containerStyle = {},
	backIconStyle = {},
	titleStyle = {},
	...props
}) => {
	return (
		<View
			style={[
				{ flexDirection: "row", alignItems: "center" },
				containerStyle,
			]}>
			<TouchableOpacity onPress={onPressBack}>
				<Image
					source={require("../assets/Images/leftArrow/leftArrow.png")}
					style={[
						{
							height: 30,
							width: 30,
							resizeMode: "contain",
							marginHorizontal: 10,
						},
						backIconStyle,
					]}
				/>
			</TouchableOpacity>
			<Text
				style={[
					{
						marginLeft: 40,
						color: "white",
						fontSize: 20,
						fontFamily: typography.secondary,
					},
					titleStyle,
				]}>
				{title}
			</Text>
		</View>
	);
};

export default UniversalNavigationHeader;
