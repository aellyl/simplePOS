import { 
    SHOW_MODAL,
    HIDE_MODAL,
    SET_MEMBER
} from "../constants"
import { browserHistory } from "react-router"

export function showModal(message){
    return {
        type: SHOW_MODAL,
        message
    }
}

export function hideModal(){
    return {
        type: HIDE_MODAL
    }
}

export function setMemberNumb(memberNum){
    return {
        type: SET_MEMBER,
        memberNum
    }
}

export function setMem_hideModal(memberNum,successPath){
    return dispatch =>{
        //dipatch(setMemberNumb(memberNum))
        dispatch(hideModal())
       // browserHistory.push(successPath)
    }
}