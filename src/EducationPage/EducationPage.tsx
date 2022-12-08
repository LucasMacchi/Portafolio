import { useSelector } from 'react-redux';
import { State } from '../redux/utils';
import Card from "../Card_education/Education"
import "./EducationPage.css"

export default function ExperiencePage(){

    const language = useSelector( (state: State) => state.lgn_eng)
    const education = useSelector( (state: State) => state.education )

    const createCards = () => {
        return(
            education.map((edu) => {
                return(
                    <Card experience={edu}/>
                )
            })
        )
        
    }

    return(

        <div id="EducationPageDIV">
            <hr id="EducationPageline"/>
            <div id='divTituloEducacion'>
                <h1 id='boton'>{language ? "Education and Certificates" : "Educacion y Certificados"}</h1>
            </div>
            
            <div id='expPageDiv'>
                {createCards()}
            </div>
        </div>
    )
}