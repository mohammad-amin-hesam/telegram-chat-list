import { uniq_id } from "../../helpers/props";

export type ChatItemProps = {
	id: number;
	text: string;
	time: string;
};

const initialChatState: ChatItemProps[] = [];

export const chats = (state: ChatItemProps[] = initialChatState, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
