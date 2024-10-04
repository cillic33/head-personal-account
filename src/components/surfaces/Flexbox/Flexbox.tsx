import {Props} from "@components/surfaces/Flexbox/Props";
import styled from "styled-components";

const StyledFlexbox = styled.div<Props>`
  display: flex;
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  align-items: ${props => props.$align || undefined};
  justify-content: ${props => props.$justify || undefined};
  flex-direction: ${props => props.$direction || undefined};
  gap: ${props => props.$gap || undefined};
`

const Flexbox = ({children, ...props}: Props) => {
  return (
    <StyledFlexbox {...props}>
      {children}
    </StyledFlexbox>
  );
}

export default Flexbox;
