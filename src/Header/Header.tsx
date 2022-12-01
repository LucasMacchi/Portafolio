import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as acciones from '../redux/actions';
import { State } from '../redux/utils';
import "./Header.css"

export default function Header(){

    const dispatch = useDispatch()
    const language = useSelector( (state: State) => state.lgn_eng)

    const {ChangeToEng, ChangeToEsp} = bindActionCreators(acciones, dispatch)

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
        <div id='header-div'>
            <div></div>
            <h1 id='header-name'>Lucas Benjamin Macchi</h1>
            {showBtn()}
            
        </div>
    )
}
/*
<h3 className='lng-buttons' onClick={ () => languageChange("esp")}>ESP</h3>
<h3 className='lng-buttons' onClick={ () => languageChange("eng")}>ENG</h3>
*/