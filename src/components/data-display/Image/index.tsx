import {Props} from "./props";
import styled from "styled-components";

const StyledImage = styled.img.attrs((props) => ({
  src: props.src,
  alt: props.alt,
}))<Props>`
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
`

const Image = ({...props}: Props) => {
  return (
    <StyledImage {...props} />
  );
}

export default Image;
