import React from "react";
import '../PageStyles/About.css';
import img1 from "../assets/profile_5.jpg";

function About() {
    return (
        <section className="container1" id="about">
            <h2 className="title1">About</h2>
            <div className="content1">
                <div className="profile">
                    <img src={img1} alt="Profile 1" className="aboutImage" />
                </div>
                <div className="profile">
                    <div className="aboutItems">
                        <h3>Riddhi Suvariya</h3>
                        <h4>Software Engineer | CSE Student</h4>
                        <p>
                         My aspiration is to excel as a software engineer capable of developing transformative solutions that streamline processes and minimize human effort. I envision myself leading a dynamic team of passionate developers, leveraging our collective expertise to innovate and deliver impactful software solutions. With each milestone in my journey, I am committed to honing my abilities and contributing meaningfully to the advancement of technology.
                        </p>
                        <div className="additionalInfo">
                            <p>
                                <strong>Birthday:</strong> 15 October 2004<br />
                                <strong>Email:</strong> rsuvariya1510@gmail.com<br />
                                <strong>Age:</strong> 20<br />
                                <strong>Degree:</strong> B.Tech<br />
                                <strong>Phone:</strong> +91 8401428373<br />
                                <strong>City:</strong> Morbi, Gujarat, India
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export { About };
