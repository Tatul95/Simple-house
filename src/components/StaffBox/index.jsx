import React from "react";
import './style.scss';


class StaffBox extends React.Component {

    render() {
        return <div className="staff-box">
            <div className="staff">
                <div className="image-box">
                    <img src={this.props.item.img} alt="image" />
                </div>
                <div className="staff-info">
                    <div className="staff-info-title">
                        <h3>{this.props.item.fullName}</h3>
                        <span>{this.props.item.position}</span>
                        <p>{this.props.item.description}</p>
                    </div>
                    <div className="staff-social">
                        
                    </div>
                </div>
            </div>
        </div>
    }
}

export default StaffBox