import { User } from "../redux/reducer/usersReducer";
import { FETCH_USERS } from "../redux/types";

const dbName = "users";

export default class Api {
	getState: () => any;
	dispatch: (obj: {}) => any;
	db: User[];

	constructor(obj) {
		// const data = localStorage.getItem(dbName);
		this.getState = obj.getState;
		this.dispatch = obj.dispatch;
		this.db = obj.getState().users;
	}

	Setter = (data: User[]): void => {
		// localStorage.setItem(dbName, JSON.stringify(data));
		this.dispatch({
			type: FETCH_USERS,
			data,
		});
	};

	Post = (user: User): void => {
		this.Setter([...this.db, user]);
	};

	GetAll = () => {
		this.Setter(this.db);
	};

	GetById = (id): User => {
		return this.db.filter((user) => user.id === id)[0];
	};

	Put = (user: User) => {
		const item = this.db.filter((el) => el.id === user.id)[0];
		const index = this.db.indexOf(item);
		let newDB = [...this.db];
		newDB[index] = user;
		this.Setter(newDB);
	};

	Delete = (data) => {
		let filteredList = [...this.db];

		for (let i = 0; i < data.length; i++) {
			const id = data[i];
			filteredList = filteredList.filter((item) => item.id !== id);
		}

		this.Setter(filteredList);
	};
}
