import React, { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from 'react-scroll';
import '../PageStyles/Navbar.css';
import menuIcon from '../assets/img1.jpg';
import closeIcon from '../assets/imgClose.jpg';
import { BsChevronDoubleUp } from "react-icons/bs";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [showButton, setShowButton] = useState(false);

    const handleMenuClick = (event) => {
        if (event.target === event.currentTarget || event.target.closest('.listitems.menuOpen')) {
            setMenuOpen(!menuOpen);
        }
    };

    const scrollToTop = () => {
        scroll.scrollToTop({ smooth: true, duration: 500 });
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <nav className="navbar">
                <a className="title" href="/">Portfolio</a>
                <div className="listhere">
                    <img className="img1"
                        src={menuOpen ? closeIcon : menuIcon}
                        alt="Menu Toggle"
                        onClick={handleMenuClick}
                    />
                    <ul className={`listitems ${menuOpen ? 'menuOpen' : ''}`} onClick={handleMenuClick}>
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="experience"
                                smooth={true}
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="project"
                                smooth={true}
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                Project
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="contact"
                                smooth={true}
                                duration={500}
                                onClick={() => setMenuOpen(false)}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            {showButton && (
                <button className="back-to-top show" onClick={scrollToTop}>
                    <BsChevronDoubleUp />
                </button>
            )}
        </>
    );
}

export { Navbar };
