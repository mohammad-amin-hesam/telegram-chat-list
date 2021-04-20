import React, { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { showProfile } from "../../../redux/actions/profile";
import ModalBox from "../../Reuse/ModalBox";
import ProfileInfo from "./ProfileInfo";

const ProfileModal: React.FC = () => {
	const { profileId } = useSelector((state) => state);
	const dispatch = useDispatch();
	const open = profileId !== -1;

	const handleClose = useCallback(() => {
		dispatch(showProfile(-1));
	}, []);

	return (
		<ModalBox open={open} handleClose={handleClose} title="User Info">
			<ProfileInfo handleClose={handleClose} />
		</ModalBox>
	);
};

export default ProfileModal;
