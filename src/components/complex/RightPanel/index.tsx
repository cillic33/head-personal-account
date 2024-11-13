import {IProps} from "@components/complex/RightPanel/props";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import { CSSTransition } from 'react-transition-group';
import {useRef} from "react";
import {StylesCSSTransition} from "./styles"
import {SLIDE_PANEL_TIME} from "@utils/const";

const StyledCSSTransition = styled.div`
  ${StylesCSSTransition};
`

const StyledRightPanel = styled.div`
  width: calc(560px + 16px);
  position: absolute;
  right: 0;
  top: 0;
`

const StyledRightPanelInside = styled.div`
  width: 560px;
  margin-left: 16px;
  background: #fff;
  border: 1px solid ${theme.colors.surfacePrimary};
  border-radius: 8px;
  padding: 24px;
`

const RightPanel = ({children, isShow}: IProps) => {
  const panelRef = useRef(null);

  return (
    <StyledCSSTransition>
      <CSSTransition
        in={isShow}
        timeout={SLIDE_PANEL_TIME}
        unmountOnExit
        classNames="panel__panel"
        nodeRef={panelRef}
      >
        <StyledRightPanel ref={panelRef}>
          <StyledRightPanelInside>
            {children}
          </StyledRightPanelInside>
        </StyledRightPanel>
      </CSSTransition>
    </StyledCSSTransition>
  );
}

export default RightPanel;
