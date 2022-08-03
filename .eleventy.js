const markdownIt = require("markdown-it");
const markdownItAnchor = require("markdown-it-anchor");
const pluginSass = require("eleventy-plugin-sass");

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

    eleventyConfig.addPlugin(pluginSass, {
        watch: ["src/**/*.{scss,sass}"],
        cleanCSS: process.env.NODE_ENV === "production",
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
            return `<section class="project-cell">
                <a href="${linkHref}" target="_blank" rel="noopener noreferrer">
                    <img src="${imageSource}" alt="${title} cover">
                    <h3>${title} &Iota; ${date}</h3>
                    <div>${subtitle}</div>
                </a>
            </section>`;
        }
    );

    eleventyConfig.addShortcode(
        "projectcardvideo",
        function (title, date, subtitle, videoSource) {
            return `<section class="project-cell">
                <iframe src="${videoSource}"></iframe>
                <h3>${title} &Iota; ${date}</h3>
                <div>${subtitle}</div>
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
