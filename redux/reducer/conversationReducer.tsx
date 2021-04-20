import faker from "faker";

export type ConversationItemProps = {
	id: number;
	avatar: string;
	name: string;
	time?: string;
	description?: string;
};

export const conversationData: ConversationItemProps[] = [
	{
		id: 1,
		avatar: faker.image.avatar(),
		time: "00:03",
		name: faker.name.findName(),
		description: "Hi there!",
	},
	{
		id: 2,
		avatar: faker.image.avatar(),
		time: "00:03",
		name: faker.name.findName(),
		description: "Hi there!",
	},
	{
		id: 3,
		avatar: faker.image.avatar(),
		time: "00:03",
		name: faker.name.findName(),
		description: "Hi there!",
	},
	{
		id: 4,
		avatar: faker.image.avatar(),
		time: "00:03",
		name: faker.name.findName(),
		description: "Hi there!",
	},
	{
		id: 5,
		avatar: faker.image.avatar(),
		time: "00:03",
		name: faker.name.findName(),
		description: "Hi there!",
	},
	{
		id: 6,
		avatar: faker.image.avatar(),
		time: "00:03",
		name: faker.name.findName(),
		description: "Hi there!",
	},
	{
		id: 7,
		avatar: faker.image.avatar(),
		time: "00:03",
		name: faker.name.findName(),
		description: "Hi there!",
	},
];
