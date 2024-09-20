import { alx,dw } from "../../image_assets";


function Certificates(){
    return(
        <>
        <div className="certificates">
            <div className="alx certificate">
                <img src={alx} alt="alx certificate" />
                <p>ALX Certificate</p>
            </div>
            <div className="dw certificate">
                <img src={dw} alt="dw certificate" />
                <p>DW Certificate</p>
            </div>
        </div>
        </>
    )
}

export default Certificates;