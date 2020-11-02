const size = {
  desktop: "2560px",
  laptop: "1024px",
  tablet: "768px",
  mobile: "425px",
};

export const device = {
  mobile: `(min-width: ${size.mobile})`,
  tablet: `(min-width: ${size.tablet})`,
  laptop: `(min-width: ${size.laptop})`,
  desktop: `(min-width: ${size.desktop})`,
};
