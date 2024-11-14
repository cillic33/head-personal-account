import {IProps} from "./props";
import styled from "styled-components";
import {RefObject} from "react";

// @barrelblur: убрать доллары
const StyledImage = styled.img<IProps>`
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  flex: ${props => props.$flex || undefined};
`
// @barrelblur: неправильно размечена функция
const Image = ({...props}: IProps) => {
  return (
    <StyledImage {...props} ref={props.$ref as RefObject<HTMLImageElement>} />
  );
}

// @barrelblur: не используем дефолтный экспорт
export default Image;
