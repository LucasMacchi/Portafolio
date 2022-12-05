import {Action, ActionType, State} from "./utils"

const initialState: State = {
    lgn_eng: false, //cambia el idioma de la pogina
    education: [{
        title: "Desarollador Full Stack",
        title_eng: "Full Stack Developer",
        where: "SoyHenry Bootcamp",
        where_eng: "SoyHenry Bootcamp",
        from: "07/2022",
        to: "11/2022",
        des: "Bootcamp de SoyHenry de full stack web developer, en este aprendi tecnologias como ReactJS, Redux, Sequelize, SQL, JavaScript, Typescript, Express.js, sequelize.js y postgreSQL",
        des_eng: "Bootcamp at SoyHenry of Full Stack Web Developer where i learned technologies like ReactJS, Redux, NodeJS, Sequelize, SQL, Express.js, Javascript, Typescript and PostgreSQL"
    },{
        title: "Tecnico Universitario en Programacion",
        title_eng: "University Technician in Programming",
        where: "UTN FRRe",
        where_eng: "UTN FRRe",
        from: "2020",
        to: "Now",
        des: "Este me dio conocimientos en computadoras, matematicas, estadistica y en JAVA y C#",
        des_eng: "This career gave me knowledge in computers, math, statistics and in JAVA and C#"
    },{
        title: "Titulo Secundario en educacion bilingue",
        title_eng: "High School Diploma in bilingual education",
        where: "Saint Patrick's College",
        where_eng: "Saint Patrick's College",
        from: "2012",
        to: "2018",
        des: "Educacion secundaria especializada en ciencias naturales y bilingue",
        des_eng: "High School Education specialize in natural sciences and bilingual"
    },{
        title: "Italiano A1",
        title_eng: "Italian A1",
        where: "Centro de Idiomas Teplitzky's",
        where_eng: "Teplitzky's Language Center",
        from: "08/2021",
        to: "12/2021",
        des: "Italiano basico",
        des_eng: "Basic Italian"
    },{
        title: "Ingles B2",
        title_eng: "English B1",
        where: "St. Clare's, Oxford",
        where_eng: "St. Clare's, Oxford",
        from: "07/2017",
        to: "08/2017",
        des: "Curso de verano en Oxford",
        des_eng: "Summer course at Oxford"
    },{
        title: "EFSET English Certificate C2",
        title_eng: "EFSET English Certificate C2",
        where: "EFSET",
        where_eng: "EFSET",
        from: "11/2022",
        to: "",
        des: "Certificado online de ingles",
        des_eng: "Online english certification"
    }],
}

const reducers = (state = initialState, action: Action) => {
    switch(action.type){
        case ActionType.ENG:
            return{...state, lgn_eng: true}
        case ActionType.ESP:
            return{...state, lgn_eng: false}
        

        default:
            return{...state}
    }
}

export default reducers