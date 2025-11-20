import { IoLogoFacebook,
    IoLogoInstagram,
    IoLogoTwitter,
    IoMdMail,
    IoMdCall } from "react-icons/io";



function Contacts(){
    return(
        <>
            <div className="contacts">
                <h2>Need a skilled VA to transform your ideas into stunning <span className="focusText">visual content</span>? Reach out today to discuss your project.</h2>
                <div className="line"></div>                
            <div className="details">
            {/* <p className="more">TO SEE MORE OF MY WORK, VISIT MY SOCIALS:</p> */}
                <div className="socials">
                <h3>Socials</h3>
                    <ul>
                        <li><a target="blank" href="https://www.facebook.com/oluwaniffy0101"><span className="icons"><IoLogoFacebook/></span>Facebook</a></li>
                        <li><a target="blank" href="https://www.instagram.com/virtualrighthand7/"><span className="icons"><IoLogoInstagram/></span>Instagram</a></li>
                        <li><a target="blank" href="https://x.com/niffy_xx3"><span className="icons"><IoLogoTwitter/></span>Twitter</a></li>
                    </ul>
                </div>
                <div className="contact">
                    <h3>Contacts</h3>
                    <ul>
                        <li><a href="#"><span className="icons"><IoMdMail/></span>portabletummyshe@gmail.com</a></li>
                        <li><a href="#"><span className="icons"><IoMdCall/></span>+2347066563676</a></li>
                    </ul>
                </div>
            </div>
            </div>
        </>
    )
}

export default Contacts;