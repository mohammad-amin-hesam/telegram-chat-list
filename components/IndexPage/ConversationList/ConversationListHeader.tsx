import React from "react";
import ContactModal from "./ContactModal";
import { StyledConversationListHeader } from "../IndexStyles/IndexStyle";
import { AiFillContacts, AiFillMessage } from "react-icons/ai";
import { theme } from "../../../pages/_app";

const ConversationListHeader: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(true);

	return (
		<>
			<StyledConversationListHeader>
				<div className="contact-button contact-button-hidden">
					<AiFillMessage size={28} color={theme.colors.tertiary} />
					<span className="contact-name">Conversations</span>
				</div>
				<div className="contact-button">
					<AiFillContacts
						size={28}
						color={theme.colors.septenary}
						title={"Contacts"}
						cursor="pointer"
						onClick={() => setOpen(!open)}
					/>
				</div>
			</StyledConversationListHeader>
			<ContactModal handleClose={() => setOpen(false)} open={open} />
		</>
	);
};

export default ConversationListHeader;
