import { 
	MANUAL_LOGIN_USER,
	LOGIN_SUCCESS_USER,
	LOGIN_ERROR_USER,
	SIGNUP_USER,
	SIGNUP_SUCCESS_USER,
	SIGNUP_ERROR_USER,
	LOGOUT_USER,
	LOGOUT_SUCCESS_USER,
	LOGOUT_ERROR_USER,
	REGISTER_USER,
	REGISTER_SUCCESS_USER,
	REGISTER_ERROR_USER,
	SET_LAST_LOGIN	
} from "../constants"

const user = (state = {
	isWaiting: false,
	authenticated: false,
	username: "",
	fname:"",
	last_login:""
}, action) => {
	switch(action.type) {
		case MANUAL_LOGIN_USER:
			return Object.assign({}, state, { isWaiting: true })
		case LOGIN_SUCCESS_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: true, username: action.data.username})
		case LOGIN_ERROR_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: false })
		case SIGNUP_USER:
			return Object.assign({}, state, { isWaiting: true })
		case SIGNUP_SUCCESS_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: true })
		case SIGNUP_ERROR_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: false })
		case LOGOUT_USER:
			return Object.assign({}, state, { isWaiting: true })
		case LOGOUT_SUCCESS_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: false, username: "" })
		case LOGOUT_ERROR_USER:
			return Object.assign({}, state, { isWaiting: false, authenticated: true })
		case REGISTER_USER:
			return Object.assign({}, state, { isWaiting: true })
		case REGISTER_SUCCESS_USER:
			return Object.assign({}, state, { isWaiting: false })
		case REGISTER_ERROR_USER:
			return Object.assign({}, state, { isWaiting: false })
		case SET_LAST_LOGIN:
			return {...state, last_login: action.last_login}
		default:
			return state
	}
}

export default user