import React, { useState } from "react";
import { graphql } from "gatsby";
import { useForm } from "react-hook-form";
import { init, send } from "emailjs-com";

import BlockContent from "../components/block-content";
import Container from "../components/container";
import GraphQLErrorList from "../components/graphql-error-list";
import SEO from "../components/seo";
import Layout from "../containers/layout";
import { USER_ID, TEMPLATE_ID, SERVICE_ID } from "../../emailkey";

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
  init(USER_ID);
  const {
    register,
    handleSubmit,
    formState: { errors: frmError },
    reset,
  } = useForm({ defaultValues: { comments: "anything" } });

  const [isSent, setIsSent] = useState(false);

  const onSubmit = (data) => {
    const template_params = { ...data };
    send(SERVICE_ID, TEMPLATE_ID, template_params).then(
      (result) => {
        reset({ comments: "" });
        console.log(result);
        setIsSent(true);
        // alert("Message Sent, We will get back to you shortly", result.text);
      },
      (error) => {
        console.log("error :>> ", error);
        setIsSent(false);
        // alert("An error occurred, Please try again", error.text);
      }
    );
  };

  React.useEffect(async () => {
    const result = await fetch("./api/formValues.json"); // result: { firstName: 'test', lastName: 'test2' }
    console.log("result :>> ", result);
    reset({ comments: "" }); // asynchronously reset your form values
  }, [reset]);

  if (errors) {
    return (
      <Layout>
        <GraphQLErrorList errors={errors} />
      </Layout>
    );
  }

  const page = data && data.page;

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
                <div className="flex flex-col w-full md:w-1/2">
                  <input
                    id="email"
                    type="email"
                    className={
                      frmError.email ? `contact-input-error` : `contact-input`
                    }
                    placeholder="email goes here"
                    {...register("email", {
                      required: "please fill your email",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    })}
                  ></input>
                  {frmError.email && (
                    <span className="error-msg" role="alert">
                      {frmError.email.message}
                    </span>
                  )}
                </div>
                <div className="flex flex-col w-full md:w-1/2">
                  <input
                    id="name"
                    type="text"
                    className={
                      frmError.name ? `contact-input-error` : `contact-input`
                    }
                    placeholder="Your name or company goes here"
                    {...register("name", {
                      required: "Please fill your company name",
                      minLength: {
                        value: 4,
                        message: "min length is 4",
                      },
                    })}
                  ></input>
                  {frmError.name && (
                    <span className="error-msg">{frmError.name.message}</span>
                  )}
                </div>
              </div>
              <textarea
                type="text"
                name="project"
                rows="4"
                className={
                  frmError.project
                    ? `contact-textarea-error`
                    : `contact-textarea`
                }
                placeholder="Project? Job Opportunity? Freelance? Demand? Friendship? All that goes here"
                {...register("project", {
                  required: "Please fill project information",
                  minLength: {
                    value: 10,
                    message: "min length is 10",
                  },
                })}
              ></textarea>
              {frmError.project && (
                <span className="error-msg">{frmError.project.message}</span>
              )}
              <input
                type="text"
                name="comments"
                className="contact-input mt-2"
                placeholder="Would you rather fight 100 duck-sized horses or 1 horse-sized duck? Elaborate"
                {...register("comments", {})}
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
        {isSent && (
          <div className="w-full flex justify-center text-purple font-barlow text-lg">
            I got it! Thanks! Will get back to you ASAP
          </div>
        )}
      </Container>
    </Layout>
  );
};

export default ContactPage;
