export enum ActionType{
    ENG = "CHANGE_TO_ENG",
    ESP = "CHANGE_TO_ESP",
    START = "START"
}

export interface State{
    lgn_eng:boolean,
    education: Array<EducationI>,
    started: boolean
}

interface ChangeToEng {
    type: ActionType.ENG

}

interface ChangeToEsp {
    type: ActionType.ESP
}

interface Start {
    type: ActionType.START
}

interface EducationI {
    title: string,
    title_eng: string,
    where: string,
    where_eng: string,
    from: string,
    to: string,
    des: string,
    des_eng: string,
    img?: string,
    link?: string

}




export type Action = ChangeToEng | ChangeToEsp | Start

