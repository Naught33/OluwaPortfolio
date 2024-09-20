import { labeling,customerSupport } from "../../image_assets";

function EmailManagement(){
    return [
        <div className="labeling carouselItem">
            <img src={labeling} alt="labeling screenshot" />
            <div className="desc">
                <h2>Labeling</h2>
                <p>Utilized labeling and starring techniques to streamline email
                     management and prioritize important messages.</p>
            </div>
        </div>,
        <div className="customerSupport carouselItem">
            <img src={customerSupport} alt="customer support screenshot" />
            <div className="desc">
                <h2>Customer Support</h2>
                <p>Efficiently resolved a complex customer support issue using organized
                 email management techniques, including labeling and starring important messages.</p>
            </div>
        </div>
    ];
}

export default EmailManagement;