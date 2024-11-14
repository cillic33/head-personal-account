import {IProps, IStyledOverlayProps, IStyledPopupProps} from "./props";
import {theme} from "@utils/theme/theme";
import styled from "styled-components";
import Flexbox from "@components/surfaces/Flexbox";
import Typography from "@components/data-display/Typography";
import Button from "@components/inputs/Button";
import Image from "@components/data-display/Image";
import CloseGrayIcon from "@images/CloseGrayIcon.svg";
import {MouseEvent, useEffect, useRef} from "react";

const StyledOverlay = styled.div<IStyledOverlayProps>`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: ${theme.colors.specialModalOverlay};
`

const StyledPopup = styled.div<IStyledPopupProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #fff;
  border: 1px solid ${theme.colors.surfacePrimary};
  border-radius: 12px;
  box-shadow: 0 16px 32px -16px ${theme.colors.baseShadowFar};
  width: ${props => props.$width || undefined}
`

// @barrelblur: неправильно размечена функция
const SimplePopup = (
  {
    children,
    isShow,
    title,
    $width,
    submitTitle = 'Добавить',
    cancelTitle = 'Отменить',
    onClose,
    onSubmit,
    onCancel,
    $isDisabledSubmit = false,
  }: IProps) => {
  const overlayRef = useRef(null);
  const closeBtnRef = useRef(null);
  const closeImgRef = useRef(null);

  useEffect(() => {
    document.addEventListener('keydown', handleEscClick);

    return () => {
      document.removeEventListener('keydown', handleEscClick);
    }
  });

  const handleEscClick = (event: KeyboardEvent) => {
    if (onClose && event.key === 'Escape') {
      onClose();
    }
  }

  const handleCloseClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (onClose &&
      (
        event.target === overlayRef.current ||
        event.target === closeBtnRef.current ||
        event.target === closeImgRef.current
      )
    ) {
      onClose();
    }
  }

  const handleCancelClick = () => {
    if (onCancel) {
      onCancel();
    }
  }

  const handleSubmitClick = () => {
    if (onSubmit) {
      onSubmit();
    }
  }

  // @barrelblur: убрать доллары
  return (
    <>
      {isShow &&
        <StyledOverlay ref={overlayRef} onClick={handleCloseClick}>`
          <StyledPopup $width={$width}>
            <Flexbox $padding="16px 16px 16px 24px" $align="center" gap="16px" $justify="space-between" $background="#fff" $borderRadius="12px 12px 0 0">
              <Typography $variant="h3">{title}</Typography>
              <Button $variant="no-style" size="no-size" $width="32px" $height="32px" $ref={closeBtnRef}>
                <Image src={CloseGrayIcon} $width="20px" $height="20px" $ref={closeImgRef} />
              </Button>
            </Flexbox>
            <Flexbox $padding="24px" $background={theme.colors.surfaceSecondary}>
              {children}
            </Flexbox>
            <Flexbox
              $padding="16px 24px"
              gap="16px"
              $background="#fff"
              $align="center"
              $justify="flex-end"
              $borderRadius="0 0 12px 12px"
            >
              <Button $variant="primary" size="m" onClick={handleCancelClick}>{cancelTitle}</Button>
              <Button $variant="dark" size="m" onClick={handleSubmitClick} disabled={$isDisabledSubmit}>{submitTitle}</Button>
            </Flexbox>
          </StyledPopup>
        </StyledOverlay>
      }
    </>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default SimplePopup;
