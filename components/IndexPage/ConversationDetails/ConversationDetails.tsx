import React from "react";
import { StyledConversationDetails } from "../IndexStyles/IndexStyle";
import ConversationBox from "./ConversationBox";
import ConversationForm from "./ConversationForm";
import NoChat from "./NoChat";

const ConversationDetails: React.FC = () => {
	return (
		<StyledConversationDetails>
			{/* <NoChat /> */}
			<ConversationBox />
			<ConversationForm />
		</StyledConversationDetails>
	);
};

export default ConversationDetails;
