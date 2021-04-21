import React from "react";
import { StyledConversationHeader } from "../IndexStyles/IndexStyle";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/dist/client/router";
import { showProfile } from "../../../redux/actions/profile";
import { postMessage } from "../../../redux/actions/messages";
import faker from "faker";

const ConversationHeader: React.FC = () => {
	const router = useRouter();
	const dispatch = useDispatch();
	const { conversation_id } = router.query;
	const { contacts, conversations } = useSelector((state) => state);
	const [status, setStatus] = React.useState<string>("online");
	const conversation = conversations.list.filter(
		(item) => item.id === Number(conversation_id)
	)[0];

	const user = contacts.filter(
		(item) => item.conversationId === Number(conversation_id)
	)[0];

	React.useEffect(() => {
		if (conversation) {
			if (conversation.chatList[conversation.chatList.length - 1].isMine) {
				setStatus("typing...");
				setTimeout(() => {
					dispatch(postMessage(faker.lorem.text(), false));
					setStatus("online");
				}, 2000);
			}
		}
	}, [conversations]);

	return (
		<StyledConversationHeader onClick={() => dispatch(showProfile(user.id))}>
			<div className="user-name">
				<h4>{user?.name}</h4>
				<span className="online-text">{status}</span>
			</div>
		</StyledConversationHeader>
	);
};

export default ConversationHeader;
