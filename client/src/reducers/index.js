import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import user from "./user"
import modal_reducer from "./modal_reducer"
import member_reducer from "./member_reducer"

export default combineReducers({
	user,
	routing: routerReducer,
	member: member_reducer
})