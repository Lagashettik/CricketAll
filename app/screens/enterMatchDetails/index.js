import React, { useState } from "react";
import { Button, Keyboard, Text, TextInput, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import UniversalNavigationHeader from "../../common/UniversalNavigationHeader";
import { colors } from "../../theme/colors";
import { typography } from "../../theme/typography";
import {
	SET_TEAM_A_NAME,
	SET_TEAM_A_SHORT,
	SET_TEAM_B_NAME,
	SET_TEAM_B_SHORT,
	SET_TOTAL_BALLS,
	SET_TOTAL_WICKET,
} from "../dashboard/reducer";

const EnterMatchDetails = (props) => {
	const dispatch = useDispatch();
	const teamAName = useSelector((state) => state.scoreCardReducer.teamAName);
	const teamAShort = useSelector((state) => state.scoreCardReducer.teamAShort);
	const teamBName = useSelector((state) => state.scoreCardReducer.teamBName);
	const teamBShort = useSelector((state) => state.scoreCardReducer.teamBShort);
	const totalWicket = useSelector(
		(state) => state.scoreCardReducer.totalWicket
	);

	const [overs, setOvers] = useState("");
	const [wicketError, setWicketError] = useState("");
	const [overError, setOverError] = useState("");
	const [teamASelected, setTeamASelected] = useState(true);
	const [headSelected, setHeadSelected] = useState(true);

	const validateAllFields = () => {
		let error = false;
		if (!teamAName) {
			dispatch({ type: SET_TEAM_A_NAME, payload: "Team A" });
		}
		if (!teamAShort) {
			dispatch({ type: SET_TEAM_A_SHORT, payload: "Team A" });
		}
		if (!teamBName) {
			dispatch({ type: SET_TEAM_B_NAME, payload: "Team B" });
		}
		if (!teamBShort) {
			dispatch({ type: SET_TEAM_B_SHORT, payload: "Team B" });
		}
		setWicketError(!totalWicket ? "Enter Valid Wickets" : "");
		!totalWicket && (error = true);
		setOverError(!overs ? "Enter Valid Overs" : "");
		!overs && (error = true);

		return error;
	};

	const detailsInputField = ({
		title = "",
		placeholder = "",
		value = "",
		onChangeValue = () => {},
		containerStyle = {},
		titleStyle = {},
		textInputStyle = {},
		keyboardType = "default",
		error = "",
	}) => {
		return (
			<View style={[{ marginBottom: 10 }, containerStyle]}>
				<Text
					style={[
						{
							fontSize: 15,
							fontFamily: typography.primary,
							marginBottom: 10,
						},
						titleStyle,
					]}>
					{title}
				</Text>
				<TextInput
					value={value}
					placeholder={placeholder}
					onChangeText={(text) => {
						onChangeValue(text);
					}}
					keyboardType={keyboardType}
					style={[
						{
							borderWidth: 1,
							padding: 10,
							borderRadius: 5,
							borderColor: "#b8b8b8",
						},
						textInputStyle,
					]}
				/>
				{error?.length > 0 && (
					<Text style={{ fontSize: 12, marginTop: 5, color: "red" }}>
						{error}
					</Text>
				)}
			</View>
		);
	};

	const detailsCard = () => {
		return (
			<>
				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					{detailsInputField({
						value: teamAName,
						title: "Team A Name",
						placeholder: "Enter Team Name",
						containerStyle: { flex: 2, marginRight: 10 },
						onChangeValue: (text) =>
							dispatch({ type: SET_TEAM_A_NAME, payload: text }),
					})}

					{detailsInputField({
						value: teamAShort,
						title: "Team A Short",
						placeholder: "Enter Team Short",
						containerStyle: { flex: 1.5 },
						onChangeValue: (text) =>
							dispatch({
								type: SET_TEAM_A_SHORT,
								payload: text?.toUpperCase(),
							}),
					})}
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					{detailsInputField({
						value: teamBName,
						title: "Team B Name",
						placeholder: "Enter Team Name",
						containerStyle: { flex: 2, marginRight: 10 },
						onChangeValue: (text) =>
							dispatch({ type: SET_TEAM_B_NAME, payload: text }),
					})}

					{detailsInputField({
						value: teamBShort,
						title: "Team B Short",
						placeholder: "Enter Team Short",
						containerStyle: { flex: 1.5 },
						onChangeValue: (text) =>
							dispatch({
								type: SET_TEAM_B_SHORT,
								payload: text?.toUpperCase(),
							}),
					})}
				</View>

				<View
					style={{
						flexDirection: "row",
						justifyContent: "space-between",
					}}>
					{detailsInputField({
						value: totalWicket,
						title: "Total Wickets",
						placeholder: "Enter Total Wickets",
						containerStyle: { flex: 2, marginRight: 10 },
						keyboardType: "number-pad",
						error: wicketError,
						onChangeValue: (text) =>
							dispatch({
								type: SET_TOTAL_WICKET,
								payload: parseInt(text),
							}),
					})}

					{detailsInputField({
						value: overs,
						title: "Total Overs",
						placeholder: "Enter Total Overs",
						containerStyle: { flex: 1.5 },
						keyboardType: "number-pad",
						error: overError,
						onChangeValue: (text) => {
							setOvers(parseInt(text));
							dispatch({
								type: SET_TOTAL_BALLS,
								payload: parseInt(text) * 6,
							});
						},
					})}
				</View>
			</>
		);
	};

	const radioButton = (isSelected = false) => {
		return (
			<View
				style={{
					height: 16,
					width: 16,
					borderRadius: 8,
					borderWidth: 1,
					justifyContent: "center",
					alignItems: "center",
				}}>
				<View
					style={{
						height: 10,
						width: 10,
						borderRadius: 5,
						backgroundColor: isSelected ? "blue" : colors.white,
					}}
				/>
			</View>
		);
	};

	const tossView = () => {
		return (
			<View
				style={{
					backgroundColor: colors.white,
					padding: 10,
					borderRadius: 5,
					marginHorizontal: 10,
					marginTop: 10,
				}}>
				<Text>Choose Team & Option For Toss</Text>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-around",
					}}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginVertical: 10,
						}}
						onStartShouldSetResponder={() => {
							setTeamASelected(true);
							return true;
						}}>
						{radioButton(teamASelected)}
						<Text style={{ marginLeft: 10 }}>Team A</Text>
					</View>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
						onStartShouldSetResponder={() => {
							setTeamASelected(false);
							return true;
						}}>
						{radioButton(!teamASelected)}
						<Text style={{ marginLeft: 10 }}>Team B</Text>
					</View>
				</View>
				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "space-around",
					}}>
					<View
						style={{
							flexDirection: "row",
							alignItems: "center",
							marginVertical: 10,
						}}
						onStartShouldSetResponder={() => {
							setHeadSelected(true);
							return true;
						}}>
						{radioButton(headSelected)}
						<Text style={{ marginLeft: 10 }}>Head</Text>
					</View>
					<View
						style={{ flexDirection: "row", alignItems: "center" }}
						onStartShouldSetResponder={() => {
							setHeadSelected(false);
							return true;
						}}>
						{radioButton(!headSelected)}
						<Text style={{ marginLeft: 10 }}>Tail</Text>
					</View>
				</View>
				<Button
					title="Toss"
					onPress={() => {
						let arr = [];
						let val = headSelected
						let inteval = setInterval(() => {
							val = !val
							setHeadSelected(!val);
						}, 200);
						for (let i = 0; i < 100000; i++) {
							let value = Math.round(Math.random() * 100000);
							arr.push(value);
						}
						setTimeout(() => {
							clearInterval(inteval);
							let even = arr.filter((val) => val % 2 == 0).length;
							let odd = arr.filter((val) => val % 2 != 0).length;
							setHeadSelected(even > odd);
						}, 2000);
					}}
				/>
			</View>
		);
	};

	return (
		<View
			style={{ flex: 1 }}
			onStartShouldSetResponder={() => {
				Keyboard.dismiss();
				return true;
			}}>
			<View style={{ marginVertical: 10 }}>
				<UniversalNavigationHeader
					title="Enter Match Details"
					titleStyle={{
						fontSize: 20,
						fontFamily: typography.primary,
						color: "black",
					}}
					onPressBack={() => props.navigation.goBack()}
				/>
			</View>

			<View
				style={{
					backgroundColor: colors.white,
					padding: 10,
					borderRadius: 5,
					marginHorizontal: 10,
				}}>
				{detailsCard()}
			</View>

			{tossView()}

			<Button
				title="Save"
				onPress={() => {
					if (validateAllFields()) {
						console.log("AllValid");
					}
				}}
			/>
		</View>
	);
};

export default EnterMatchDetails;
