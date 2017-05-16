module.exports = (config) => [
    require("stylelint")(),
    require("postcss-cssnext")({
      browsers: "last 2 versions",
      features: {
        customProperties: {
          variables: {
            maxWidth: "60rem",
            colorPrimaryDark: "#436E30",
            colorPrimary: "#69AC4A",
            colorSecondaryDark: "#99621E",
            colorSecondary: "#D38B5D",
            colorNeutralDark: "#474A48",
            colorNeutral: "#909590",
            colorNeutralLight: "#E0E2E0",
            colorText: "#101E0C",
          },
        },
      },
    }),
    require("postcss-reporter")(),
    ...!config.production ? [
      require("postcss-browser-reporter")(),
    ] : [],
  ]
