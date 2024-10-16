import {IProps} from "./props";
import styled, {css} from "styled-components";
import {RefObject} from "react";

const StyledButton = styled.button<IProps>`
  display: flex;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  
  ${({$isActive, ...props}) => {
    switch (props.$variant) {
      case "primary":
        return css`
          background: ${props => props.theme.colors.accentFaintBrandQuaternary};
          color: ${props => props.theme.colors.accentBrandNormal};
          outline: 2px solid transparent;

          &:hover {
            background: ${props => props.theme.colors.accentFaintBrandTertiary};
          }

          &:focus {
            outline: 2px solid ${props => props.theme.colors.accentFaintBrandPrimary};
          }

          &:active {
            background: ${props => props.theme.colors.accentFaintBrandSecondary};
            outline: 2px solid transparent;
          }
        `
      case "dark":
        return css`
          background: ${props => props.theme.colors.accentBrandNormal};
          color: #ffffff;
          outline: 2px solid transparent;

          &:hover {
            background: ${props => props.theme.colors.accentBrandClarified};
          }

          &:focus {
            outline: 2px solid ${props => props.theme.colors.accentFaintBrandPrimary};
          }

          &:active {
            background: ${props => props.theme.colors.accentBrandDarkened};
            outline: 2px solid transparent;
          }
        `
      case "light":
        return css`
          background: #ffffff;
          color: ${props => props.theme.colors.textIconBaseSecondary};
          outline: 2px solid transparent;

          &:hover {
            color: ${props => props.theme.colors.accentBrandNormal};
            background: ${props => props.theme.colors.accentFaintBrandQuaternary};
          }

          &:focus {
            outline: 2px solid ${props => props.theme.colors.accentFaintBrandPrimary};
          }

          &:active {
            background: ${props => props.theme.colors.accentFaintBrandSecondary};
            outline: 2px solid transparent;
          }

          color: ${props => $isActive === true && props.theme.colors.accentBrandNormal};
          background: ${props => $isActive  && props.theme.colors.accentFaintBrandQuaternary};
        `
    }
  }}
  
  ${props => {
    switch (props.size) {
      case "s":
        return css`
          font-weight: 600;
          font-size: 14px;
          line-height: 20px;
          border-radius: 4px;
          padding: 5px 7px;
        `
      case "m":
        return css`
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          border-radius: 8px;
          padding: 7px 19px;
        `
      default:
        return css`
          font-weight: 600;
          font-size: 16px;
          line-height: 24px;
          border-radius: 8px;
          padding: 7px 19px;
        `
    }
  }}
  
  padding: ${props => props.$padding && props.$padding};
  
  &[disabled] {
    background: ${props => props.theme.colors.onSurfaceFaintTertiary};
    color: ${props => props.theme.colors.textIconBaseTertiary};

    &:hover,
    &:focus,
    &:active {
      background: ${props => props.theme.colors.onSurfaceFaintTertiary};
      color: ${props => props.theme.colors.textIconBaseTertiary};
      border-color: transparent;
      cursor: default;
    }
  }
`

const Button = (props: IProps): JSX.Element => {
  return (
    <StyledButton {...props} ref={props.$ref as RefObject<HTMLButtonElement>} />
  );
}

export default Button;
