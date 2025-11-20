import { research } from "../../image_assets";

function Research(){
    return [
        <div className="research carouselItem">
            <img src={research} alt="research" />
            <div className="desc">
                <h2>Research</h2>
                <p>Diving deep into the data! My research skills allow me 
                    to uncover valuable insights and inform strategic decision-making."</p>
            </div>
        </div>
    ];
}

export default Research;