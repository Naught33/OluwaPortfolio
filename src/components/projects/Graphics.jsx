import { logo,design } from "../../image_assets";

function Graphics(){
    return [
        <div className="graphics carouselItem">
            <img src={design} alt="budget" />
            <div className="desc">
                <h2>Graphics Design</h2>
                <p>Elevate your brand with stunning graphics that capture attention. I will create eye-catching visuals 
                    that communicate your message effectively across all platforms.</p>
            </div>
        </div>,
        <div className="logo carouselItem">
        <img src={logo} alt="budget" />
        <div className="desc">
            <h2>Logo Design</h2>
            <p>Your logo is the face of your brand, and I am here to design one that
                 truly stands out. With a unique and professional logo, 
                your business will make a lasting impression from the first glance.</p>
        </div>
    </div>

    ];
}

export default Graphics;