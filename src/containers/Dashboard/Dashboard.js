import React, {Component} from 'react';
import './Dashboard.css';
import generateTiles from '../../utilities/Tiles-Generator'
import getSession from '../../utilities/Session';
import {Redirect} from "react-router";
import Header from "../../components/Header/Header";

class Dashboard extends Component {
    tiles = JSON.parse(localStorage.getItem('tiles'));

    tileClickHandler = (tile,index)=>{
        console.log('tile',tile);
        this.props.history.push("/tile/open/"+index);
    }

     logoutClickHandler = ()=>{
        localStorage.removeItem('login-status');
        this.props.history.push("/login");
    }
    render() {
    if( !this.tiles){
         generateTiles();
        this.tiles = JSON.parse(localStorage.getItem('tiles'));
    }
        return ( getSession() ?<div>
                {/*the logout code should be meoved to heade*/}
                <div className = "pointer logout" onClick={this.logoutClickHandler}>Logout</div>
            <div className="flex-layout">
                {this.tiles.map((tile,index) => {
                    return   <div onClick={()=>{this.tileClickHandler(tile,index)}} key={Math.random()} className="pointer tile" style={tile}>dfdalfj</div>
                })}

            </div></div> : <Redirect to='/login'/>
        );
    }
};

export default Dashboard;
