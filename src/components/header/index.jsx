import React from "react";
import "./style.scss";
import Simple from '../../assets/img/simple-house-01.jpg';
import Logo from '../../assets/img/simple-house-logo.png'
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { RoutersList } from "../../router";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


class Header extends React.Component {

    render() {
        return <div className="header-img" style={{ backgroundImage: `url('${Simple}')` }}>
            <div className="G-container">
                <div className="header-box">
                    <div className="header-left">
                        <div className="logo-box">
                            <Link to={RoutersList.HOME}><img src={Logo} alt="logo" /></Link>
                        </div>
                        <div className="header-name">
                            <h1>Simple House</h1>
                            <span>new restaurant template</span>
                        </div>
                    </div>
                    <div className="header-right">
                        <ul>
                            <li><NavLink exact to={RoutersList.HOME}>Home</NavLink></li>
                            <li><NavLink exact to={RoutersList.ABOUT}>About</NavLink></li>
                            <li><NavLink exact to={RoutersList.CONTACT}>Contact</NavLink></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default Header