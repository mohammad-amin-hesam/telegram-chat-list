import React from "react";
import { trunc } from "../../../helpers/props";
import { StyledConversationItem } from "../IndexStyles/IndexStyle";

const ConversationItem: React.FC = () => {
	return (
		<StyledConversationItem image="https://picsum.photos/200">
			<div className="conversation-image"></div>
			<div className="conversation-content">
				<div className="conversation-content-head">
					<h2 className="conversation-title">
						{trunc("Mohammad amin hesam", 26)}
					</h2>
					<span className="conversation-time">23:03</span>
				</div>
				<div className="conversation-content-body">
					<p>
						{trunc(
							"Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
							38
						)}
					</p>
				</div>
			</div>
		</StyledConversationItem>
	);
};

export default ConversationItem;
