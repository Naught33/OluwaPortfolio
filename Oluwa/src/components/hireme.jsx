import React, { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import emailjs from '@emailjs/browser';

function HireMe() {
    // State to manage visibility of the overlay and the hireme div
    const [isVisible, setIsVisible] = useState(true);

    // Function to close the overlay and the hireme div
    const handleClose = () => {
        setIsVisible(false); // Hide the divs
    };

    // State to hold form data
    const [formData, setFormData] = useState({
        job: '',
        email: '',
        description: ''
    });

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const templateParams = {
            email: formData.email,
            description: formData.description,
          };
          
          emailjs
            .send('service_ao9cpbi', 'template_jhh6wzs', templateParams, {
              publicKey: 'yDGdLC2oIT0BJY9jP',
            })
            .then(
              (response) => {
                console.log('SUCCESS!', response.status, response.text);
                alert('Request Successful, Thank You!')
              },
              (err) => {
                console.log('FAILED...', err);
              },
            );
    };

    // Conditionally render the overlay and hireme div based on isVisible state
    if (!isVisible) return null; // Return null if isVisible is false (nothing will render)

    return (
        <>
            <div className="overlay"></div>
            <div className="hireme">
                <h2>Hire Me <span className="icons" onClick={handleClose}>
                    <IoClose/> {/* IoClose icon */}
                </span></h2>
                <form onSubmit={handleSubmit}>
                    <div className="input">
                        <input
                            type="text"
                            name="job"
                            placeholder="Job Title"
                            value={formData.job}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <input
                            type="email"
                            name="email"
                            placeholder="Please enter your email"
                            value={formData.email}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <textarea
                            name="description"
                            id="description"
                            placeholder="Job Description"
                            value={formData.description}
                            onChange={handleChange}
                        />
                    </div>

                    <div className="input">
                        <button className="hotbtn submit" type="submit">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
}

export default HireMe;
