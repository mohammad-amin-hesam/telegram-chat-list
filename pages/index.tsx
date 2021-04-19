import { NextPage } from "next";
import ConversationDetails from "../components/IndexPage/ConversationDetails/ConversationDetails";
import ConversationList from "../components/IndexPage/ConversationList/ConversationList";
import { StyledParentComponent } from "../components/IndexPage/IndexStyles/IndexStyle";

const Index: NextPage = () => {
	return (
		<>
			<StyledParentComponent>
				<ConversationList />
				<ConversationDetails />
			</StyledParentComponent>
		</>
	);
};

export default Index;
