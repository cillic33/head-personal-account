import {IProps} from "./props";
import styled from "styled-components";

const StyledChip = styled.div<IProps>`
  width: ${props => props.$width || undefined};
  height: ${props => props.$height || undefined};
  background: ${props => props.$background || undefined};
  border-radius: ${props => props.$borderRadius || undefined};
  position: ${props => props.$position || undefined};
  top: ${props => props.$top || undefined};
  right: ${props => props.$right || undefined};
  border: ${props => props.$border || undefined};
  padding: ${props => props.$padding || undefined};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${props => props.$gap || undefined};
`

const Chip = ({...props}: IProps) => {
  return (
    <StyledChip {...props} />
  );
}

export default Chip;
