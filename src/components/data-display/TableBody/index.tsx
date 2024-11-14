import {IProps} from "./props";
import TableBodyTr from "@components/data-display/TableBodyTr";
import {MutableRefObject} from "react";

// @barrelblur: неправильно размечена функция
const TableBody = ({data, settings, onClick}: IProps) => {
  const handleClick = (trRef: MutableRefObject<HTMLTableRowElement | null>) => {
    if (onClick) {
      onClick(trRef);
    }
  }

  return (
    <tbody>
    {data.map(row => (
        // barrelblur: здесь правильно используется ID
      <TableBodyTr data={row} key={row.id as string} settings={settings} onClick={handleClick} />
    ))}
    </tbody>
  );
}

// @barrelblur: не используем дефолтный экспорт
export default TableBody;
