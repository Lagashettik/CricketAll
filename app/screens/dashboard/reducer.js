export const RESET_SCORECARD = "RESET_SCORECARD";
export const SET_TOTAL_WICKET = "SET_TOTAL_WICKET";
export const SET_TOTAL_BALLS = "SET_TOTAL_BALLS";
export const SET_LIVE_SCORE = "SET_LIVE_SCORE";
export const ADD_TO_LIVE_SCORE = "ADD_TO_LIVE_SCORE";
export const SET_TARGET = "SET_TARGET";
export const SET_TEAM_A_NAME = "SET_TEAM_A_NAME";
export const SET_TEAM_A_SHORT = "SET_TEAM_A_SHORT";
export const SET_TEAM_A_WICKET = "SET_TEAM_A_WICKET";
export const ADD_TO_TEAM_A_WICKET = "ADD_TO_TEAM_A_WICKET";
export const SET_TEAM_B_NAME = "SET_TEAM_B_NAME";
export const SET_TEAM_B_SHORT = "SET_TEAM_B_SHORT";
export const SET_TEAM_B_WICKET = "SET_TEAM_B_WICKET";
export const ADD_TO_TEAM_B_WICKET = "ADD_TO_TEAM_B_WICKET";

const initialState = {
	totalWicket: 10,
	totalBalls: 60,
	liveScore: 0,
	liveBalls: 0,
	target: 0,
	teamAName: "",
	teamBName: "",
	teamAShort: "",
	teamBShort: "",
	teamAWicket: 0,
	teamBWicket: 0,
};

export const scoreCardReducer = (state = initialState, action) => {
	let newState = { ...state };
	switch (action.type) {
		case SET_TOTAL_WICKET:
			newState.totalWicket = parseInt(action.payload);
			break;
		case SET_TOTAL_BALLS:
			newState.totalBalls = parseInt(action.payload);
			break;
		case SET_LIVE_SCORE:
			newState.liveScore = parseInt(action.payload);
			break;
		case ADD_TO_LIVE_SCORE:
			newState.liveScore =
				parseInt(newState.liveScore) + parseInt(action.payload);
			break;
		case SET_TARGET:
			newState.target = aparseInt(action.payload);
			break;
		case SET_TEAM_A_NAME:
			newState.teamAName = action.payload;
			break;
		case SET_TEAM_A_SHORT:
			newState.teamAShort = action.payload;
			break;
		case SET_TEAM_A_WICKET:
			newState.teamAWicket = parseInt(action.payload);
			break;
		case ADD_TO_TEAM_A_WICKET:
			newState.teamAWicket =
				parseInt(newState.teamAWicket) + parseInt(action.payload);
			break;
		case SET_TEAM_B_NAME:
			newState.teamBName = action.payload;
			break;
		case SET_TEAM_B_SHORT:
			newState.teamBShort = action.payload;
			break;
		case SET_TEAM_B_WICKET:
			newState.teamBWicket = parseInt(action.payload);
			break;
		case ADD_TO_TEAM_B_WICKET:
			newState.teamBWicket =
				parseInt(newState.teamBWicket) + parseInt(action.payload);
			break;
		case RESET_SCORECARD:
			newState = { ...initialState };
			break;
	}
	return newState;
};
