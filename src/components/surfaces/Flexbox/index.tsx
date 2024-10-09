import {IProps} from "./props";
import styled from "styled-components";

const StyledFlexbox = styled.div<IProps>`
  display: flex;
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  align-items: ${props => props.$align || undefined};
  justify-content: ${props => props.$justify || undefined};
  flex-direction: ${props => props.$direction || undefined};
  gap: ${props => props.$gap || undefined};
  padding: ${props => props.$padding || undefined};
`

const Index = ({children, ...props}: IProps) => {
  return (
    <StyledFlexbox {...props}>
      {children}
    </StyledFlexbox>
  );
}

export default Index;
