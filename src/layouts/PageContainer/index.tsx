import {IProps} from "./props";
import Flexbox from "@components/surfaces/Flexbox";
import styled from "styled-components";
import Header from "@components/complex/Header";

const StyledPageContainer = styled.div<IProps>`
  background: ${props => props.theme.colors.surfaceBackground};
  min-height: 100vh;
`

// @barrelblur: неправильно размечена функция
// @barrelblur: убрать доллары
const PageContainer = ({children}: IProps) => {
  return (
    <StyledPageContainer>
      <Flexbox $direction="column">
        <Header />
        <Flexbox $justify="space-between" $padding="24px 32px">
          {children}
        </Flexbox>
      </Flexbox>
    </StyledPageContainer>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default PageContainer;
