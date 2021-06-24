import React from "react";

const BlogCategories = ({ categories }) => {
  return (
    <div className="flex flex-row">
      {categories &&
        categories.map((item, index) => (
          <div key={item} className="font-barlow text-xs text-primary py-0">
            {item.title}
            {index < categories.length - 1 && (
              <span className=" font-barlow text-primary py-0 px-1"> • </span>
            )}
          </div>
        ))}
    </div>
  );
};

export default BlogCategories;
