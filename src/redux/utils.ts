export enum ActionType{
    ENG = "CHANGE_TO_ENG",
    ESP = "CHANGE_TO_ESP"
}

export interface State{
    lgn_eng:boolean,
    experiences: Array<ExperienceI>
}

interface ChangeToEng {
    type: ActionType.ENG

}

interface ChangeToEsp {
    type: ActionType.ESP
}

interface ExperienceI {
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

