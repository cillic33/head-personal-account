import {IProps} from "./props";
import styled from "styled-components";
import {FC, RefObject} from "react";

// @barrelblur: убрать доллары
const StyledImage = styled.img<IProps>`
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  flex: ${props => props.$flex || undefined};
`

export const Image: FC<IProps> = ({...props}) => {
  return (
    <StyledImage {...props} ref={props.$ref as RefObject<HTMLImageElement>} />
  );
}
