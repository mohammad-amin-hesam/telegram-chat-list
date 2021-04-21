import React from "react";
import { useSelector } from "react-redux";
import ConversationItem from "./ConversationItem";
import { StyledConversationList } from "../IndexStyles/IndexStyle";
import ConversationListHeader from "./ConversationListHeader";
import { useRouter } from "next/dist/client/router";

const ConversationList: React.FC = () => {
	const router = useRouter();
	const { conversation_id } = router.query;

	const { conversations, contacts } = useSelector((state) => state);

	const navigate = (id: number): void => {
		router.replace(`/?conversation_id=${id}`);
	};

	return (
		<StyledConversationList>
			<ConversationListHeader />
			<div className="conversation-list-content">
				{conversations.list.map((item, index) => {
					const user = contacts.filter(
						(contact) => contact.id === item.userId
					)[0];

					return (
						<ConversationItem
							key={`${item.name}${index}`}
							data={{
								name: user?.name,
								description: item.chatList[item.chatList.length - 1].text,
								avatar: user?.avatar,
								id: item.id,
								time: item.chatList[item.chatList.length - 1].time,
							}}
							isActive={item.id === Number(conversation_id)}
							onClick={() => navigate(item.id)}
						/>
					);
				})}
			</div>
		</StyledConversationList>
	);
};

export default ConversationList;
