import {IProps} from "./props";
import styled from "styled-components";

const StyledFlexbox = styled.div<IProps>`
  display: flex;
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  align-items: ${props => props.$align || undefined};
  flex-wrap: ${props => props.$flexWrap || undefined};
  justify-content: ${props => props.$justify || undefined};
  flex-direction: ${props => props.$direction || undefined};
  gap: ${props => props.$gap || undefined};
  padding: ${props => props.$padding || undefined};
  margin: ${props => props.$margin || undefined};
  background: ${props => props.$background || undefined};
  border-radius: ${props => props.$borderRadius || undefined};
  border: ${props => props.$border || undefined};
  border-width: ${props => props.$borderWidth || undefined};
  flex: ${props => props.$flex || undefined};
`

const Flexbox = ({children, ...props}: IProps) => {
  return (
    <StyledFlexbox {...props}>
      {children}
    </StyledFlexbox>
  );
}

export default Flexbox;
