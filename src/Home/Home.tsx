import React, {useState, useRef} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { State } from '../redux/utils';
import { bindActionCreators } from 'redux';
import * as acciones from '../redux/actions';
import EducationPage from '../EducationPage/EducationPage';
import Technologies from '../Technologies/Tech';
import Projects from '../Projects/Projects';
import "../Header/Header.css"
import "./Home.css"

export default function Home(){

    const dispatch = useDispatch()
    const language = useSelector( (state: State) => state.lgn_eng)
    const {ChangeToEng, ChangeToEsp} = bindActionCreators(acciones, dispatch)
    const [contactDetail, setContactDetail] = useState(false)

    const edu = useRef(null)
    const about = useRef(null)
    const tech = useRef(null)
    const proj = useRef(null)



    const scrollToSection = (elementRef: any) => {
        console.log("going to = ",elementRef)
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth"
        })
    }
    const navigationBtns = () => {
        if(language){
            return(
                <div id='navBar-header'>
                    <div className='btn-Div'>
                        <button className='boton-header' onClick={() => {scrollToSection(about)}}>About me</button>
                    </div>
                    <div className='btn-Div'>
                        <button className='boton-header' onClick={() => {scrollToSection(edu)}}>Education</button>
                    </div>
                    <div className='btn-Div'>
                        <button className='boton-header' onClick={() => {scrollToSection(tech)}}>Technologies</button>
                    </div>
                    <div className='btn-Div'>
                        <button className='boton-header' onClick={() => {scrollToSection(proj)}}>Projects</button>
                    </div>
                </div>
            )
        }
        else{
            return(
                <div id='navBar-header'>
                    <div className='btn-Div'>
                        <button className='boton-header' onClick={() => {scrollToSection(about)}}>Sobre mi</button>
                    </div>
                    <div className='btn-Div'>
                        <button className='boton-header' onClick={() => {scrollToSection(edu)}}>Educación</button>
                    </div>
                    <div className='btn-Div'>
                        <button className='boton-header' onClick={() => {scrollToSection(tech)}}>Tecnologias</button>
                    </div>
                    <div className='btn-Div'>
                        <button className='boton-header' onClick={() => {scrollToSection(proj)}}>Proyectos</button>
                    </div>
                </div>
            )
        }
    }

    const languageChange = (order: string) => {
        if(order === "esp"){
            ChangeToEsp()
        }
        if(order === "eng"){
            ChangeToEng()
        }
    }

    const showBtn = () => {
        if(language){
            return(
                <div id='lng-change'>
                    <h3 className='lng-buttons' onClick={ () => languageChange("esp")}>ESP</h3>
                    <h3 className='lng-buttons' id='selected-lgn'>ENG</h3>
                </div>
            )
        }
        else{
            return(
                <div id='lng-change'>
                    <h3 className='lng-buttons' id='selected-lgn'>ESP</h3>
                    <h3 className='lng-buttons' onClick={ () => languageChange("eng")}>ENG</h3>
                </div>
            )
        }
    }


    return(
        <div id='home'>
            <div id='header-div'>
                <div id='header-first' ref={about}>
                    <div></div>
                    <h1 id='header-name'>Lucas Benjamin Macchi</h1>
                    {showBtn()}
                </div>
                {navigationBtns()}
            </div>
            <div id='basic-info' >

                <div id='profileDiv' >
                    <img src="https://avatars.githubusercontent.com/u/62063233?v=4" alt="" id='ProfilePicture' />
                </div>

                <div id='info'>
                    <h2>Full Stack Developer</h2>
                    {language ? <p id='intro'>Im Lucas Benjamin Macchi, full stack web developer with experience in NodeJs, Redux, React and other technologies. Adding to that, i have experience working as a team using the SCRUM methology.</p> :
                    <p id='intro'>Soy Lucas Benjamin Macchi, full stack web developer con experiencia en NodeJs, React, Redux y otras tecnologias. Ademas de contar con experiencia trabajando en equipo y metodologia SCRUM.</p>
                    }
                </div>
            </div>
            <div id='about-me-div'>
                {language ? <h2>About me</h2> : <h2>Sobre mi</h2>}
                
                <div id='about_me'>
                    {language ?<p>Im very passionate about computers and programming in general, i was surrounded by it all my life</p> : <p>Soy una persona muy apasionada por las computadoras y la programacion, toda mi vida estuve rodeado de las mismas.</p>}
                    {language ?<p>In 2020, i started my journey to learn about it, understanding the industry and its dynamic.</p> : <p>En 2020, me embarque en un camino para aprender sobre la programacion y computadoras, adentrandome al basto mundo del IT y su dinamica.</p>}
                    {language ? <p>Although, i learned others skills like teamwork and languages</p>: <p>Ademas, cultive otras habilidades como el trabajo en equipo y otros idiomas</p>}
                </div>
                
            </div>
            <div ref={edu}>
                <EducationPage />
            </div>
            <div ref={tech}>
                <Technologies />
            </div>
            <div ref={proj}>
                <Projects/>
            </div>
            
        </div>
        
    )
}