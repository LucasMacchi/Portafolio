import { useSelector } from 'react-redux';
import { State } from '../redux/utils';
import "./Tech.css"

export default function Technologies(){
    const language = useSelector( (state: State) => state.lgn_eng)

    return(
        <div>
            <hr id='EducationPageline'/>
            <div id='divTituloEducacion'>
                <h1 id='boton'>{language ? "Technologies" : "Tecnologias"}</h1>
            </div>
            <div id='divTech'>
                <div className='Technologies'>
                    <img src="https://cdn.icon-icons.com/icons2/2415/PNG/512/typescript_plain_logo_icon_146316.png" alt="" className='tech_image'/>
                    <label htmlFor="">TypeScript</label>
                </div>
                <div className='Technologies'>
                    <img src="https://logodownload.org/wp-content/uploads/2022/04/javascript-logo.png" alt="" className='tech_image'/>
                    <label htmlFor="">JavaScript</label>
                </div>
                <div className='Technologies'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" id='reactImg'/>
                    <label htmlFor="">React</label>
                </div>
                <div className='Technologies'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.freebiesupply.com%2Flogos%2Flarge%2F2x%2Fangular-icon-1-logo-png-transparent.png&f=1&nofb=1&ipt=06578228dd32ea04162ee38114038acd46c98c24a1bdaf4a1bcf1cc6518876b6&ipo=images" alt="" className='tech_image'/>
                    <label htmlFor="">Angular</label>
                </div>
                <div className='Technologies'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcommerceda.com%2Fimages%2Fmaterial-ui-logo.png&f=1&nofb=1&ipt=604492c61c3d6187e6cd6832827437ea6cbc642e533f95805f170bbb84783851&ipo=images" alt="" id='reactImg'/>
                    <label htmlFor="">Material UI</label>
                </div>
                <div className='Technologies'>
                    <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi1.wp.com%2Fionicacademy.com%2Fwp-content%2Fuploads%2F2017%2F06%2Fionic-logo-portrait.png%3Fssl%3D1&f=1&nofb=1&ipt=e2d1732e1688f102f1249fccfecaabf3940b622be3a084435531e10e74015ed9&ipo=images" alt="" id='reactImg'/>
                    <label htmlFor="">Ionic</label>
                </div>
                <div className='Technologies'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/2560px-Node.js_logo.svg.png" alt="" id='nodeImg'/>
                    <label htmlFor="">NodeJS</label>
                </div>
                <div className='Technologies'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/768px-HTML5_logo_and_wordmark.svg.png" alt="" className='tech_image'/>
                    <label htmlFor="">HTML</label>
                </div>
                <div className='Technologies'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1200px-CSS3_logo_and_wordmark.svg.png" alt="" id='CssImg'/>
                    <label htmlFor="">CSS</label>
                </div>
                <div className='Technologies'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/4/49/Redux.png?20180308172936" alt="" id='ReduxImg'/>
                    <label htmlFor="">Redux</label>
                </div>
                <div className='Technologies'>
                    <img src="https://seeklogo.com/images/S/sequelize-logo-9A5075DB9F-seeklogo.com.png" alt="" id='SeqImg'/>
                    <label htmlFor="">Sequelize</label>
                </div>
                <div className='Technologies'>
                    <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/express-js-icon.png" alt="" id='ExpressImg'/>
                    <label htmlFor="">Express</label>
                </div>
                <div className='Technologies'>
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1200px-Postgresql_elephant.svg.png" alt="" id='PostImg'/>
                    <label htmlFor="">PostgreSQL</label>
                </div>
                <div className='Technologies'>
                    <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="" id='gitImg'/>
                    <label htmlFor="">GIT</label>
                </div>
                <div className='Technologies'>
                    <img src="https://cdn-icons-png.flaticon.com/512/6124/6124991.png" alt="" className='tech_image'/>
                    <label htmlFor="">Trello</label>
                </div>
            </div>
        </div>
    )
}