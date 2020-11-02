const size = {
  desktop: "2560px",
  laptop: "1920px",
  tablet: "1024px",
  mobile: "480px",
};

export const device = {
  mobile: `(max-width: ${size.mobile})`,
  tablet: `(max-width: ${size.tablet})`,
  laptop: `(max-width: ${size.laptop})`,
  desktop: `(max-width: ${size.desktop})`,
};
