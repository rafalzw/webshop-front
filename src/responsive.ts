import { css } from 'styled-components';

export const mobile = (props: any) => {
  return css`
    @media only screen and (max-width: 540px) {
      ${props}
    } ;
  `;
};

export const tablet = (props: any) => {
  return css`
    @media only screen and (max-width: 1080px) {
      ${props}
    } ;
  `;
};
