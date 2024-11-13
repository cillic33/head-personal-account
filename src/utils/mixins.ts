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

export const scrollX = css`
  &::-webkit-scrollbar {
    width: 16px;
    height: 16px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    border: solid 6px transparent;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    box-shadow: inset 0 0 2px 2px ${theme.colors.onSurfaceFaintPrimary};
    border: solid 6px transparent;
  }

  @-moz-document url-prefix() {
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.onSurfaceFaintPrimary} ${theme.colors.onSurfaceFaintTertiary};
  }
`

export const scrollXS = css`
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    background: transparent;
  }

  &::-webkit-scrollbar-track {
    border: solid 3px transparent;
  }

  &::-webkit-scrollbar-thumb {
    cursor: pointer;
    box-shadow: inset 0 0 1px 1px ${theme.colors.onSurfaceFaintPrimary};
    border: solid 3px transparent;
  }

  @-moz-document url-prefix() {
    scrollbar-width: thin;
    scrollbar-color: ${theme.colors.onSurfaceFaintPrimary} ${theme.colors.onSurfaceFaintTertiary};
  }
`
