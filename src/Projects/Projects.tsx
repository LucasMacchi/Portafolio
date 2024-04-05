import { useSelector } from 'react-redux';
import { State } from '../redux/utils';
import "./Proyects.css"


export default function Projects(){

    const language = useSelector( (state: State) => state.lgn_eng)

    interface Project {
        image: string,
        des: string,
        des_eng: string,
        deploy?: string,
        repo_back?: string,
        repo_front?: string

    }

    const projectsToShow: Array<Project> = [{
        image:"https://github.com/LucasMacchi/Portafolio/blob/main/imgs/cloth.pf.png?raw=true",
        des: "Proyecto grupal de Henry con 8 integrantes, es un e-commerce de ropa con autenticacion de terceros y mercado pago. Mi rol en el grupo fue de desarollador back-end.",
        des_eng: "Group project for Henry with 8 members, an e-commerce of clothes with third party authentication and payment with mercado pago. My role was back-end developer.",
        deploy: "https://express-clothes.vercel.app/",
        repo_back:"https://github.com/LucasMacchi/PF-Clothes-Backend",
        repo_front: "https://github.com/Carsefer/PF-Clothes-Client"
    },
    {
        image:"https://github.com/LucasMacchi/Portafolio/blob/main/imgs/pi_foods.jpg?raw=true",
        des: "Proyecto individual de Henry, cubriendo todo los temas dados tanto de front-end y back-end. Este trata de una pagina para ver y agregar recetas saludables, utilizando una API externa, Spoonacular.com",
        des_eng: "Individual Project for Henry, covering all the technologies learnt at the bootcamp. This app consist of a page to see and add new recipes, using an external API, Spoonacular.com",
        repo_front: "https://github.com/LucasMacchi/Food-PI-SoyHenry"
    },
    {
        image:"https://github.com/LucasMacchi/Portafolio/blob/Deploy/imgs/asig.png?raw=true",
        des: "Proyecto para organizar tus tareas semanales, como tambien una lista de actividades para hacer.",
        des_eng: "Project made to organize your weekly schedule and a to do list.",
        deploy: "https://asignatures-project.vercel.app/",
        repo_back:"https://github.com/LucasMacchi/asignature-server",
        repo_front: "https://github.com/LucasMacchi/Asignatures-Project"
    }]

    const projectCards = () => {

        return(
            projectsToShow.map((pro, index) => (
                <div id='projectCardDiv' key={index}>
                    <img src={pro.image} alt="" />
                    {language ? <p>{pro.des_eng}</p> : <p>{pro.des}</p>}
                    {pro.deploy && <button className='boton' onClick={() => window.open(pro.deploy)}>Deploy</button>}
                    {pro.repo_front && <button className='boton' onClick={() => window.open(pro.repo_front)}>Code</button>}
                    {pro.repo_back && <button className='boton' onClick={() => window.open(pro.repo_back)}>Back-end Code</button>}
                </div>
            ))
        )


    }


    return(
        <div>
            <hr id='EducationPageline'/>
            <div id='divTituloEducacion'>
                <h1 id='boton'>{language ? "Projects" : "Proyectos"}</h1>
            </div>
            <div id='CardDivsPro'>
                {projectCards()}
            </div>
        </div>
    )
}