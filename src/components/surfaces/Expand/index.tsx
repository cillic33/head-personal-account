import {useBoolean} from "@hooks/use-toggle";
import clsx from "clsx";
import Typography from "@components/data-display/Typography";
import {Props} from "./props";
import DragNDropIcon from "@images/DragNDropIcon.svg";
import ChevronDownGray from "@images/ChevronDownGray.svg";
import styled from "styled-components";
import Flexbox from "@components/surfaces/Flexbox";
import Image from "@components/data-display/Image";

const StyledExpand = styled.div<Props>`
  .expand {
    &__head {
      padding: 16px;
      border-bottom: 1px solid ${props => props.theme.colors.onSurfaceFaintSecondary};
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
    }
  }
`

const Expand = (props: Props) => {
  const {children, title, $isDragIcon = false} = props;
  const {isOn, toggle} = useBoolean(true);

  return (
    <StyledExpand {...props}>
      <div className="expand__head" onClick={toggle}>
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
          <Image
            src={ChevronDownGray}
            className={clsx(
              !isOn && 'expand__chevron',
              isOn && 'expand__chevron_active'
            )}
            $width="24px"
            $height="24px"
          />
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
