const sass = require("sass");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("CNAME");
  return {
    dir: {
      input: "./",
      output: "./_site",
      layouts: "./_layouts",
    },
    templateFormats: ["html", "liquid", "md", "njk"],
    passthroughFileCopy: true,
  };
};
