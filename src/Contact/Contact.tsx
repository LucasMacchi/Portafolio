import { useSelector } from 'react-redux';
import { State } from '../redux/utils';
import "./Contact.css"

export default function Contact(){
    const language = useSelector( (state: State) => state.lgn_eng)

    const donwloadCV = () => {
        if(language) return "https://drive.google.com/file/d/1D9wuAy0cdnCQt7OQtt1rLRomZg_1-5sw/view?usp=sharing"
        
        else return "https://drive.google.com/file/d/1F94zSI3jYHOPyJYc7tr0wyGbjBZxOAcV/view?usp=sharing"
    }


    return(
        <div id='contactDiv'>
            <hr id='EducationPageline'/>
            <div id='divTituloEducacion'>
                <h1 id='boton'>{language ? "Contact info" : "Contacto"}</h1>
            </div>
            <div id='allContactDiv'>
                <div id='contactInfoDiv'>
                    <div>
                        <h1>{language ? "Phone" : "Telefono"}</h1>
                        <h3 id='donwloadH3' onClick={() => {window.open("https://wa.me/5493794010009")}}>+54 9 3794 010009</h3>
                    </div>
                    <div>
                        <h1>Email</h1>
                        <h3>lucasmacchi25@gmail.com</h3>
                    </div>
                    <div>
                        <h1>CV</h1>
                        <a id='donwloadH3' href={donwloadCV()} >{language ? "See CV" : "Ver CV"}</a>
                    </div>
                </div>
                <div id='contactImgs'>
                    <div>
                        <img onClick={() => window.open("https://www.linkedin.com/in/lucas-macchi-a02956233/")} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                    </div>
                    <div>
                        <img  onClick={() => window.open("https://github.com/LucasMacchi")} src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" />
                    </div>
                </div>
                </div>
        </div>
    )

}