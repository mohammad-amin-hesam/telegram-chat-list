import { NextPage } from "next";
import ConversationDetails from "../components/IndexPage/ConversationDetails/ConversationDetails";
import ConversationList from "../components/IndexPage/ConversationList/ConversationList";
import { StyledParentComponent } from "../components/IndexPage/IndexStyles/IndexStyle";
import Head from "next/head";
import ProfileModal from "../components/IndexPage/Profile/ProfileModal";

const Index: NextPage = () => {
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
