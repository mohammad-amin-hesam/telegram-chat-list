import { NextPage } from "next";
import ConversationDetails from "../components/IndexPage/ConversationDetails/ConversationDetails";
import ConversationList from "../components/IndexPage/ConversationList/ConversationList";
import { StyledParentComponent } from "../components/IndexPage/IndexStyles/IndexStyle";
import Head from "next/head";

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
		</>
	);
};

export default Index;
