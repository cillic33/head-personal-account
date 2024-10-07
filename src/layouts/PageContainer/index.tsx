import {Props} from "./props";
import Flexbox from "@components/surfaces/Flexbox";
import styled from "styled-components";
import Header from "@components/complex/Header";

const StyledPageContainer = styled.div<Props>`
  background: ${props => props.theme.colors.surfaceBackground};
  min-height: 100vh;
`

const PageContainer = ({children}: Props) => {
  return (
    <StyledPageContainer>
      <Flexbox $direction="column">
        <Header />
        <Flexbox $justify="space-between">
          {children}
        </Flexbox>
      </Flexbox>
    </StyledPageContainer>
  );
}

export default PageContainer;
