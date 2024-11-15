import {IPanelProps, IProps} from "@components/complex/RightPanel/props";
import styled from "styled-components";
import {theme} from "@utils/theme/theme";
import { CSSTransition } from 'react-transition-group';
import {FC, useRef} from "react";
import {StylesCSSTransition} from "./styles"
import {SLIDE_PANEL_TIME, SLIDE_PANEL_WIDTH} from "@utils/const";
import {Button} from "@components/inputs/Button";
import CloseGrayIcon from "@images/CloseGrayIcon.svg";
import {Image} from "@components/data-display/Image";
import {scrollXS} from "@utils/mixins";

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
  height: 100%;
  margin-left: 16px;
  background: #fff;
  border: 1px solid ${theme.colors.surfacePrimary};
  border-radius: 8px;
  padding: 8px 0 8px 24px;
`

const StyledRightPanelScroll = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
  ${scrollXS};
  scrollbar-gutter: stable;
  padding: 16px 16px 16px 0;
`

// @barrelblur: убрать доллары
export const RightPanel: FC<IProps> = ({children, isShow, $width, onCloseClick}) => {
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
            <StyledRightPanelScroll>
              <Button $width="32px" $height="32px" $position="absolute" $top="8px" $right="16px" onClick={handleCloseClick}>
                <Image src={CloseGrayIcon} $width="20px" $height="20px" />
              </Button>
              {children}
            </StyledRightPanelScroll>
          </StyledRightPanelInside>
        </StyledRightPanel>
      </CSSTransition>
    </StyledCSSTransition>
  );
}
