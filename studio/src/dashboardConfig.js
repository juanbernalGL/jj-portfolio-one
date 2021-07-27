export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId: "60d0aaf4837d62a6e9c9868f",
                  title: "Sanity Studio",
                  name: "jj-portfolio-one-studio",
                  apiId: "362f1510-a451-41c3-b095-8747db6c16b7",
                },
                {
                  buildHookId: "60d0aaf4837d62a9fac985ba",
                  title: "Developer Website",
                  name: "jj-portfolio-one",
                  apiId: "6510a429-65e9-4fd5-8c96-e2bdfb04f986",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value: "https://github.com/juanbernalGL/jj-portfolio-one",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://jj-portfolio-one.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
