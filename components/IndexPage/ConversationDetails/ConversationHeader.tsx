import React from "react";
import { StyledConversationHeader } from "../IndexStyles/IndexStyle";

const ConversationHeader: React.FC = () => {
	return (
		<StyledConversationHeader>
			<div className="user-name">
				<h4>Mohammad amin hesam</h4>
				<span className="online-text">online</span>
			</div>
		</StyledConversationHeader>
	);
};

export default ConversationHeader;
