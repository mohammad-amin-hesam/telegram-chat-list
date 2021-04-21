import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProfile } from "../../../redux/actions/profile";
import { ContactProps } from "../../../redux/reducer/contactsReducer";
import { StyledProfileInfo } from "../IndexStyles/IndexStyle";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { theme } from "../../../pages/_app";
import { useRouter } from "next/dist/client/router";

const NameDescription: React.FC<{
	name: string;
	label: string;
	weight: "bold" | "light";
}> = ({ name, label, weight }) => {
	return (
		<div className={`profile-header-content profile-${weight}`}>
			<div className="profile-name">{name}</div>
			<span className="profile-status">{label}</span>
		</div>
	);
};

const ProfileInfo: React.FC<{
	handleClose: (...args: any[]) => any;
}> = ({ handleClose }) => {
	const { profileId, contacts } = useSelector((state) => state);
	const router = useRouter();
	const user: ContactProps = contacts.filter(
		(item) => item.id === profileId
	)[0];

	const handleSendMessage = (): void => {
		handleClose();
		router.push(`/?conversation_id=${user.conversationId}`);
	};

	return (
		<StyledProfileInfo user={user}>
			<div className="profile-header">
				<div className="profile-avatar"></div>
				<NameDescription name={user?.name} label="online" weight="bold" />
			</div>
			<div className="profile-content">
				<div className="profile-info-icon">
					<AiOutlineInfoCircle size={23} color={theme.colors.quaternary} />
				</div>
				<div className="profile-info-box">
					<NameDescription name={user?.phone} label="Mobile" weight="light" />
					<NameDescription name={user?.bio} label="Bio" weight="light" />
					<NameDescription
						name={user?.username}
						label="Username"
						weight="light"
					/>
				</div>
			</div>
			<div className="profile-send-message" onClick={handleSendMessage}>
				<span className="send-message">SEND MESSAGE</span>
			</div>
		</StyledProfileInfo>
	);
};

export default ProfileInfo;
