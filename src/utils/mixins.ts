import {css} from "styled-components";
import {theme} from "@utils/theme/theme";

export const scroll = css`
  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background-color: ${theme.colors.onSurfaceFaintTertiary};
    border-radius: 12px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: ${theme.colors.onSurfaceFaintPrimary};
    cursor: pointer;
  }

  @-moz-document url-prefix() {
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.onSurfaceFaintPrimary} ${theme.colors.onSurfaceFaintTertiary};
  }
`
