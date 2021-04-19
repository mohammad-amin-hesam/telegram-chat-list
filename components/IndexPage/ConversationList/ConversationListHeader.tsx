import React from "react";
import ConversationModal from "./ContactModal";
import { StyledConversationListHeader } from "../IndexStyles/IndexStyle";
import { AiFillContacts } from "react-icons/ai";
import { theme } from "../../../pages/_app";

const ConversationListHeader: React.FC = () => {
	const [open, setOpen] = React.useState<boolean>(false);

	return (
		<>
			<StyledConversationListHeader>
				<div className="contact-button" onClick={() => setOpen(!open)}>
					<AiFillContacts
						size={28}
						color={theme.colors.septenary}
						title={"Contacts"}
					/>
					<span className="contact-name">Contacts</span>
				</div>
			</StyledConversationListHeader>
			<ConversationModal handleClose={() => setOpen(false)} open={open} />
		</>
	);
};

export default ConversationListHeader;
