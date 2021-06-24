import * as styles from "./blog-post.module.css";
// import { differenceInDays, formatDistance, format } from "date-fns";
// import AuthorList from "./author-list";
import Container from "./container";
import PortableText from "./portableText";
import React from "react";
import { buildImageObj } from "../lib/helpers";
import { imageUrlFor } from "../lib/image-url";
import BlogCategories from "./blog-categories";
import Arrow from "../assets/svg/arrow.svg";

function BlogPost(props) {
  const { _rawBody, copyright, categories, title, mainImage } = props;
  return (
    <article className="px-6 py-10 flex flex-row">
      <div className="flex flex-row items-start">
        <p className="post-title opacity-70 flex flex-row">projects</p>
        <img src={Arrow} alt="Arrow" className="pt-2 px-4" />
      </div>

      <div>
        <h2 className="post-title">{title}</h2>
        <div className="pl-10">
          <BlogCategories categories={categories} />
        </div>
        {mainImage && mainImage.asset && (
          <div className="flex align-middle justify-center py-10">
            <img
              className="w-64"
              src={imageUrlFor(buildImageObj(mainImage)).url()}
              alt={mainImage.alt}
            />
          </div>
        )}
        <Container>
          <div className={styles.grid}>
            <div className={styles.mainContent}>
              {_rawBody && <PortableText blocks={_rawBody} />}
            </div>
            <aside className={styles.metaContent}></aside>
            <div className="flex align-middle justify-center">
              <p>{copyright}</p>
            </div>
          </div>
        </Container>
      </div>
    </article>
  );
}

export default BlogPost;
