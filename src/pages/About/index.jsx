import React from "react";
import './style.scss';
import Description from "../../components/pageDescription";
import Staff from "../../components/Staff";
import About5 from "../../assets/img/about-05.jpg"

class About extends React.Component {

    render() {
        return <>
            <Description title={'About Simple House'} description={'This is about page of simple house template. You can modify and use this HTML template for your website. Total 3 HTML pages included in this template. Header image has a parallax effect.'} />
            <Staff/>
            <div className="G-container">
            <div className="about-image" style={{backgroundImage:`url('${About5}')`}}></div>
            </div>
        </>
    }
}

export default About