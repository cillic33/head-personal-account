import {IProps} from "@components/surfaces/Gridbox/props";
import styled from "styled-components";

const StyledGridbox = styled.div<IProps>`
  display: grid;
  grid-template-columns: ${props => props.$gridTemplateColumns || undefined};
  grid-template-rows: ${props => props.$gridTemplateRows || undefined};
  row-gap: ${props => props.$rowGap || undefined};
  column-gap: ${props => props.$columnGap || undefined};
`

const Gridbox = (props: IProps) => {
  return (
    <StyledGridbox {...props} />
  );
}

export default Gridbox;