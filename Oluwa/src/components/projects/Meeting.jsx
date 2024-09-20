import { agenda } from "../../image_assets";

function Meeting(){
    return [
        <div className="meeting carouselItem">
            <img src={agenda} alt="meeting agenda" />
            <div className="desc">
                <h2>Agenda</h2>
                <p>Keep your meetings on track with expertly crafted agendas. I will ensure each
                     session is focused, organized, and aligned with your goals, so no time is wasted.</p>
                <p>
                    <a target="_blank" href="https://docs.google.com/document/d/1xQKwdCQRFRQTUFN8N1wrCKuW1W82WzQANBo1Af_PQus/edit">
                    See full project here →
                    </a>
                </p>
            </div>
        </div>
    ];
}

export default Meeting;