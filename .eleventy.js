const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const PostCSSPlugin = require("eleventy-plugin-postcss");

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
        "gif",
        "js",
        "ico"
    ]);

    eleventyConfig.addPlugin(PostCSSPlugin);

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

    eleventyConfig.addShortcode(
        "projectcard",
        function (title, date, subtitle, linkHref, imageSource) {
            return `<section class="projectcard-cell">
                <a href="${linkHref}" class="hover-image-js">
                    <div class="projectcard-image-display">
                        <img class="projectcard-image" src="/img/${imageSource}.png" alt="${title} img" loading="lazy" />
                        <img class="projectcard-image ovelay-image hidden" src="/gif/${imageSource}.gif" alt="${title} gif" loading="lazy" />
                    </div>
                    <h3>${title} &Iota; ${date}</h3>
                </a>
                <div class="projectcard-description">${subtitle}</div>
            </section>`;
        }
    );

    return {
        dir: {
            input: "src",
        },
        markdownTemplateEngine: "njk",
    };
};
