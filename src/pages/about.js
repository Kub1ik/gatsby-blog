import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import portrait from "../images/jamie-street-unsplash.jpg";
import * as aboutStyles from "./about.module.scss";

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <section className={aboutStyles.aboutSection}>
                <header className={aboutStyles.header}>
                    <img className={aboutStyles.portrait} src={portrait} alt="profile" />
                    <p className={aboutStyles.label}>Photo by <a href="https://unsplash.com/@jamie452?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jamie Street</a> on <a href="https://unsplash.com/s/photos/profile-picture?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></p>
                </header>
                <p className={aboutStyles.bio}>
                    Hi, my name is Lucy and I am a dog. I like to just lay around the house, bark on a mailman and I especially like going on very long walks. Oh and I am also an occasional blogger.
                    <br /><br />
                    You can contact me <Link to="/contact">here</Link>
                </p>
            </section>
        </Layout>
    )
};

export default AboutPage;