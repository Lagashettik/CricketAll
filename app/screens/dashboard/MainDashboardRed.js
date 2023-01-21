import React from "react";
import { Button, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { typography } from "../../theme/typography";

const MainDashboardRed = (props) => {
	return (
		<LinearGradient
			style={{ flex: 1 }}
			colors={["#f75d5d", "#f04747", "#e82c2c"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 1 }}>
			<View style={{ flex: 1 }}>
				<Text
					style={{
						color: "white",
						alignSelf: "center",
						marginTop: 10,
						fontSize: 15,
						fontFamily: typography.secondary,
					}}>
					Welcome to CricketAll
				</Text>
				<Button
					title="New Game"
					onPress={() => {
						props.navigation.navigate("ScoreScreenRed");
					}}
				/>
			</View>
		</LinearGradient>
	);
};

export default MainDashboardRed;
