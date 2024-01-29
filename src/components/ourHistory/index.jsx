import React from "react";
import './style.scss';

class OurHistory extends React.Component{

    render(){
        return <div className="G-container">
            <div className="history">
                <div className="img-box">
                    <img src={this.props.img} alt="image" />
                </div>
                <div className="info-box">
                    <div className="info">
                        <h3>{this.props.title}</h3>
                        <p>{this.props.description}</p>
                    </div>
                    <div className="read-more">
                        <button>{this.props.readMore}</button>
                    </div>
                </div>

            </div>

        </div>
    }
}

export default OurHistory