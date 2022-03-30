import React from "react";

import Layout from "../components/layout";
import Head from "../components/head";
import * as contactStyles from './contact.module.scss';

const ContactPage = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <h1>Contact</h1>
            <p>You can reach me on <a href="https://twitter.com" target="_blank" rel="noreferrer">twitter</a> or contact me through the form below.</p>
            <form className={contactStyles.form}>
                <label for="name">Full name:
                    <input type="text" id="name" placeholder="name" />
                </label>
                <label for="email">Email:
                    <input type="email" id="email" placeholder="email@example.com" />
                </label>
                <label for="message">Enter your message:
                    <textarea id="message" placeholder="message" />
                </label>
                <button type="submit">Send</button>
            </form>
        </Layout>
    )
};

export default ContactPage;