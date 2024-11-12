import {IProps} from "./props";
import styled, {css} from "styled-components";
import {RefObject} from "react";

const StyledButton = styled.button<IProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  white-space: nowrap;
  position: ${props => props.$position || undefined};
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  flex: ${props => props.$flex || undefined};
  opacity: ${props => props.$opacity || undefined};
  background: ${props => props.$background || undefined};
  border-radius: ${props => props.$borderRadius || undefined};
  
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
      case "no-style":
        return css`
          background: transparent;
          color: ${props => props.theme.colors.accentBrandNormal};
          outline: 2px solid transparent;
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
      case "no-size":
        return css`
          border-radius: 8px;
          padding: 0;
        `
    }
  }}
  
  padding: ${props => props.$padding && props.$padding};
  
  &[disabled] {
    background: ${props => props.theme.colors.AccentBrandFaded};
    color: #cddaea;

    &:hover,
    &:focus,
    &:active {
      background: ${props => props.theme.colors.AccentBrandFaded};
      color: #cddaea;
      border-color: transparent;
      cursor: default;
    }
  }
`

const Button = (props: IProps) => {
  return (
    <StyledButton {...props} ref={props.$ref as RefObject<HTMLButtonElement>} />
  );
}

export default Button;
