import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>You can reach me on twitter at
                <a href="https://twitter.com/Kub1ik" target="_blank" rel="noreferrer">@Kub1ik</a>
            </p>
        </Layout>
    )
};

export default ContactPage;