import React from "react";
import "./style.scss"
import Image1 from "../../assets/img/01.jpg";
import Image2 from "../../assets/img/02.jpg";
import Image3 from "../../assets/img/03.jpg";
import Image4 from "../../assets/img/04.jpg";
import Image5 from "../../assets/img/05.jpg";
import Image6 from "../../assets/img/06.jpg";
import Image7 from "../../assets/img/07.jpg";
import Image8 from "../../assets/img/08.jpg";

class FoodBox extends React.Component {

    foodMenu = [
        {
            img: Image1,
            title: 'Fusce dictum finibus',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$45 / $55',
        },
        {
            img: Image2,
            title: 'Aliquam sagittis',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$65 / $70',
        },
        {
            img: Image3,
            title: 'Sed varius turpis',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$30.50',
        },
        {
            img: Image4,
            title: 'Aliquam sagittis',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$25.50',
        },
        {
            img: Image5,
            title: 'Maecenas eget justo',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$80.25',
        },
        {
            img: Image6,
            title: 'Quisque et felis eros',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$20 / $40 / $60',
        },
        {
            img: Image7,
            title: 'Sed ultricies dui',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$94',
        },
        {
            img: Image8,
            title: 'Donec porta consequat',
            description: 'Nam in suscipit nisi, sit amet consectetur metus. Ut sit amet tellus accumsan',
            price: '$15',
        }
    ]

    render() {
        return <div className="G-container">
            <div className="food-box">
                <div className="buttons">
                    <button>Pizza</button>
                    <button>Salad</button>
                    <button>Noodle</button>
                </div>
                <div className="food">
                    {this.foodMenu.map((item, index) => {
                        return <div className="food-boxes" key={index}>
                            <div className="img-box" style={{backgroundImage:`url('${item.img}')`}}></div>
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <span>{item.price}</span>
                        </div>
                    })}

                </div>
            </div>
        </div>
    }
}

export default FoodBox