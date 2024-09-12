const UpgradeHelper = require("@11ty/eleventy-upgrade-help");


module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("CNAME");

  eleventyConfig.addPlugin(UpgradeHelper);

  return {
    dir: {
      input: ".",
      output: "./_site",
      layouts: "./_layouts",
    },
    templateFormats: ["html", "liquid", "md", "njk"],
    passthroughFileCopy: true,
  };
};
