import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import UniversalNavigationHeader from "../../common/UniversalNavigationHeader";
import { typography } from "../../theme/typography";

const ScoreScreenRed = (props) => {
	const topView = () => {
		return (
			<View style={{ alignItems: "center", width: "100%" }}>
				<UniversalNavigationHeader
					title=""
					onPressBack={() => props.navigation.goBack()}
					containerStyle={{ width: "100%" }}
					backIconStyle={{ tintColor: "white" }}
				/>
				<Text
					style={{
						alignSelf: "center",
						marginVertical: 20,
						color: "white",
						fontFamily: typography.primary,
					}}>
					CGT Won the toss and elected to bat
				</Text>
				<View
					style={{
						backgroundColor: "#fb7d7d",
						marginHorizontal: 30,
						padding: 20,
						borderRadius: 30,
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-between",
						width: "80%",
                  shadowColor: 'red',
                  shadowRadius: 30,
                  shadowOpacity: 1
					}}>
					<View>
						<Text
							style={{
								fontFamily: typography.secondary,
								color: "white",
								fontSize: 30,
								marginBottom: 2,
							}}>
							90/1
						</Text>
						<Text
							style={{
								fontFamily: typography.primary,
								color: "white",
								fontSize: 14,
							}}>
							3.5/5 Overs
						</Text>
					</View>

					<View>
						<Text
							style={{
								fontFamily: typography.secondary,
								color: "white",
								fontSize: 18,
								marginBottom: 10,
							}}>
							CGT
						</Text>
						<Text
							style={{
								fontFamily: typography.primary,
								color: "white",
								fontSize: 14,
							}}>
							CRR: 12:04
						</Text>
					</View>
				</View>

				<Text style={{ marginTop: 5, color: "white" }}>
					Extra 12, 0 (B O. LB O. WD O. NB O. P 0)
				</Text>

				<Text
					style={{
						marginTop: 50,
						color: "white",
						fontFamily: typography.secondary,
						fontSize: 18,
						marginBottom: 10,
					}}>
					AGT 124/4
				</Text>
				<LinearGradient
					colors={["#ee4242", "#f37777", "#ee4242"]}
					style={{
						flexDirection: "row",
						alignItems: "center",
						height: 70,
						width: "100%",
						justifyContent: "center",
					}}
					start={{ x: 0, y: 0 }}
					end={{ x: 1, y: 0 }}>
					{["1", "W", "4", "wd", "0", "6"].map((val) => {
						return (
							<View
								style={{
									padding: 10,
									borderRadius: 20,
									backgroundColor: "yellow",
									marginRight: 5,
									minHeight: 35,
									minWidth: 35,
									justifyContent: "center",
									alignItems: "center",
								}}>
								<Text style={{ color: "red" }}>{val}</Text>
							</View>
						);
					})}
				</LinearGradient>
				<Text
					style={{
						fontFamily: typography.primary,
						color: "white",
						fontSize: 15,
						marginTop: 10,
					}}>
					Fall of Wickets: 22-1, 39-2, 60-3
				</Text>
			</View>
		);
	};
	const tabButtons = () => {
		return (
			<View
				style={{
					flexDirection: "row",
					alignItems: "center",
					justifyContent: "space-around",
					width: "100%",
					marginTop: 20,
				}}>
				<Text
					style={{
						color: "white",
						fontFamily: typography.secondary,
						fontSize: 15,
					}}>
					Quick
				</Text>
				<Text
					style={{
						color: "white",
						fontFamily: typography.secondary,
						fontSize: 15,
					}}>
					Advanced
				</Text>
			</View>
		);
	};

	const buttonKeyboard = () => {
		return (
			<View
				style={{
					width: "100%",
					flexDirection: "row",
					flexWrap: "wrap",
					padding: 10,
				}}>
				{["0", "1", "2", "3", "4", "6", "WICKET", "WD", "UNDO"].map(
					(val) => {
						return (
							<TouchableOpacity
								activeOpacity={1}
								style={{
									padding: 10,
									backgroundColor: "#eaebec",
									borderRadius: 25,
									marginRight: 10,
									marginBottom: 10,
									width: "30%",
									alignItems: "center",
									justifyContent: "center",
									height: 50,
								}}>
								<Text
									style={{
										fontFamily: typography.secondary,
										fontSize: 18,
									}}>
									{val}
								</Text>
							</TouchableOpacity>
						);
					}
				)}
			</View>
		);
	};

	return (
		<LinearGradient
			style={{ flex: 1 }}
			colors={["#f75d5d", "#f04747", "#e82c2c"]}
			start={{ x: 0, y: 0 }}
			end={{ x: 0, y: 1 }}>
			<View
				style={{
					flex: 1,
					justifyContent: "space-between",
				}}>
				{topView()}
				<View style={{ width: "100%" }}>
					{tabButtons()}
					{buttonKeyboard()}
				</View>
			</View>
		</LinearGradient>
	);
};

export default ScoreScreenRed;
