import { css } from 'styled-components';

export const animationTransition=(color: string, time: string) => css`
    background-color: ${color};
    transition: ${time} ease-in-out;
    border-color:${color}
`;
export const breakpoints={
    tablets:'1366px',
    phones:'37.5rem'
}