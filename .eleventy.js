import * as sass from "sass";
import * as path from "node:path";


export default async function (eleventyConfig) {
  eleventyConfig.addTemplateFormats("scss");
  // Creates the extension for use
	eleventyConfig.addExtension("scss", {
		outputFileExtension: "css", // optional, default: "html"

		// `compile` is called once per .scss file in the input directory
		compile: async function (inputContent, inputPath) {
      let parsed = path.parse(inputPath);

      let result = sass.compileString(inputContent, {
        loadPaths: [
          parsed.dir || ".",
          this.config.dir.includes
        ]
      });
			// This is the render function, `data` is the full data cascade
			return async (data) => {
				return result.css;
			};
    },
    compileOptions: {
      permalink: function (contents, inputPath) {
        let parsed = path.parse(inputPath);
        if (parsed.name.startsWith("_")) {
          return false;
        }
      }
    }
	});
  eleventyConfig.addPassthroughCopy("src/assets/img");
  eleventyConfig.addPassthroughCopy("CNAME");

  return {
    dir: {
      input: "src",
      output: "./_site",
    },
    templateFormats: ["html", "liquid", "md", "njk"],
    passthroughFileCopy: true,
  };
};
