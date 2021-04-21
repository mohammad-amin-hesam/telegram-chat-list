import Router from "next/router";
import { Dispatch } from "redux";
import { checkTime } from "../../helpers/props";
import { POST_MESSAGE } from "../types";

export const postMessage = (text: string, isMine: boolean = true) => (
	dispatch: Dispatch,
	getState
) => {
	const { conversation_id } = Router.query;
	let mirrorState = getState().conversations;

	if (!mirrorState) return;

	const conversation = mirrorState.list.filter(
		(item) => item.id === Number(conversation_id)
	)[0];
	const conversationIndex = mirrorState.list.indexOf(conversation);

	mirrorState.list[conversationIndex] = {
		...conversation,
		chatList: [
			...conversation.chatList,
			{
				isMine,
				text,
				time: `${checkTime(new Date().getHours())}:${checkTime(
					new Date().getMinutes()
				)}`,
			},
		],
	};

	mirrorState.bool = !mirrorState.bool;

	dispatch({
		type: POST_MESSAGE,
		data: { ...mirrorState },
	});
};
