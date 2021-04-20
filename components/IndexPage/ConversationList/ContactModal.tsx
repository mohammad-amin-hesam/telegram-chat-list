import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { showProfile } from "../../../redux/actions/profile";
import ModalBox from "../../Reuse/ModalBox";
import ConversationItem from "./ConversationItem";

const ContactModal: React.FC<{
	handleClose: () => void;
	open: boolean;
}> = ({ handleClose, open }) => {
	const { contacts } = useSelector((state) => state);

	const dispatch = useDispatch();

	const handleProfile = useCallback((id: number) => {
		handleClose();
		setTimeout(() => {
			dispatch(showProfile(id));
		}, 0);
	}, []);

	return (
		<ModalBox title="Contacts" handleClose={handleClose} open={open}>
			{contacts.map((item, index) => {
				return (
					<ConversationItem
						data={{
							id: item.id,
							avatar: item.avatar,
							name: item.name,
							description: "Last seen recently",
						}}
						key={`contact item ${index}`}
						onClick={() => handleProfile(item.id)}
					/>
				);
			})}
		</ModalBox>
	);
};

export default ContactModal;
