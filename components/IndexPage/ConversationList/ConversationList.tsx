import React from "react";
import ConversationItem from "./ConversationItem";
import { StyledConversationList } from "../IndexStyles/IndexStyle";

const ConversationList: React.FC = () => {
	return (
		<StyledConversationList>
			<ConversationItem />
			<ConversationItem />
			<ConversationItem />
			<ConversationItem />
			<ConversationItem />
			<ConversationItem />
		</StyledConversationList>
	);
};

export default ConversationList;
