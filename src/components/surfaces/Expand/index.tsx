import {useBoolean} from "@hooks/use-toggle";
import clsx from "clsx";
import Typography from "@components/data-display/Typography";
import {Props} from "./props";
import DragNDropIcon from "@images/DragNDropIcon.svg";
import ChevronDownGray from "@images/ChevronDownGray.svg";
import GotoGrayIcon from "@images/GotoGrayIcon.svg";
import PlusCircleGrayIcon from "@images/PlusCircleGrayIcon.svg";
import ArrowGrayIcon from "@images/ArrowGrayIcon.svg";
import styled from "styled-components";
import Flexbox from "@components/surfaces/Flexbox";
import Image from "@components/data-display/Image";
import Link from "@components/data-display/Link";

const StyledExpand = styled.div<Props>`
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
      border-top: 1px solid ${props => props.theme.colors.onSurfaceFaintSecondary};
    }
  }
`

const Expand = (props: Props) => {
  const {
    children,
    title,
    $isOpen = false,
    $isDragIcon = false,
    $externalLink = '',
    $internalLink = '',
    $popupId = '',
  } = props;
  const {isOn, toggle} = useBoolean($isOpen);

  return (
    <StyledExpand {...props}>
      <div className="expand__head">
        <Flexbox $gap="12px" $align="center" $justify="space-between">
          <Flexbox $gap="12px" $align="center">
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

          <Flexbox $gap="12px" $align="center">
            {$popupId !== "" &&
              <Flexbox $width="24px" $height="24px" $align="center" $justify="center" $flex="1 0 20px">
                <Image
                  src={PlusCircleGrayIcon}
                  $width="20px"
                  $height="20px"
                />
              </Flexbox>
            }
            {$internalLink !== "" &&
              <Flexbox $width="24px" $height="24px" $align="center" $justify="center" $flex="1 0 20px">
                <Link href={$internalLink} target="_blank">
                  <Image
                    src={ArrowGrayIcon}
                    $width="20px"
                    $height="20px"
                  />
                </Link>
              </Flexbox>
            }
            {$externalLink !== "" &&
              <Flexbox $width="24px" $height="24px" $align="center" $justify="center" $flex="1 0 20px">
                <Link href={$externalLink} target="_blank">
                  <Image
                    src={GotoGrayIcon}
                    $width="20px"
                    $height="20px"
                  />
                </Link>
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

export default Expand;
