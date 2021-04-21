import { AnyAction } from "redux";
import { POST_MESSAGE } from "../types";
import Router from "next/router";
import { checkTime } from "../../helpers/props";
import { stat } from "fs";

export type ChatProps = {
	text: string;
	time: string;
	isMine: boolean;
};

export type ConversationItemProps = {
	id: number;
	userId: number;
	chatList: ChatProps[];
};

const conversationData: ConversationItemProps[] = [
	{
		id: 1,
		userId: 1,
		chatList: [
			{
				text: "Hi there",
				time: "00:33",
				isMine: false,
			},
		],
	},
	{
		id: 2,
		userId: 2,
		chatList: [
			{
				text: "Hi there",
				time: "00:33",
				isMine: false,
			},
		],
	},
	{
		id: 3,
		userId: 3,
		chatList: [
			{
				text: "Hi there",
				time: "00:33",
				isMine: false,
			},
		],
	},
	{
		id: 4,
		userId: 4,
		chatList: [
			{
				text: "Hi there",
				time: "00:33",
				isMine: false,
			},
		],
	},
	{
		id: 5,
		userId: 5,
		chatList: [
			{
				text: "Hi there",
				time: "00:33",
				isMine: false,
			},
		],
	},
];

export const conversationReducer = (
	state = { list: conversationData, bool: false },
	action: AnyAction
) => {
	switch (action.type) {
		case POST_MESSAGE:
			return action.data;

		default:
			return state;
	}
};
