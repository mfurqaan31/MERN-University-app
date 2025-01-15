import React from "react";
import "./hero.css";
import Title from "../../common/title/Title";
import { Link } from "react-router-dom";
import Back from "../../common/back/Back";
const Hero = () => {
    return (
        <>
            <section className="hero">
                <Title subtitle="WELCOME TO ACADEMIA UNIVERSITY" title="Greetings" />
                <div className="hero-container">
                    <div className="chancellor-note">
                        <div className="chancellor-note-img">
                            <img
                                src="https://thumbs.dreamstime.com/b/vector-illustration-faceless-man-suit-tie-65138894.jpg"
                                alt="img"
                            />
                        </div>
                        <div className="chancellor-warp">
                            <p>
                                I am delighted to welcome you to our digital
                                space, where ideas flourish and connections
                                thrive. As the Chancellor, I am excited about
                                the possibilities that lie ahead and the
                                collective journey we are embarking on. Here,
                                innovation and knowledge converge to shape a
                                brighter future. Explore, engage, and be part of
                                our community dedicated to learning, discovery,
                                and meaningful conversations. Thank you for
                                being part of our online home.
                            </p>
                            <span>Warm regards,</span>
                            <span>Chancellor</span>
                        </div>
                    </div>

                    <button>
                        <Link to="/courses">
                            View Course{" "}
                            <i className="fa fa-long-arrow-alt-right"></i>
                        </Link>
                    </button>
                </div>
            </section>
        </>
    );
};

export default Hero;