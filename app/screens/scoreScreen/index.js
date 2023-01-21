import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import UniversalNavigationHeader from "../../common/UniversalNavigationHeader";
import { typography } from "../../theme/typography";

const ScoreScreen = (props) => {
	return (
		<View style={{ flex: 1 }}>
			<UniversalNavigationHeader
				onPressBack={() => props.navigation.goBack()}
			/>
		</View>
	);
};

export default ScoreScreen;
