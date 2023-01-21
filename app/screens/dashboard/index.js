import React from "react";
import { Button, Text, View } from "react-native";
import { typography } from "../../theme/typography";

const MainDashboard = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<Text
				style={{
					color: "red",
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
					props.navigation.navigate("EnterMatchDetails");
				}}
			/>
		</View>
	);
};

export default MainDashboard;
