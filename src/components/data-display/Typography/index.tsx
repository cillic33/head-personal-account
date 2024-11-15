import {IProps} from "./props";
import styled, {css} from "styled-components";
import {FC} from "react";

const StyledTypography = styled.span<IProps>`
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
      case "chip-xs":
        return css`
          font-size: 8px;
          line-height: 12.4px;
          font-weight: 600;
        `
      case "chip-s":
        return css`
          font-size: 14px;
          line-height: 16px;
          font-weight: 600;
        `
      case "chip-m":
        return css`
          font-size: 16px;
          line-height: 20px;
          font-weight: 600;
        `
      case "xs-bold":
        return css`
          font-size: 12px;
          line-height: 19.2px;
          font-weight: 700;
        `
    }
  }}
  
  // @barrelblur: мы не должн управлять данными значениями напрямую
  // @barrelblur: убрать доллары
  color: ${props => props.$color || props.theme.colors.textIconBasePrimary};
  padding: ${props => props.$padding || undefined};
  white-space: ${props => props.$isNowrap && 'nowrap'};
  text-align: ${props => props.$textAlign || undefined};
  flex: ${props => props.$flex || undefined};
  
  ${props => {
    if (props.$isEllipsis) {
      return css`
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
      `
    }
  }};
`

const Typography: FC<IProps> = (props) => {
  return (
    <StyledTypography {...props} />
  );
}

// @barrelblur: не используем дефолтный экспорт
export default Typography;
