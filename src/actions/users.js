import { INIT_USERS } from "./types";

export function initUsersData(users) {
	return {
		type: INIT_USERS,
		users,
	};
}
