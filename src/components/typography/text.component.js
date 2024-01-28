import styled from "styled-components/native";

const defaultTextStyles = (theme) => `
font-family:${theme.fonts.body};
font-weight: ${theme.fontweights.regular};
color: ${theme.colors.text.primary};
flex-wrap: wrap;
margin-top: 0px;
margin-bottom: 0px;
`;

const body = (theme) => `
font-size:${theme.fontSizes.body};
`;

const hint = (theme) => `
font-size:${theme.fontSizes.body};
`;

const error = (theme) => `
color:${theme.colors.text.error};
`;

const caption = (theme) => `
font-size:${theme.fontSizes.caption};
font-weight: ${theme.fontweights.bold};
`;

const label = (theme) => `
font-family:${theme.fonts.heading};
font-size:${theme.fontSizes.body};
font-weight: ${theme.fontweights.medium};
`;

const variants = {
  body,
  label,
  caption,
  error,
  hint,
};

export const text = styled.Text`
  ${({ theme }) => defaultTextStyles(theme)}
  ${({ variant, theme }) => variants[variant](theme)}
`;
