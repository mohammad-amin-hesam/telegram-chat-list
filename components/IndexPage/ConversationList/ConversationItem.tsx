import React from "react";
import { trunc } from "../../../helpers/props";
import { StyledConversationItem } from "../IndexStyles/IndexStyle";

const ConversationItem: React.FC<{
	isActive?: boolean;
	data: {
		avatar: string;
		description?: string;
		name: string;
		time?: string;
		id?: string;
	};
	onClick: (...args: any[]) => any;
}> = ({ isActive, data, onClick }) => {
	const { avatar, description, name, time } = data;

	return (
		<React.Fragment>
			<StyledConversationItem
				image={avatar}
				isActive={isActive}
				onClick={onClick}
				description={description}
			>
				<div className="conversation-image"></div>
				<div className={`conversation-content ${time ? "hidden-content" : ""}`}>
					<div className="conversation-content-head">
						<h2 className="conversation-title">{trunc(name, 26)}</h2>
						{time && <span className="conversation-time">{time}</span>}
					</div>
					{description && (
						<div className="conversation-content-body">
							<p>{trunc(description, 38)}</p>
						</div>
					)}
				</div>
			</StyledConversationItem>
		</React.Fragment>
	);
};

export default ConversationItem;
