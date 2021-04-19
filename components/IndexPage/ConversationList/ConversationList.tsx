import React from "react";
import ConversationItem from "./ConversationItem";
import { StyledConversationList } from "../IndexStyles/IndexStyle";
import { conversationData } from "../../data/data";
import ConversationListHeader from "./ConversationListHeader";

const ConversationList: React.FC = () => {
	return (
		<StyledConversationList>
			<ConversationListHeader />
			<div className="conversation-list-content">
				{conversationData.map((item, index) => {
					return <ConversationItem key={index} data={item} />;
				})}
			</div>
		</StyledConversationList>
	);
};

export default ConversationList;
