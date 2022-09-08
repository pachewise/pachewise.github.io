module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets");
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
