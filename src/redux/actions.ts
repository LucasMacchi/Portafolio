import {Action, ActionType} from "./utils"
import { Dispatch } from "redux"

export const ChangeToEng = () => {
    return  (dispatch: Dispatch<Action>) => {
         dispatch({
            type: ActionType.ENG,
        })
    }
}
export const ChangeToEsp = () => {
    return (dispatch: Dispatch<Action>) => {
         dispatch({
            type: ActionType.ESP
        })
    }
}