import React from "react";
import {graphql} from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";

export default function BlogPost({data, pageContext}) {
    console.log('pagecontext', pageContext)
    const post = data.markdownRemark
    return (
        <Layout>
            <SEO title={post.frontmatter.title} description={post.excerpt} />
            <h1>{post.frontmatter.title}</h1>
            <h3>{pageContext.slug}</h3>
            <div dangerouslySetInnerHTML={{ __html: post.html}}></div>
        </Layout>
    )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`
