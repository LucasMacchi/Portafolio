import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as acciones from '../redux/actions';
import { State } from '../redux/utils';
import Typical from "react-typical"
import "./Starter.css"


export default function Starter(){
    
    const dispatch = useDispatch()
    const {Start} = bindActionCreators(acciones, dispatch)


    const StartPage = () => {
        Start()
    }

    return(
        <div id='StarterDiv'>
            <h1 id='StarterName'>Lucas Macchi</h1>
            <div>
            <p id="typingtext">
            🖥️ Full Stack Developer 🖥️
            
            </p>
            <p id="typingtext">
            <Typical
            steps={['',1000,' React', 5000, ' Redux', 5000, ' NodeJS', 5000, ' TypeScript', 5000, ' JavaScript', 5000]}
            loop={Infinity}
            wrapper="p"
            />
            </p>
            </div>
            <button id='botonStarter' onClick={() => StartPage()}>Empezemos</button>
        </div>
    )
}

