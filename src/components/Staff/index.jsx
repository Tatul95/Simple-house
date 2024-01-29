import React from "react";
import './style.scss'
import About1 from '../../assets/img/about-01.jpg';
import About2 from '../../assets/img/about-02.jpg';
import About3 from '../../assets/img/about-03.jpg';
import About4 from '../../assets/img/about-04.jpg';
import StaffBox from "../StaffBox";

class Staff extends React.Component {

    staffCards = [
        {
            img: About1,
            fullName: 'Jennifer Soft',
            position: 'Founder and CEO',
            description: 'Vivamus cursus leo nec sem feugiat sagittis. Duis ut feugiat odio, sit amet accumsan odio.',

        },
        {
            img: About2,
            fullName: 'Daisy Walker  ',
            position: 'Executive Chef',
            description: 'Praesent non vulputate elit. Orci varius natoque et magnis dis parturient, nascetur ridiculus mus.',
        },
        {
            img: About3,
            fullName: 'Florence Nelson',
            position: 'Kitchen Manager',
            description: 'Aenean sapien sem, ultricies sed vulputate et, auctor vel mauris. Integer sit amet diam eget est facilisis lacinia vitae.',
        },
        {
            img: About4,
            fullName: 'Valentina Martin',
            position: 'Culinary Director',
            description: 'Praesent non vulputate elit. Orci varius natoque penatibus et magnis montes, nascetur ridiculus mus.',
        }
    ]

    render() {
        return <section>

            <div className="G-container">
                <div className="staff-list">
                    {this.staffCards.map((item, index) => {
                        return <StaffBox item={item} key={index} />
                    })}

                </div>
            </div>
        </section>
    }
}

export default Staff

