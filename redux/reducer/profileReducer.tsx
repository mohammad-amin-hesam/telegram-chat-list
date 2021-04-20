import { AnyAction } from "redux";
import { SHOW_PROFILE } from "../types";

export const profileReducer = (state: number = -1, action: AnyAction) => {
	switch (action.type) {
		case SHOW_PROFILE:
			return action.id;

		default:
			return state;
	}
};
