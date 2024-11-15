import {IProps} from "./props";
import {TTableCell, TTableTypes} from "@typing/TTable";
import styled from "styled-components";
import {Typography} from "@components/data-display/Typography";
import {theme} from "@utils/theme/theme";
import {Flexbox} from "@components/surfaces/Flexbox";
import {Person} from "@components/data-display/Person";
import {Image} from "@components/data-display/Image";
import DivisionBlueIcon from "@images/DivisionBlueIcon.svg";
import {Chip} from "@components/data-display/Chip";
import {FC} from "react";

interface IStyledTableBodyTd {
  width?: number;
}

const StyledTableBodyTd = styled.td<IStyledTableBodyTd>`
  background: #fff;
  padding: 5px 8px;
  border-top: 1px solid #fff;
  border-bottom: 1px solid ${theme.colors.surfacePrimary};
  width: ${props => props.width + "px" || undefined};
  min-width: ${props => props.width + "px" || undefined};
  max-width: ${props => props.width + "px" || undefined};
`

// @barrelblur: непонятный атрибут «k»
export const TableBodyTd: FC<IProps> = ({name, data, settings, onClick}) => {
  const width = (settings && settings.width) ? settings.width : undefined;

  // Тип данных
  const type = (settings && settings.type) ? settings.type : undefined;

  // Если данные в колонке нужно оцентровать
  const isCenter = (settings && settings.isCenter) ? settings.isCenter : undefined;

  const handleClick = () => {
    if (onClick) {
      onClick();
    }
  }

  if (name === "id") {
    return;
  }

  // @barrelblur немного сложная и спицифичная форма полиформизма
  // @barrelblur требуется рефакторинг
  if (typeof data === "object") {
    return (
      <StyledTableBodyTd key={name} width={width} onClick={handleClick}>
        <Flexbox gap="8px" align="center" justify={isCenter ? "center" : undefined}>
          {type === TTableTypes.Person &&
            <Person
              src={data["avatar" as keyof TTableCell]}
              name={data["name" as keyof TTableCell]}
              fontVariant="caption-regular"
              isNowrap
              isEllipsis
            />
          }
          {type === TTableTypes.Chip &&
            <Chip background={data["bgColor" as keyof TTableCell]} padding="4px 12px" borderRadius="4px">
              <Typography variant="caption-semibold" color={data["color" as keyof TTableCell]} isNowrap>
                {data["title" as keyof TTableCell]}
              </Typography>
            </Chip>
          }
        </Flexbox>
      </StyledTableBodyTd>
    );
  }

  return (
    <StyledTableBodyTd key={name} width={width} onClick={handleClick}>
      <Flexbox gap="8px" align="center" justify={isCenter ? "center" : undefined}>
        {type === TTableTypes.Division &&
          <Image src={DivisionBlueIcon} width="24px" height="24px" />
        }
        <Typography variant="caption-regular" isNowrap isEllipsis>
          {data}
        </Typography>
      </Flexbox>
    </StyledTableBodyTd>
  );
}
