import {Props} from "./Props";
import Flexbox from "@components/surfaces/Flexbox";
import styled from "styled-components";

const StyledPageContainer = styled.div`
  background: #0254AC26;
  min-height: 100vh;
`

const PageContainer = ({children}: Props) => {
  return (
    <StyledPageContainer>
      <Flexbox>
        <div>Header</div>
        {children}
      </Flexbox>
    </StyledPageContainer>
  );
}

export default PageContainer;
