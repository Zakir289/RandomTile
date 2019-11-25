import './Tile.css';
import React from 'react';
import generateTiles from '../../utilities/Tiles-Generator';
import getSession from '../../utilities/Session';
import {Redirect} from "react-router";

export default function Tile(props){
    let tiles = JSON.parse(localStorage.getItem('tiles'));
    if(!tiles){
        generateTiles();
        tiles = JSON.parse(localStorage.getItem('tiles'));
    }
    const tile = tiles[parseInt(props.match.params.index)];

    function tileClickHandler(){
        props.history.push("/dashboard");
    }
    return ( getSession() ? <div className="container">
        <div onClick={tileClickHandler} style={tile}></div>
    </div>  :<Redirect to='/login'/>
    )
}
