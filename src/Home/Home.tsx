import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/utils';
import "./Home.css"

export default function Home(){

    const language = useSelector( (state: State) => state.lgn_eng)

    const [contactDetail, setContactDetail] = useState(false)

    const showContactDetail = () => {
        if(contactDetail){
            return (
                <div id='contact-info' >
                        <p>Email: lucasmacchi25@gmail.com</p>
                        <p>Github: <a href="https://github.com/LucasMacchi">LucasMacchi</a></p>
                        <p>LinkedIn: <a href="https://www.linkedin.com/in/lucas-macchi-a02956233/">Lucas Macchi</a></p>
                </div>
            )
        }
        return(
            <div id='contact-info-not'>

            </div>
        )
        
    }


    return(
        <div id='home'>
            <div id='basic-info'>

                <div id='profileDiv' >
                    <img src="https://avatars.githubusercontent.com/u/62063233?v=4" alt="" id='ProfilePicture' />
                </div>

                <div id='info'>
                    <h2>Full Stack Developer</h2>
                    {language ? <p id='intro'>Im Lucas Benjamin Macchi, full stack web developer with experience in NodeJs, Redux, React and other technologies. Adding to that, i have experience working as a team using the SCRUM methology.</p> :
                    <p id='intro'>Soy Lucas Benjamin Macchi, full stack web developer con experiencia en NodeJs, React, Redux y otras tecnologias. Ademas de contar con experiencia trabajando en equipo y metodologia SCRUM.</p>
                    }
                </div>

                <div id='Contact_button'>
                    {language ? <button className='boton' onClick={() => setContactDetail(!contactDetail)}>Contact me</button> : <button className='boton'onClick={() => setContactDetail(!contactDetail)}>Contacto</button>}
                    
                </div>
                    {showContactDetail()}
            </div>
            <div id='about-me-div'>
                {language ? <h2>About me</h2> : <h2>Sobre mi</h2>}
                
                <div id='about_me'>
                    {language ?<p>Im very passionate about computers and programming in general, i was surrounded by it all my life</p> : <p>Soy una persona muy apasionada por las computadoras y la programacion, toda mi vida estuve rodeado de las mismas.</p>}
                    {language ?<p>In 2020, i started my journey to learn about it, understanding the industry and its dynamic.</p> : <p>En 2020, me embarque en un camino para aprender sobre la programacion y computadoras, adentrandome al basto mundo del IT y su dinamica.</p>}
                    {language ? <p>Although, i learned others skills like teamwork and languages</p>: <p>Ademas, cultive otras habilidades como el trabajo en equipo y otros idiomas</p>}
                </div>
                
            </div>
            {language ? <h4 id='find-more'>Find out more</h4> : <h4 id='find-more'>Descubre mas</h4>}
            <div id="links-find-out">
                <button className='boton'>{language ? "Projects" : "Proyectos"}</button>
                <button className='boton'>{language ? "Experience" : "Experiencia"}</button>
                <button className='boton'>{language ? "Education" : "Educacion"}</button>
                <button className='boton'>{language ? "Technologies" : "Tecnologias"}</button>
            </div>
        </div>
        
    )
}