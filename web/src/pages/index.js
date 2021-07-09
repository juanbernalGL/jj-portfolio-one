import React from "react";
import { graphql } from "gatsby";
// import {
//   filterOutDocsPublishedInTheFuture,
//   filterOutDocsWithoutSlugs,
//   mapEdgesToNodes,
// } from "../lib/helpers";
// import BlogPostPreviewList from "../components/blog-post-preview-list";
// import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
// import SEO from "../components/seo";
import Layout from "../containers/layout";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import Icon from "../assets/images/Download.png";
import SocialMedia from "../components/SocialMedia";

export const query = graphql`
  fragment SanityImage on SanityMainImage {
    crop {
      _key
      _type
      top
      bottom
      left
      right
    }
    hotspot {
      _key
      _type
      x
      y
      height
      width
    }
    asset {
      _id
    }
  }

  query HomePageQuery {
    page: sanityHome {
      id
      title
      mainImage {
        ...SanityImage
        alt
      }
      description
      footer
      buttonLabel
      downloadLabel
    }
  }
`;

const IndexPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;
  console.log(data);
  const { title, description, footer, downloadLabel, mainImage } = page;

  return (
    <Layout>
      <div className="p-4 md:p-16 flex flex-col md:flex-row gap-6 w-full">
        <div className="w-5/6 md:w-4/6">
          <div>
            <h1 className="font-abril text-7xl py-8">{title}</h1>
          </div>
          <div dangerouslySetInnerHTML={{ __html: description }} />
          <button className="my-12 h-12 w-80 font-merri text-sm bg-gradient-to-b from-secondary to-electric-green border border-primary flex items-center justify-around">
            <img src={Icon} alt="Download Icon" />
            {downloadLabel}
          </button>
          <div dangerouslySetInnerHTML={{ __html: footer }} />
          <SocialMedia />
        </div>
        <div className="flex flex-row pt-10 w-full md:w-2/6 justify-end order-first md:order-last">
          {mainImage && mainImage.asset && (
            <img
              className="w-48 h-60"
              src={imageUrlFor(buildImageObj(mainImage)).url()}
              alt={mainImage.alt}
            />
          )}
        </div>
        {/* <a
          href="#"
          data-title="/chi•ro•TEo/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      The action&#10; of chirotear.&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                      “Chuz likes to chirotear all day”"
        >
          Link
        </a> */}
      </div>
    </Layout>
  );
};

export default IndexPage;
