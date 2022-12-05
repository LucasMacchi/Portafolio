import React, {useState} from 'react';
import { useSelector } from 'react-redux';
import { State } from '../redux/utils';
import "./Education.css"

export default function Education_Card(props: any){
    const language = useSelector( (state: State) => state.lgn_eng)
    console.log(props)
    const expe = props.experience

    return(
        <div id='expCardDiv'>
            <h3>{language ? "Title: "+expe.title_eng : "Titulo: "+expe.title}</h3>
            <h3>{language ? "Institute: "+expe.where_eng : "Instituto: "+expe.where}</h3>
            <h3>{expe.from+" - "+expe.to}</h3>
            <h3>{language ? "Description:" : "Descripcion: "}</h3>
            <div>
                <p>{language ? ""+expe.des_eng : ""+expe.des}</p>
            </div>
            
        </div>
    )
}