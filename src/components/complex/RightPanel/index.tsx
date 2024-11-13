import {IPanelProps, IProps} from "@components/complex/RightPanel/props";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import { CSSTransition } from 'react-transition-group';
import {useRef} from "react";
import {StylesCSSTransition} from "./styles"
import {SLIDE_PANEL_TIME, SLIDE_PANEL_WIDTH} from "@utils/const";
import Button from "@components/inputs/Button";
import CloseGrayIcon from "@images/CloseGrayIcon.svg";
import Image from "@components/data-display/Image";

const StyledCSSTransition = styled.div`
  ${StylesCSSTransition};
`

const StyledRightPanel = styled.div<IPanelProps>`
  width: calc(${props => props.$width || SLIDE_PANEL_WIDTH} + 16px);
  position: absolute;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
`

const StyledRightPanelInside = styled.div<IPanelProps>`
  width: ${props => props.$width || SLIDE_PANEL_WIDTH};
  margin-left: 16px;
  background: #fff;
  border: 1px solid ${theme.colors.surfacePrimary};
  border-radius: 8px;
  padding: 24px;
`

const RightPanel = ({children, isShow, $width, onCloseClick}: IProps) => {
  const panelRef = useRef(null);

  const handleCloseClick = () => {
    if (onCloseClick) {
      onCloseClick();
    }
  }

  return (
    <StyledCSSTransition>
      <CSSTransition
        in={isShow}
        timeout={SLIDE_PANEL_TIME}
        unmountOnExit
        classNames="panel__panel"
        nodeRef={panelRef}
      >
        <StyledRightPanel ref={panelRef} $width={$width}>
          <StyledRightPanelInside $width={$width}>
            <Button $width="32px" $height="32px" $position="absolute" $top="8px" $right="16px" onClick={handleCloseClick}>
              <Image src={CloseGrayIcon} $width="20px" $height="20px" />
            </Button>
            {children}
          </StyledRightPanelInside>
        </StyledRightPanel>
      </CSSTransition>
    </StyledCSSTransition>
  );
}

export default RightPanel;
