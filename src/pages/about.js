import { Link } from "gatsby";
import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const AboutPage = () => {
    return (
        <Layout>
            <Head title="About" />
            <h1>About</h1>
            <p>bio here</p>
            <p>You can contact me <Link to="/contact">here</Link></p>
        </Layout>
    )
};

export default AboutPage;