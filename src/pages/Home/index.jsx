import React from "react";
import Description from "../../components/pageDescription";
import FoodBox from "../../components/foodBox";
import OurHistory from "../../components/ourHistory";
import Mango from "../../assets/img/img-01.jpg";

class Home extends React.Component{

    render(){
        return <>
        <Description title={'Welcome to Simple House'} description={'Total 3 HTML pages are included in this template. Header image has a parallax effect. You can feel free to download, edit and use this TemplateMo layout for your commercial or non-commercial websites.'}/>
        <FoodBox/>
        <OurHistory img={Mango} title={'Maecenas nulla neque'} description={'Redistributing this template as a downloadable ZIP file on any template collection site is strictly prohibited. You will need to talk to us for additional permissions about our templates. Thank you.'} readMore={'Read More'}/>
        </>
    }
}

export default Home