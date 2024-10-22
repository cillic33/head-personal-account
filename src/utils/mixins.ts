import {css} from "styled-components";

export const scroll = css`
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${props => props.theme.colors.onSurfaceFaintTertiary};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: ${props => props.theme.colors.onSurfaceFaintPrimary};
    cursor: pointer;
  }

  @-moz-document url-prefix() {
    scrollbar-width: thin;
    scrollbar-color: ${props => props.theme.colors.onSurfaceFaintPrimary} ${props => props.theme.colors.onSurfaceFaintTertiary};
  }
`
