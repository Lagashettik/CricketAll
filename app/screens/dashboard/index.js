import React from "react";
import { Text, View } from "react-native";
import { typography } from "../../theme/typography";

const MainDashboard = () => {
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
		</View>
	);
};

export default MainDashboard;
