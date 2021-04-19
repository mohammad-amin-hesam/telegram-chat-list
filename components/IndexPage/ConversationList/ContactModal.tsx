import React from "react";
import ModalBox from "../../Reuse/ModalBox";

const ContactModal: React.FC<{
	handleClose: () => void;
	open: boolean;
}> = ({ handleClose, open }) => {
	if (!open) return null;

	return (
		<ModalBox title="Contacts" handleClose={handleClose} open={open}>
			Hi there
		</ModalBox>
	);
};

export default ContactModal;
