import React from "react";
import { StyledConversationForm } from "../IndexStyles/IndexStyle";
import { AiOutlineSend } from "react-icons/ai";
import { theme } from "../../../pages/_app";

const ConversationForm: React.FC = () => {
	const input = React.useRef<HTMLInputElement>(null);

	React.useEffect(() => {
		input.current?.focus();
	}, []);

	return (
		<StyledConversationForm>
			<input ref={input} type="text" placeholder="Write a message..." />
			<button>
				<AiOutlineSend size={30} color={theme.colors.secondary} />
			</button>
		</StyledConversationForm>
	);
};

export default ConversationForm;
