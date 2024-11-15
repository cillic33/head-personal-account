import {IProps} from "./props";
import {Flexbox} from "@components/surfaces/Flexbox";
import {Typography} from "@components/data-display/Typography";
import styled from "styled-components";
import {FC} from "react";

const StyledBar = styled.div`
  width: 100%;
  height: 8px;
  background: ${props => props.theme.colors.onSurfaceFaintSecondary};
  border-radius: 10px;
  position: relative;
`

const StyledFilledBar = styled.div<IProps>`
  width: ${props => props.percent + "%"};
  height: 8px;
  background: ${props => props.color};
  border-radius: 10px;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
`

export const ProgressBar: FC<IProps> = ({percent, color, title = ""}) => {
  return (
    <Flexbox gap="4px" direction="column" padding="4px 0">
      {title !== "" &&
        <Flexbox justify="space-between">
          <Typography variant="body-regular">{title}</Typography>
          <Typography variant="body-semibold">{percent} %</Typography>
        </Flexbox>
      }
      <StyledBar>
        <StyledFilledBar color={color} percent={percent} />
      </StyledBar>
    </Flexbox>
  );
}
