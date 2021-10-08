const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");

module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setTemplateFormats([
    "md",
    "njk",
    "css",
    "png",
    "svg",
    "mp4",
    "jpg",
  ]);

  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
  });

  let md = markdownIt({
    html: true,
  }).use(markdownItAnchor, {
    permalink: markdownItAnchor.permalink.headerLink(),
    tabIndex: false,
  });

  eleventyConfig.setLibrary("md", md);

  eleventyConfig.addFilter("excerpt", function (content) {
    let excerpt = null;

    // The start and end separators to try and match to extract the excerpt
    const separatorsList = [
      { start: "<!-- Excerpt Start -->", end: "<!-- Excerpt End -->" },
      { start: "<p>", end: "</p>" },
    ];

    separatorsList.some((separators) => {
      const startPosition = content.indexOf(separators.start);
      const endPosition = content.indexOf(separators.end);

      if (startPosition !== -1 && endPosition !== -1) {
        excerpt = content
          .substring(startPosition + separators.start.length, endPosition)
          .trim();
        return true; // Exit out of array loop on first match
      }
    });

    return excerpt;
  });

  return {
    dir: {
      input: "src",
    },
    markdownTemplateEngine: "njk",
  };
};
