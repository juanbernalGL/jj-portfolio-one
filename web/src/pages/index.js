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
  const {
    title,
    description,
    footer,
    downloadLabel,
    mainImage,
    buttonLabel,
  } = page;

  return (
    <Layout>
      <div className="p-4 md:p-16 flex flex-col md:flex-row gap-6">
        <div>
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
        <div>
          {mainImage && mainImage.asset && (
            <div className="flex flex-col align-middle justify-items-center justify-center pt-10 ">
              <img
                className="w-64 z-0"
                src={imageUrlFor(buildImageObj(mainImage)).url()}
                alt={mainImage.alt}
              />
              <button className=" -mt-12 ml-16 z-10 w-28 h-10 font-merri text-sm bg-white border-b-4 border-r-4 border-error flex items-center justify-around">
                {buttonLabel}
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
    // <Layout>
    //   <SEO
    //     title={site.title}
    //     description={site.description}
    //     keywords={site.keywords}
    //   />
    //   {/* <Container> */}
    //   <h1 hidden>Welcome to {site.title}</h1>
    //   {postNodes && (
    //     <BlogPostPreviewList
    //       title=""
    //       nodes={postNodes}
    //       browseMoreHref="/archive/"
    //     />
    //   )}
    //   {/* </Container> */}
    // </Layout>
  );
};

export default IndexPage;
