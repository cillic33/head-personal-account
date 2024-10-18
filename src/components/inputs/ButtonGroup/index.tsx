import {Fragment, MouseEvent, useState} from "react";
import {IButtonGroupData} from "@typing/TButtonGroupData";
import Button from "@components/inputs/Button";
import Divider from "@components/data-display/Divider";
import {IProps} from "./props";
import styled from "styled-components";
import {ensure} from "@utils/index";

const StyledButtonGroupWrap = styled.div<IProps>`
  display: flex;
  align-items: center;
  gap: 8px;
  white-space: nowrap;
`

const StyledButtonGroup = styled.div<IProps>`
  display: flex;
  gap: 4px;
  padding: 3px;
  background: #ffffff;
  border-radius: 8px;
  border: 1px solid ${props => props.theme.colors.surfacePrimary};
  
  @media (max-width: ${props => props.theme.breakpoints.s}) {
    flex-direction: column;
  }
`

const ButtonGroup = ({buttons, onClick, $buttonsWidth}: IProps) => {
  const [currentButtons, setCurrentButtons] = useState<IButtonGroupData[]>(ensure(buttons));

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setCurrentButtons(currentButtons.map((item) => {
      return {
        ...item,
        isActive: item.id === event.currentTarget.id,
      }
    }));
    if (onClick) {
      onClick(event);
    }
  }

  return (
    <StyledButtonGroupWrap>
      <StyledButtonGroup>
        {currentButtons && currentButtons.map((item, index) =>
          <Fragment key={item.id}>
            {index !== 0 &&
              <Divider direction="vertical" />
            }
            <Button
              id={item.id}
              $variant="light"
              size="s"
              $padding="2px"
              $isActive={item.isActive}
              onClick={handleClick}
              $width={$buttonsWidth}
            >
              {item.title}
            </Button>
          </Fragment>
        )}
      </StyledButtonGroup>
    </StyledButtonGroupWrap>
  );
}

export default ButtonGroup;
