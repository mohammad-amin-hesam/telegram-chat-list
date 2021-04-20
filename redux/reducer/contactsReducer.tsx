import { AnyAction } from "redux";

export interface ContactProps {
	id: number;
	name: string;
	avatar: string;
	phone: string;
	bio: string;
	username: string;
}

const defaultContacts: ContactProps[] = [
	{
		id: 1,
		name: "Greg Runte",
		avatar: "https://cdn.fakercloud.com/avatars/muridrahhal_128.jpg",
		phone: "+98 915 322 8233",
		bio: "Eminem Listener! :)",
		username: "@gerg_runte",
	},
	{
		id: 2,
		name: "Rachel Larson",
		avatar: "https://cdn.fakercloud.com/avatars/caseycavanagh_128.jpg",
		phone: "+98 123 322 8234",
		bio: "Nothing! :/",
		username: "@rachel_larson",
	},
	{
		id: 3,
		name: "Amin Hesam",
		avatar: "https://avatars.githubusercontent.com/u/46710455?v=4",
		phone: "+98 888 828 8283",
		bio: "Hire me!",
		username: "@amin_hesam",
	},
	{
		id: 4,
		name: "Robin Deckow",
		avatar: "https://cdn.fakercloud.com/avatars/skkirilov_128.jpg",
		phone: "+98 991 435 5516",
		bio: "Live your dreams.",
		username: "@robin_deckow",
	},
	{
		id: 5,
		name: "Miss Leslie Schmitt",
		avatar: "https://cdn.fakercloud.com/avatars/aislinnkelly_128.jpg",
		phone: "+98 923 921 9322",
		bio: "I love hip...hop! Nothing is like it xD",
		username: "@schmitt",
	},
];

export const contactsReducer = (state = defaultContacts, action: AnyAction) => {
	switch (action.type) {
		default:
			return state;
	}
};
