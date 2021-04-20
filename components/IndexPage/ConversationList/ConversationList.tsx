import React from "react";
import ConversationItem from "./ConversationItem";
import { StyledConversationList } from "../IndexStyles/IndexStyle";
import { conversationData } from "../../../redux/reducer/conversationReducer";
import ConversationListHeader from "./ConversationListHeader";
import { useRouter } from "next/dist/client/router";

const ConversationList: React.FC = () => {
	const router = useRouter();
	const { conversation_id } = router.query;

	const navigate = (id: number): void => {
		router.replace(`/?conversation_id=${id}`);
	};

	return (
		<StyledConversationList>
			<ConversationListHeader />
			<div className="conversation-list-content">
				{conversationData.map((item, index) => {
					return (
						<ConversationItem
							key={`${item.name}${index}`}
							data={item}
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
