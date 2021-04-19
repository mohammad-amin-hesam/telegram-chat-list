import React from "react";
import { trunc } from "../../../helpers/props";
import { StyledConversationItem } from "../IndexStyles/IndexStyle";
import Link from "next/link";
import { ConversationItemProps } from "../../data/data";

const ConversationItem: React.FC<{
	isActive?: boolean;
	data: ConversationItemProps;
}> = ({ isActive, data }) => {
	const { avatar, description, name, time, id } = data;

	return (
		<Link href={{ pathname: "/", query: { conversation_id: id } }}>
			<React.Fragment>
				<StyledConversationItem image={avatar} isActive={isActive}>
					<div className="conversation-image"></div>
					<div className="conversation-content">
						<div className="conversation-content-head">
							<h2 className="conversation-title">{trunc(name, 26)}</h2>
							<span className="conversation-time">{time}</span>
						</div>
						<div className="conversation-content-body">
							<p>{trunc(description, 38)}</p>
						</div>
					</div>
				</StyledConversationItem>
			</React.Fragment>
		</Link>
	);
};

export default ConversationItem;
