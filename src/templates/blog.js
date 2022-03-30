import React from "react";
import { graphql } from "gatsby";
import { renderRichText } from "gatsby-source-contentful/rich-text";
import { BLOCKS } from "@contentful/rich-text-types"

import Layout from '../components/layout';
import Head from "../components/head";
import * as blogStyles from './blog.module.scss';

//for markdown
/* export const query = graphql`
    query ($slug: String!) {
        markdownRemark (fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                date
            }
            html
        }
    }
` 

const Blog = (props) => {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}></div>
        </Layout>
    )
}; */

//for contentful
export const query = graphql`
query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(formatString: "MMMM Do, YYYY")
      body {
        raw
        references {
            title
            ... on ContentfulAsset {
              contentful_id
              __typename
              file {
                url
              }
            }
        }      
      }
    }
  }
`

const Blog = (props) => {
    const options = {
        renderNode: {
            [BLOCKS.EMBEDDED_ASSET]: node => {
                return (
                  <>
                    <img src={node.data.target.file.url} 
                        alt={node.data.target.title} />
                  </>
                )
            }
        }
    }

    return (
        <Layout>
            <Head title={props.data.contentfulBlogPost.title} />
            <h1 className={blogStyles.heading}>{props.data.contentfulBlogPost.title}</h1>
            <small className={blogStyles.publishedDate}>{props.data.contentfulBlogPost.publishedDate}</small>
            {renderRichText(props.data.contentfulBlogPost.body, options)}
        </Layout>
    )
};

export default Blog;