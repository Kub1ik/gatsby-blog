import React from 'react';

import Layout from '../components/layout';
import Head from '../components/head';

const IndexPage = () => {
  return (
    <Layout>
      <Head title="Home" />
      <section>
        <h1>Hello, </h1>
        <h2>Welcome to my humble blog.</h2>
        <small>Background by <a href="https://unsplash.com/@pawel_czerwinski?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Pawel Czerwinski</a> on <a href="https://unsplash.com/s/photos/background-image?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a></small>
      </section>
    </Layout>
  )
};

export default IndexPage;