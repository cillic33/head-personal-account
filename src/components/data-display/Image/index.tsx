import {IProps} from "./props";
import styled from "styled-components";
import {RefObject} from "react";

const StyledImage = styled.img<IProps>`
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  flex: ${props => props.$flex || undefined};
`

const Image = ({...props}: IProps) => {
  return (
    <StyledImage {...props} ref={props.$ref as RefObject<HTMLImageElement>} />
  );
}

export default Image;
