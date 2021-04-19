import React from "react";
import {
	StyledChatItem,
	StyledConversationBox,
} from "../IndexStyles/IndexStyle";

const ConversationBox: React.FC = () => {
	return (
		<StyledConversationBox>
			<StyledChatItem>
				<p>
					Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque nemo
					asperiores perferendis ullam eveniet in quas neque. Doloribus
					consequatur atque nemo voluptates accusamus molestiae rerum, sint quo,
					hic velit eveniet.
				</p>
				<span className="chat-item-time">23:17</span>
			</StyledChatItem>
			<StyledChatItem isMine>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, velit?
				</p>
				<span className="chat-item-time">23:17</span>
			</StyledChatItem>
			<StyledChatItem>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro officia
					eveniet tempore consequuntur expedita, repudiandae possimus incidunt
					alias debitis cum?
				</p>
				<span className="chat-item-time">23:17</span>
			</StyledChatItem>
		</StyledConversationBox>
	);
};

export default ConversationBox;
