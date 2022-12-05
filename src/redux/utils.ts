export enum ActionType{
    ENG = "CHANGE_TO_ENG",
    ESP = "CHANGE_TO_ESP"
}

export interface State{
    lgn_eng:boolean,
    education: Array<EducationI>
}

interface ChangeToEng {
    type: ActionType.ENG

}

interface ChangeToEsp {
    type: ActionType.ESP
}

interface EducationI {
    title: string,
    title_eng: string,
    where: string,
    where_eng: string,
    from: string,
    to: string,
    des: string,
    des_eng: string

}




export type Action = ChangeToEng | ChangeToEsp

