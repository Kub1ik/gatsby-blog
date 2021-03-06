import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';

import Layout from '../components/layout';
import * as blogStyles from './blog.module.scss';
import Head from '../components/head';

const BlogPage = () => {
  //querying data from markdown files
  /* const data = useStaticQuery(graphql`
        query {
            allMarkdownRemark {
                edges {
                  node {
                    frontmatter {
                      title
                      date
                    }
                    fields {
                      slug
                    }
                  }
                }
            }
        }
    `)

   return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>
                  {edge.node.frontmatter.title}

                </h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  ) */

  //querying data from contentful
  const data = useStaticQuery(graphql`
  query {
    allContentfulBlogPost (
      sort: {
        fields:publishedDate,
        order:DESC
      }
    ) {
      edges {
        node {
          title
          slug
          publishedDate(
            formatString:"Do MMMM YYYY"
          )
        }
      }
    }
  }
`)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge) => {
          return (
            <li className={blogStyles.post}>
              <Link to={`/blog/${edge.node.slug}`}>
                <h2>
                  {edge.node.title}

                </h2>
                <p>{edge.node.publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
};

export default BlogPage;