import { useEffect } from "react";
import { NextPage } from "next";
import ConversationDetails from "../components/IndexPage/ConversationDetails/ConversationDetails";
import ConversationList from "../components/IndexPage/ConversationList/ConversationList";
import { StyledParentComponent } from "../components/IndexPage/IndexStyles/IndexStyle";
import Head from "next/head";
import ProfileModal from "../components/IndexPage/Profile/ProfileModal";
import { useRouter } from "next/dist/client/router";
import { useSelector } from "react-redux";

const Index: NextPage = () => {
	const router = useRouter();
	const { conversation_id } = router.query;
	const { contacts } = useSelector((state) => state);

	useEffect(() => {
		if (
			contacts.filter((item) => item.conversationId === Number(conversation_id))
				.length === 0
		) {
			router.replace("/");
		}
	}, []);

	return (
		<>
			<Head>
				<title>Telegram</title>
			</Head>
			<StyledParentComponent>
				<ConversationList />
				<ConversationDetails />
			</StyledParentComponent>
			<ProfileModal />
		</>
	);
};

export default Index;
