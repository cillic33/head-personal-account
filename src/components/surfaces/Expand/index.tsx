import {useBoolean} from "@hooks/use-toggle";
import clsx from "clsx";
import Typography from "@components/data-display/Typography";
import {Props} from "./props";
import DragNDropIcon from "@images/DragNDropIcon.svg";
import ChevronDownGray from "@images/ChevronDownGray.svg";
import GotoGrayIcon from "@images/GotoGrayIcon.svg";
import PlusCircleGrayIcon from "@images/PlusCircleGrayIcon.svg";
import ArrowRightGray from "@images/ArrowRightGray.svg";
import styled from "styled-components";
import Flexbox from "@components/surfaces/Flexbox";
import Image from "@components/data-display/Image";
import LinkComponent from "@components/data-display/Link";
import {theme} from "@utils/theme/theme";
import {FC} from "react";

// @barrelblur: убрать доллары
const StyledExpand = styled.div<Props>`
  width: ${props => props.$width || undefined};
  
  .expand {    
    &__head {
      padding: 16px;
    }
    
    &__title {
      cursor: default;
    }
    
    &__draggable {
      cursor: grab;
    }

    &__chevron {
      cursor: pointer;
      transform: rotate(180deg);

      &_active {
        cursor: pointer;
        transform: rotate(0deg);
      }
    }
    
    &__body {
      padding: 16px;
      border-top: ${props => props.$isSplitter ? `1px solid ${theme.colors.onSurfaceFaintSecondary}` : undefined};
    }
  }
`

const Expand: FC<Props> = (props) => {
  const {
    children,
    title,
    $isOpen = false,
      // может быть заменить на typeIcon? Или просто Type?
    $isDragIcon = false,
    $isPlusIcon = false,
    $externalLink = '',
    $internalLink = '',
    $onPlusClick,
  } = props;

  // barrelblur: isOn, isSetOn
  const {isOn, toggle} = useBoolean($isOpen);

  const handlePlusClick = () => {
    if ($onPlusClick) {
      $onPlusClick();
    }
  }

  return (
    <StyledExpand {...props}>
      <div className="expand__head">
        <Flexbox gap="12px" $align="center" $justify="space-between">
          <Flexbox gap="12px" $align="center">
            {$isDragIcon &&
              <Image
                src={DragNDropIcon}
                className="expand__draggable"
                $width="24px"
                $height="24px"
              />
            }
            <Typography
              $variant="h4"
              className="expand__title"
            >
              {title}
            </Typography>
          </Flexbox>

          <Flexbox gap="12px" $align="center">
            {$isPlusIcon &&
              <Flexbox $width="24px" $height="24px" $align="center" $justify="center" $flex="1 0 20px" onClick={handlePlusClick} $cursor="pointer">
                <Image
                  src={PlusCircleGrayIcon}
                  $width="20px"
                  $height="20px"
                />
              </Flexbox>
            }
            {$internalLink !== "" &&
              <Flexbox $width="24px" $height="24px" $align="center" $justify="center" $flex="1 0 20px">
                <LinkComponent href={$internalLink} target="_blank">
                  <Image
                    src={ArrowRightGray}
                    $width="20px"
                    $height="20px"
                  />
                </LinkComponent>
              </Flexbox>
            }
            {$externalLink !== "" &&
              <Flexbox $width="24px" $height="24px" $align="center" $justify="center" $flex="1 0 20px">
                <LinkComponent href={$externalLink} target="_blank">
                  <Image
                    src={GotoGrayIcon}
                    $width="20px"
                    $height="20px"
                  />
                </LinkComponent>
              </Flexbox>
            }
            <Image
              src={ChevronDownGray}
              className={clsx(
                !isOn && 'expand__chevron',
                isOn && 'expand__chevron_active'
              )}
              $width="24px"
              $height="24px"
              $flex="1 0 24px"
              onClick={toggle}
            />
          </Flexbox>
        </Flexbox>
      </div>

      {isOn &&
        <div className="expand__body">
          {children}
        </div>
      }
    </StyledExpand>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default Expand;
