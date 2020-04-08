module.exports = {
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current"
        }
      }
    ]
  ],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./src"],
        alias: {
          test: "./test",
          underscore: "lodash"
        }
      }
    ]
  ]
};
