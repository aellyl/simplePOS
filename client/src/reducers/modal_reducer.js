import { 
    SHOW_MODAL,
    HIDE_MODAL
} from "../constants"

const modal_reducer = (state = {
    isOpen: false,
    modalContent: ""
}, action) => {
	switch(action.type) {
		case SHOW_MODAL:
			return Object.assign({}, state, { isOpen: true, modalContent:action.message })
		case HIDE_MODAL:
			return Object.assign({}, state, { isWaiting: false})
		default:
			return state
	}
}

export default modal_reducer