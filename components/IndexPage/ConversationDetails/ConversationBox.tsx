import { useRouter } from "next/dist/client/router";
import React from "react";
import { useSelector } from "react-redux";
import { ConversationItemProps } from "../../../redux/reducer/conversationReducer";
import {
	StyledChatItem,
	StyledConversationBox,
} from "../IndexStyles/IndexStyle";

const ConversationBox: React.FC = () => {
	const { conversations } = useSelector((state) => state);
	const router = useRouter();
	const { conversation_id } = router.query;
	const box = React.useRef<HTMLDivElement>(null);
	const conversation: ConversationItemProps = conversations.list.filter(
		(item) => item.id === Number(conversation_id)
	)[0];

	React.useEffect(() => {
		box.current.scrollTop = box.current?.scrollHeight;
	}, [conversations]);

	return (
		<>
			<input type="hidden" value={conversations.bool} />
			<StyledConversationBox ref={box}>
				<div className="fix-item"></div>
				{conversation?.chatList.map((item, index) => {
					return (
						<StyledChatItem isMine={item.isMine} key={`cnvsnItem${index}`}>
							<p>{item.text}</p>
							<span className="chat-item-time">{item.time}</span>
						</StyledChatItem>
					);
				})}
			</StyledConversationBox>
		</>
	);
};

export default ConversationBox;
