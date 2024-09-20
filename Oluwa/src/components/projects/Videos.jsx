import { video } from "../../image_assets";

function Videos(){
    return [
        <div className="graphics carouselItem">
            <video src={video} width="300px" controls autoplay></video>
            <div className="desc">
                <h2>Video Content Creation</h2>
                <p>placeholder Text</p>
            </div>
        </div>
    ];
}

export default Videos;