import React from "react";
import ConversationHeader from "./ConversationHeader";
import ConversationBox from "./ConversationBox";
import ConversationForm from "./ConversationForm";
import NoChat from "./NoChat";
import { StyledConversationDetails } from "../IndexStyles/IndexStyle";
import { useRouter } from "next/dist/client/router";

const ConversationDetails: React.FC = () => {
	const router = useRouter();
	const { conversation_id } = router.query;

	return (
		<StyledConversationDetails>
			{conversation_id ? (
				<>
					<ConversationHeader />
					<ConversationBox />
					<ConversationForm />
				</>
			) : (
				<NoChat />
			)}
		</StyledConversationDetails>
	);
};

export default ConversationDetails;
