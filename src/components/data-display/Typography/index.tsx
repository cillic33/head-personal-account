import {Props} from "./props";
import styled, {css} from "styled-components";

const StyledTypography = styled.span<Props>`
  ${props => {
    switch (props.$variant) {
      case "h2":
        return css`
          font-size: 24px;
          line-height: 32px;
          font-weight: 700;
        `
      case "h3":
        return css`
          font-size: 18px;
          line-height: 24px;
          font-weight: 700;
        `
      case "h4":
        return css`
          font-size: 16px;
          line-height: 24px;
          font-weight: 700;
        `
      case "body-regular":
        return css`
          font-size: 14px;
          line-height: 20px;
          font-weight: 500;
        `
      case "body-semibold":
        return css`
          font-size: 14px;
          line-height: 20px;
          font-weight: 600;
        `
      case "caption-regular":
        return css`
          font-size: 12px;
          line-height: 16px;
          font-weight: 500;
        `
      case "caption-semibold":
        return css`
          font-size: 12px;
          line-height: 16px;
          font-weight: 600;
        `
    }
  }}
  
  color: ${props => props.$color || props.theme.colors.textIconBasePrimary};
  padding: ${props => props.$padding || undefined};
  white-space: ${props => props.$nowrap && 'nowrap'};
  text-align: ${props => props.$align || undefined};
`

const Typography = (props: Props): JSX.Element => {
  return (
    <StyledTypography {...props} />
  );
}

export default Typography;