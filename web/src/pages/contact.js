import React from "react";
import { graphql } from "gatsby";
import BlockContent from "../components/block-content";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
// import PeopleGrid from '../components/people-grid'
import SEO from "../components/seo";
// import { useForm } from "../components/hooks/useForm";
import Layout from "../containers/layout";
import { useForm } from "react-hook-form";
// import { mapEdgesToNodes, filterOutDocsWithoutSlugs } from '../lib/helpers'

// import { responsiveTitle1 } from "../components/typography.module.css";

export const query = graphql`
  query ContactPageQuery {
    page: sanityPage(_id: { regex: "/(drafts.|)contact/" }) {
      id
      title
      _rawBody
    }
  }
`;

const ContactPage = (props) => {
  const { data, errors } = props;

  // const [formValues, handleInputChange] = useForm({
  //   name: "",
  //   email: "",
  //   project: "",
  //   comments: "",
  // });

  // const { name, email, project, comments } = formValues;

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors: frmError }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  }; // your form submit function which will invoke after successful validation

  console.log(watch("example"));

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
        <div className="container p-16">
          <h1 className="contact-title">{page.title}</h1>
          <BlockContent blocks={page._rawBody || []} />
          <form
            className="flex flex-row w-full"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col w-full">
              <div className="flex flex-row w-full gap-2">
                <input
                  type="email"
                  name="email"
                  className="contact-input md:w-1/2"
                  placeholder="email goes here"
                  {...register("name", { required: true })}
                ></input>
                {frmError.name && <span>This field is required</span>}
                <input
                  type="text"
                  name="name"
                  className="contact-input md:w-1/2"
                  placeholder="Your name or company goes here"
                ></input>
              </div>
              <input
                type="text"
                name="project"
                className="contact-input"
                placeholder="Project? Job Opportunity? Freelance? Demand? Friendship? All that goes here"
              ></input>
              <input
                type="text"
                name="comments"
                className="contact-input"
                placeholder="Would you rather fight 100 duck-sized horses or 1 horse-sized duck? Elaborate"
              ></input>
            </div>
            <button className="contact-btn">
              <span>s</span>
              <span>e</span>
              <span>n</span>
              <span>d</span>
            </button>
          </form>
        </div>
      </Container>
    </Layout>
  );
};

export default ContactPage;
