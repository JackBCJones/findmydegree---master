import style from 'styled-components';

export const B = style.div `
    background-color: ${(props) => props.color};
`;

export const Title = style.h4 `
    color: ${(props) => props.text}
`;

export const Text = style.p `
    color: ${(props) => props.text}
`;