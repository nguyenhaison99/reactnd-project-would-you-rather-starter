import { SET_AUTH_USER } from "./types";

export function setAuthUser(id) {
	return {
		type: SET_AUTH_USER,
		id,
	};
}
