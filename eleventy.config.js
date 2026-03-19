module.exports = function(eleventyConfig) {
  // Copy static assets
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("robots.txt");

  // Add limit filter
  eleventyConfig.addFilter("limit", function(arr, count) {
    if (!Array.isArray(arr)) return arr;
    return arr.slice(0, count);
  });

  // Add divide filter
  eleventyConfig.addFilter("divide", function(value, divisor) {
    const a = Number(value);
    const b = Number(divisor);
    if (isNaN(a) || isNaN(b) || b === 0) return 0;
    return a / b;
  });

  // Add round filter
  eleventyConfig.addFilter("round", function(value) {
    return Math.round(Number(value));
  });

  // Add wordcount filter
  eleventyConfig.addFilter("wordcount", function(content) {
    const text = content.replace(/<[^>]+>/g, '');
    return text.split(/\s+/).length;
  });

  // Add striptags filter
  eleventyConfig.addFilter("striptags", function(content) {
    return content.replace(/<[^>]+>/g, '');
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
