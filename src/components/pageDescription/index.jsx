import React from "react";
import "./style.scss"

class Description extends React.Component {


    render() {
        return <div className="G-container">
            <div className="description-box">
                <h2>{this.props.title}</h2>
                <p>{this.props.description}</p>
            </div>
        </div>
    }


}

export default Description