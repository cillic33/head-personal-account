import {IProps} from "./props";
import {TTableCell} from "@typing/TTable";
import styled from "styled-components";
import Typography from "@components/data-display/Typography";
import {theme} from "@utils/theme/theme";
import Flexbox from "@components/surfaces/Flexbox";
import Person from "@components/data-display/Person";
import Image from "@components/data-display/Image";
import DivisionBlueIcon from "@images/DivisionBlueIcon.svg";
import Chip from "@components/data-display/Chip";

interface IStyledTableBodyTd {
  width?: number;
}

const StyledTableBodyTd = styled.td<IStyledTableBodyTd>`
  background: #fff;
  padding: 6px 8px;
  border-bottom: 1px solid ${theme.colors.surfacePrimary};
  width: ${props => props.width + "px" || undefined};
  min-width: ${props => props.width + "px" || undefined};
  max-width: ${props => props.width + "px" || undefined};
`

const TableBodyTd = ({k: key, data, settings, onClick}: IProps) => {
  const width = (settings && settings.width) ? settings.width : undefined;
  const isEmployee = (settings && settings.isEmployee) ? settings.isEmployee : undefined;
  const isDivision = (settings && settings.isDivision) ? settings.isDivision : undefined;
  const isCenter = (settings && settings.isCenter) ? settings.isCenter : undefined;
  const isStatus = (settings && settings.isStatus) ? settings.isStatus : undefined;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  if (key === "id") {
    return;
  }

  if (typeof data === "object") {
    return (
      <StyledTableBodyTd key={key} width={width} onClick={handleClick}>
        <Flexbox $gap="8px" $align="center" $justify={isStatus ? "center" : undefined}>
          {isEmployee &&
            <Person
              src={data["avatar" as keyof TTableCell]}
              name={data["name" as keyof TTableCell]}
              $fontVariant="caption-regular"
              $isNowrap
              $isEllipsis
            />
          }
          {isStatus &&
            <Chip $background={data["bgColor" as keyof TTableCell]} $padding="4px 12px" $borderRadius="4px">
              <Typography $variant="caption-semibold" $color={data["color" as keyof TTableCell]} $isNowrap>
                {data["title" as keyof TTableCell]}
              </Typography>
            </Chip>
          }
          {!isEmployee && !isStatus &&
            Object.keys(data).map((nestedKey) => {
              return (
                <Typography $variant="caption-regular" key={nestedKey}>
                  {data[nestedKey as keyof TTableCell]}
                </Typography>
              );
            })}
        </Flexbox>
      </StyledTableBodyTd>
    );
  }

  return (
    <StyledTableBodyTd key={key} width={width} onClick={handleClick}>
      <Flexbox $gap="8px" $align="center" $justify={isCenter ? "center" : undefined}>
        {isDivision &&
          <Image src={DivisionBlueIcon} $width="24px" $height="24px" />
        }
        <Typography $variant="caption-regular" $isNowrap $isEllipsis>
          {data}
        </Typography>
      </Flexbox>
    </StyledTableBodyTd>
  );
}

export default TableBodyTd;
