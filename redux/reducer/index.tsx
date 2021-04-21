import { combineReducers } from "redux";
import { contactsReducer } from "./contactsReducer";
import { conversationReducer } from "./conversationReducer";
import { profileReducer } from "./profileReducer";

export default combineReducers({
	contacts: contactsReducer,
	profileId: profileReducer,
	conversations: conversationReducer,
});
