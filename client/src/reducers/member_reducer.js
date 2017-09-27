import { 
    SET_MEMBER
} from "../constants"

const member_reducer = (state = {
    memberNum: "",
    memberName: ""
}, action) => {
	switch(action.type) {
		case SET_MEMBER:
			return Object.assign({}, state, { memberNum: action.memberNum})

		default:
			return state
	}
}

export default member_reducer