import React from "react";

const BlogCategories = ({ categories }) => {
  return (
    <div className="flex flex-row">
      {categories &&
        categories.map((item, index) => (
          <p key={item} className=" font-barlow text-xs text-primary">
            {item.title}
            {index < categories.length - 1 && (
              <span className=" font-barlow text-primary px-1"> • </span>
            )}
          </p>
        ))}
    </div>
  );
};

export default BlogCategories;
