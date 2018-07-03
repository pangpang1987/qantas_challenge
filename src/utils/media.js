import { css } from "styled-components";

const sizes = {
  screen: 1199,
  desktop: 991,
  tablet: 768,
  phone: 575
};

// Iterate through the sizes and create a media template
export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-width: ${sizes[label]}px) {
      ${css(...args)};
    }
  `;
  return acc;
}, {});

export default media;
