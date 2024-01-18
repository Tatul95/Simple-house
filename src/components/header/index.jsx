import React from "react";
import "./style.scss";
import Simple from '../../assets/img/simple-house-01.jpg';
import Logo from '../../assets/img/simple-house-logo.png'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { RoutersList } from "../../router";


class  Header extends React.Component{

    render(){
        return <div className="header-img" style={{backgroundImage:`url('${Simple}')`}}>
            <div className="header-box">
                <div className="header-left">
                    <div>
                        <img src={Logo} alt="logo" />
                    </div>
                    <div>
                        <h1>Simple House</h1>
                        <span>new restaurant template</span>
                    </div>
                </div>
                <div className="header-right">
                    <ul>
                        <li><NavLink to={RoutersList.HOME}>Home</NavLink></li>
                        <li><NavLink to={RoutersList.ABOUT}>About</NavLink></li>
                        <li><NavLink to={RoutersList.CONTACT}>Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </div>
    }
}

export default Header