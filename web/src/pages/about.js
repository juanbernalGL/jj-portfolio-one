// import React from 'react'
// import { Link } from 'gatsby'

// const About = () => {
//   return (
//     <div>
//       contact
//       <Link to="/">Home</Link>
//     </div>
//   )
// }

// export default About

import React from "react";
import { graphql } from "gatsby";
import BlockContent from "../components/block-content";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
// import PeopleGrid from '../components/people-grid'
import SEO from "../components/seo";
import Layout from "../containers/layout";
// import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

// import { responsiveTitle1 } from "../components/typography.module.css";

import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";

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

  query AboutPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)about/" }) {
      id
      title
      subtitle
      mainImage {
        ...SanityImage
        alt
      }
      _rawBody
    }
  }
`;

const AboutPage = (props) => {
  const { data, errors } = props;

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;
  // const personNodes =
  //   data &&
  //   data.people &&
  //   mapEdgesToNodes(data.people).filter(filterOutDocsWithoutSlugs)

  if (!page) {
    throw new Error(
      'Missing "About" page data. Open the studio at http://localhost:3333 and add "About" page data and restart the development server.'
    );
  }

  return (
    <Layout>
      <SEO title={page.title} />
      <Container>
        <div className="flex flex-row">
          <div className=" min-w-max bg-gradient-to-b from-secondary to-electric-green pt-0 pb-3 pr-3">
            <img
              src={imageUrlFor(buildImageObj(page.mainImage))
                .auto("format")
                .url()}
              alt={page.mainImage.alt}
            />
          </div>
          <div className="flex flex-col -ml-8">
            <h1 className="about-title">{page.title}</h1>
            <div className="bg-primary px-8 py-6">
              <div dangerouslySetInnerHTML={{ __html: page.subtitle }} />
            </div>
          </div>
        </div>

        <BlockContent blocks={page._rawBody || []} />
        {/* <div className="bg-primary px-8 py-6">
          <p className="text-white text-lg font-barlow">
            My name is Jesús, but everyone calls me{" "}
            <span className="text-error">Chuz.</span> I am a digital product
            designer & Illustrator from Costa Rica, currently working for
            Gorilla Gorilla Logic. I come from a diverse background in design.
            currently focused on UI/UX but if you have any other design or
            illustration project in mind, contact me and let’s have a talk.
          </p>
        </div> */}
        {/* {personNodes && personNodes.length > 0 && (
          <PeopleGrid items={personNodes} title="People" />
        )} */}
      </Container>
    </Layout>
  );
};

export default AboutPage;
