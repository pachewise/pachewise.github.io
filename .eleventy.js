const sass = require("sass");
const eleventySass = require("eleventy-sass");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPlugin(eleventySass);
  eleventyConfig.addPassthroughCopy("assets/img");
  eleventyConfig.addPassthroughCopy("CNAME");

  // CVE-2022-25948, see https://github.com/advisories/GHSA-45rm-2893-5f49
  // fixed in liquidjs > 10.0.0
  eleventyConfig.setLiquidOptions({
    ownPropertyOnly: true,
  });
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
