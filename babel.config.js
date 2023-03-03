module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          alias: {
            components: "./src/components",
            context: "./src/context",
            services: "./src/services",
            generated: "./src/generated",
          },
        },
      ],
    ],
  };
};
