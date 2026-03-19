module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Add limit filter (IMPORTANT - was missing!)
  eleventyConfig.addFilter("limit", function(arr, count) {
    if (!Array.isArray(arr)) return arr;
    return arr.slice(0, count);
  });

  // Add date filter
  eleventyConfig.addFilter("dateDisplay", function(date) {
    return new Date(date).toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  });

  // Add excerpt filter
  eleventyConfig.addFilter("excerpt", function(content) {
    const text = content.replace(/<[^>]+>/g, '');
    return text.substring(0, 200) + "...";
  });

  return {
    dir: {
      input: ".",
      output: "_site",
      includes: "_includes"
    },
    templateFormats: ["md", "njk", "html"],
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk"
  };
};
