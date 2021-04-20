import React from "react";
import { StyleModalBox } from "../IndexPage/IndexStyles/IndexStyle";
import { AiOutlineClose } from "react-icons/ai";
import { theme } from "../../pages/_app";

const ModalBox: React.FC<{
	handleClose: () => void;
	open: boolean;
	title: string;
}> = ({ children, handleClose, open, title }) => {
	const content = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (open) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "visible";
		}
	}, [open]);

	const handleOutClick = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>
	): void => {
		if (e.target instanceof HTMLElement) {
			if (content.current?.contains(e.target)) return;
		}

		handleClose();
	};

	return (
		<StyleModalBox
			className={`${open ? "" : "d-none"}`}
			onClick={handleOutClick}
		>
			<div className="modal-content" ref={content}>
				<div className="modal-header">
					<h4 className="modal-title">{title}</h4>
					<div className="modal-close">
						<AiOutlineClose
							size={20}
							color={theme.colors.quaternary}
							cursor="pointer"
							onClick={handleClose}
						/>
					</div>
				</div>
				<div className="modal-content">{children}</div>
			</div>
		</StyleModalBox>
	);
};

export default ModalBox;
