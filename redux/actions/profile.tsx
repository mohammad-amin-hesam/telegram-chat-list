import { Dispatch } from "redux";
import { SHOW_PROFILE } from "../types";

export const showProfile = (id) => (dispatch: Dispatch) => {
	dispatch({
		type: SHOW_PROFILE,
		id,
	});
};
