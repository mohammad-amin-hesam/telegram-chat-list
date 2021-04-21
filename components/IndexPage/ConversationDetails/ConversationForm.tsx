import React from "react";
import { useDispatch } from "react-redux";
import { StyledConversationForm } from "../IndexStyles/IndexStyle";
import { AiOutlineSend } from "react-icons/ai";
import { theme } from "../../../pages/_app";
import { useRouter } from "next/dist/client/router";
import { postMessage } from "../../../redux/actions/messages";

const ConversationForm: React.FC = () => {
	const input = React.useRef<HTMLInputElement>(null);
	const router = useRouter();
	const { conversation_id } = router.query;
	const [text, setText] = React.useState<string>("");
	const dispatch = useDispatch();

	const handleTextChange = React.useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			setText(e.target.value);
		},
		[text]
	);

	React.useEffect(() => {
		input.current?.focus();
	}, [conversation_id]);

	const handleMessage = React.useCallback(
		(e: React.FormEvent<HTMLFormElement>): void => {
			e.preventDefault();
			if (!text.trim()) return;
			dispatch(postMessage(text));
			setText("");
		},
		[text]
	);

	return (
		<StyledConversationForm onSubmit={handleMessage}>
			<input
				ref={input}
				value={text}
				onChange={handleTextChange}
				type="text"
				placeholder="Write a message..."
			/>
			<button type="submit">
				<AiOutlineSend size={30} color={theme.colors.secondary} />
			</button>
		</StyledConversationForm>
	);
};

export default ConversationForm;
