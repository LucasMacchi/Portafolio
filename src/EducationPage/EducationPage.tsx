import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/utils';
import Card from "../Card_education/Education"
import "./EducationPage.css"

export default function ExperiencePage(){

    const language = useSelector( (state: State) => state.lgn_eng)
    const experiences = useSelector( (state: State) => state.experiences )

    const createCards = () => {
        return(
            experiences.map((exp) => {
                return(
                    <Card experience={exp}/>
                )
            })
        )
        
    }

    return(

        <div >
            <div id='divTituloEducacion'>
                <h1 id='boton'>{language ? "Education and Certificates" : "Educacion y Certificados"}</h1>
            </div>
            
            <div id='expPageDiv'>
                {createCards()}
            </div>
        </div>
    )
}